/*
 * @Author: your name
 * @Date: 2021-06-18 14:26:50
 * @LastEditTime: 2021-09-17 17:14:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \333d:\my\myComponent\src\serve\http.js
 */
import axios from 'axios';
import APIS from './apis.js';
import { Message, Loading } from 'element-ui';
import devs from '../assets/js/dev.js';

/**
 * 请求拦截器
 */
let loading = null;
let httpType = 1; // default 1,  errCode  2
axios.interceptors.request.use(config => {
    const api = APIS[config.apiName];
    let baseUrl = process.env.NODE_ENV === 'development' ? devs.VUE_APP_HOST : '';
    // let baseUrl = "http://localhost:8080";
    httpType = config.type ? config.type : 1;
    let token = 'fe242fc9-4447-4e44-b42d-a579764c42d1';
    config.url = api.url.indexOf('http') > -1 ? api.url : baseUrl + api.url;
    config.responseType = api.responseType ? api.responseType : 'json';
    config.method = api.method;
    config.method === 'post' ? config.data = config.apiParams : config.params = config.apiParams;
    config.headers.Authorization = `Bearer ${token}`;
    if (api.showLoading) {
        loading = Loading.service({
            text: api.loadingText || '加载中···',
            spinner: 'el-icon-loading',
            background: 'rgba(255, 255, 255, 0.6)',
            customClass: 'create-isLoading'
        });
    }

    return config;
});
/**
 * 返回拦截器
 */
axios.interceptors.response.use(
    res => {
        const codes = [res.data.code, res.data.errCode];
        let code = codes[httpType - 1];
        if (loading) {
            loading.close();
        }

        // eslint-disable-next-line eqeqeq
        if (code == 0 || res.config.responseType === 'blob' || res.data.success || code === 200 || res.status === 200) {
            // 请求成功
            return res.data || res.value;
        } else if (res.data.code === '036' || res.data.code === '002') {
            // Cookie.remove("token");
            // router.push({path:'/login'});
            location.reload();
            return Promise.reject('登录失效');
        }
        // 请求失败
        //	Vue.prototype.$message.error(res.data.msg);
        let msg = res.data.message || res.data.msg;
        Message.error(msg);
        return Promise.reject(msg);

    },err => {
        if (loading) {
            loading.close();
        }
        let message = '请求-错误，请稍后重试！';

        Message.error(message);
        return Promise.reject(message);
    }
);

/**
 * 基于Axios封装http方法
 * @param apiName {String} 接口名称
 * @param apiParams {Object} 接口参数
 */
const http = (apiName, apiParams = {}) => {
    return new Promise((resolve, reject) => {
        axios({ apiName, apiParams }).then(res => {
            let data = res.data ? res.data : res;
            resolve(data);
        },err => {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject(err);
        }
        ).catch(err => {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject(err);
        });
    });
};

export default http;
