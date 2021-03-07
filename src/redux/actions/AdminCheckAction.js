
import axios from 'axios';
import ApiUrl from "../../Config/ApiUrls";
import {ADMIN_CHECK} from "./ActionTypes";
import httpService from "../../Config/Http.service";

export function getAdminCheck(config,callback) {
    return dispatch => {
        const url = ApiUrl.AdminCheckUrl;
        return httpService.httpGet(url,config)
            .then(response => {
                if(response !== undefined){
                    callback(response.data.message)
                }
            }).catch(error => {
                // window.location.href = '/404';
                throw(error);
            });
    }
}
