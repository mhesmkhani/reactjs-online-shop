import axios from 'axios';
import * as ApiUrls from "./ApiUrls";
import {toast} from "react-toastify";
import storageService from "./storageService";
import {Redirect} from "react-router-dom";
import React from "react";

// axios.interceptors.request.use(
//     async config => {
//         console.log(config)
//         const url = config.url;
//         if(url === "http://127.0.0.1:8000/api/user/cart/store"){
//             spinner = true
//         }
//         return config;
//     },
//     error => {
//         Promise.reject(error)
//     });

axios.interceptors.response.use((response) => {
        return response
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 500) {
                toast('خطا در سرور!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else if (error.response.status === 401) {
                if(error.response.data.message === "passwordsIsIncorrect") {
                    toast('نام کاربری یا رمز عبور اشتباه است!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }else if(error.response.data.message === "unauthorized"){

                    toast('خطای اعتبار سنجی کاربر!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    },
                        setTimeout(
                            function() {
                                window.location.href = "/"
                            }
                                .bind(this),
                            5000
                        ));


                }else if(error.response.data.message === "AlreadyRegister"){

                    toast('شما قبلا ثبت نام کرده اید!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
               }else if(error.response.data.message === "EmailAlreadyRegisted"){

                    toast('این ایمیل قبلا ثبت شده است، لطفا ایمیل جدیدتری وارد نمایید', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }


            }else if (error.response.status === 403) {
                toast('درخواست نامعبتر میباشد!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            }

        }
    });

const httpService = {
    async httpGet(url, headers) {
        const res = await axios.get(ApiUrls.BaseServiceUrl + url, headers);
        if(res){
            return res;
        }
    },
    async httpPost(url, data,config) {
        const res = await axios.post(ApiUrls.BaseServiceUrl + url, data,config);
        if(res){
            return res.data;
        }
    },

};

export default httpService;
