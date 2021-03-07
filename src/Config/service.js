import axios from 'axios';
import axios1 from 'axios';
import axiosRetry from 'axios-retry';
import storageService from './Storage.service';
import {URL as BASE_URL} from '../config/Http'
import Base64 from "./Base64";
import {navigate} from "./Navigation.service";
import {Toast} from "native-base";

const axiosApiInstance = axios.create();

// Request interceptor for API calls
axios.interceptors.request.use(
    async config => {
        const token = await storageService.getItem('token');
        config.headers = {
            'Authorization': `Bearer ${token}`,
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });

async function refreshAccessToken() {
    return new Promise(async (resolve)=>{
        var headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        var data = new FormData();
        var refresh_token=await storageService.getItem('refresh_token')
        data.append('refresh_token', refresh_token);
        data.append('grant_type', 'refresh_token');
        data.append('client_id', '20I6ISMgbUVIRJIQLZVIEOzfmihjkkanl8zDyets');
        axios.post(BASE_URL + 'oauth/token/', data, {headers}).then(async (dataToken)=>{
            console.log('refreshToken1',dataToken.data)
            if(dataToken.data && dataToken.data.access_token){
                await storageService.saveItem('token', dataToken.data.access_token)
                await storageService.saveItem('refresh_token', dataToken.data.refresh_token)
                console.log(dataToken.data.access_token)
                resolve(dataToken.data.access_token)
            }else{
                storageService.clearItem('token')
                return navigate('auth')
            }
        }).catch(err=>{
            console.log('refresh token err ',refresh_token)
            console.log(err)
            storageService.clearItem('token')
            return navigate('auth')
        });
    })

}

// Response interceptor for API calls
axios.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const originalRequest = error.config;
    if (error&&error.response&&error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        refreshAccessToken().then(result=>{
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + result;
            originalRequest.headers['Authorization'] = 'Bearer ' + result;
            return axiosApiInstance(originalRequest);
        });

    }
    return Promise.reject(error);
});
// const result = await axios.post(url, data)

const httpService = {
    async httpGetWithHeader(url, headers) {
        const res = await axios.get(BASE_URL + url, {headers});
        return res;
    },
    async httpPost(url, data) {
        var headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        const res = await axios.post(BASE_URL + 'v1/' + url, data, {headers: headers});
        return res.data;
    },
    generateBase64(username, password) {
        return Base64.btoa(username + ':' + password)
    },
    async login(url, username, password) {
        var headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        var data = new FormData();
        data.append('email', username);
        data.append('password', password);
        data.append('grant_type', 'password');
        data.append('client_id', '20I6ISMgbUVIRJIQLZVIEOzfmihjkkanl8zDyets');
        console.log('omad')
        try {
            const res = await axios1.post(BASE_URL + url, data, {headers});
            console.log(res)
            return res.data;
        }catch (e) {
            console.log(e)
        }

    },
    async httpPutJwtFormData(url, obj) {
        const token = await storageService.getItem('token');
        var headers = {Authorization: 'Bearer ' + token, 'Content-Type': 'application/x-www-form-urlencoded'}
        var data = new FormData();
        for (let item in obj) {
            data.append(item, obj[item]);
        }
        const res = await axios1.put(BASE_URL + url, data, {headers});
        return res.data;
    },
    async httpPutJwtFile(url, data) {
        const token = await storageService.getItem('token');
        var headers = {Authorization: 'Bearer ' + token, 'Content-Type': 'application/x-www-form-urlencoded'}
        const res = await axios.put(BASE_URL + url, data, {headers});
        return res.data;
    },
    async httpPostJwt(url, data) {
        const token = await storageService.getItem('token');
        var headers = {Authorization: 'Bearer ' + token,'Content-Type':'application/json'}
        const res = await axios1.post(BASE_URL + url, data, {headers: headers});
        console.log(1,res);
        return res.data;
    },
    async httpPutJwt(url, data) {
        const token = await storageService.getItem('token');
        var headers = {Authorization: 'Bearer ' + token}
        const res = await axios1.put(BASE_URL + url, data, {headers: headers});
        return res.data;
    },
    async upload(url, data, contentType) {
        const username = await storageService.getItem('username');
        const password = await storageService.getItem('password');
        var headers = {Authorization: 'Basic ' + this.generateBase64(username, password)}
        const res = await axios.post(BASE_URL + url, data, {headers: headers});
        return res;
    },
    async httpGetJwt(url) {
        let self=this;

        const token = await storageService.getItem('token');
        var headers = {Authorization: 'Bearer ' + token}
        let res;
        try {
            res = await axios.get(BASE_URL + 'v1/' + url);
            return res.data;

        } catch (e) {
            console.log(e)
            // if (e.message.indexOf('401') > -1) {
            //     var headers1 = {'Content-Type': 'application/x-www-form-urlencoded'}
            //     var data = new FormData();
            //     var refresh_token=await storageService.getItem('refresh_token')
            //     data.append('refresh_token', refresh_token);
            //     data.append('grant_type', 'refresh_token');
            //     data.append('client_id', '20I6ISMgbUVIRJIQLZVIEOzfmihjkkanl8zDyets');
            //     axios.post(BASE_URL + 'oauth/token/', data, {headers:headers1}).then(async (dataToken)=>{
            //         console.log('refreshToken',dataToken.data)
            //         if(dataToken.data && dataToken.data.access_token){
            //             await storageService.saveItem('token', dataToken.data.access_token)
            //             await storageService.saveItem('refresh_token', dataToken.data.refresh_token)
            //             console.log('omad bere',url)
            //             return axiosRetry(axios1,{retryDelay:(retryCount)=>{
            //                 return retryCount*1000
            //                 },retries:1})
            //         }else{
            //             storageService.clearItem('token')
            //             return navigate('auth')
            //         }
            //     }).catch(err=>{
            //         console.log('refresh token err ',refresh_token)
            //         console.log(err)
            //         storageService.clearItem('token')
            //         return navigate('auth')
            //     });
            // } else {
            //     return Toast.show({
            //         text: e.message,
            //         type: 'danger',
            //         buttonText: 'ok',
            //         buttonStyle: {
            //             borderColor: 'white',
            //             borderWidth: 1,
            //             margin: 5,
            //             borderRadius: 7
            //         },
            //         textStyle: {...styles.TextRegular, fontSize: 14}
            //     })
            // }
        }
    },
    async httpGet(url) {
        let self=this;
        let res;
        try {
            res = await axios.get(BASE_URL + 'v1/' + url);
            return res.data;

        } catch (e) {
            if (e.message.indexOf('401') > -1) {
                var headers = {'Content-Type': 'application/x-www-form-urlencoded'}
                var data = new FormData();
                var refresh_token=await storageService.getItem('refresh_token')

                data.append('refresh_token', refresh_token);
                data.append('grant_type', 'refresh_token');
                data.append('client_id', '20I6ISMgbUVIRJIQLZVIEOzfmihjkkanl8zDyets');
                axios.post(BASE_URL + 'oauth/token/', data, {headers}).then(async (dataToken)=>{
                    console.log('refreshToken',dataToken.data)
                    if(dataToken.data && dataToken.data.access_token){
                        await storageService.saveItem('token', dataToken.data.access_token)
                        await storageService.saveItem('refresh_token', dataToken.data.refresh_token)
                        return self.httpGet(url)
                    }else{
                        storageService.clearItem('token')
                        return navigate('auth')
                    }
                }).catch(err=>{
                    console.log('refresh token err')
                    console.log(err)
                    storageService.clearItem('token')
                    return navigate('auth')
                });

            } else {
                return Toast.show({
                    text: 'something went wrong\n'+e.message,
                    type: 'danger',
                    buttonText: 'ok',
                    buttonStyle: {
                        borderColor: 'white',
                        borderWidth: 1,
                        margin: 5,
                        borderRadius: 7
                    },
                    textStyle: {...styles.TextRegular, fontSize: 14}
                })
            }
        }
    },
    async httpDeleteJwt(url) {
        const token = await storageService.getItem('token');
        var headers = {Authorization: 'Bearer ' + token}
        const res = await axios.delete(BASE_URL + url, {headers: headers});
        return res;
    },
    async initToken() {
        // token = await storageService.getItem('token');
        console.log(' init token')
        // global.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ZTUyNGEzYy1hMTMzLTQ1NDItODE4Ni1kMDY3MjdlZmU5ZTQiLCJpc3MiOiJhbmRyb2lkIiwiY2hhbmRwYXJfaXRlbV9pZCI6IjViOGU0NTI4Yjk3ZDYyNDU0OGIzNjE1MSIsImlhdCI6MTU2OTA5MTM4MiwiZXhwIjoxNTY5MTc3NzgyfQ.9T2TaGx30vRG8sOhnu3lP2_AGTtO9r2UtA7oJWnxQmk'
    }
};

export default httpService;
