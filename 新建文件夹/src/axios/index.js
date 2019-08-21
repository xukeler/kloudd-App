import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
axios.interceptors.request.use(
    config => {

        if (config.method === 'post') {

            config.data = qs.stringify(config.data);


        };
        return config;
    },
    err => {

        return Promise.reject(err);
    },
);
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then(
                res => {
                    resolve(res.data)
                },
                err => {
                    reject(err.data)
                }
            )
            .catch(err => {
                reject(err.data)
            });
    });
};
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            });
    });
};