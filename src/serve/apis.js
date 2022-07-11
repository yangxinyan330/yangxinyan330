/*
 * @Author: your name
 * @Date: 2021-06-18 14:26:50
 * @LastEditTime: 2021-09-17 17:16:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \333d:\my\myComponent\src\serve\apis.js
 */
let baseUrl = '/portal/api/home/gross/';
const APIS = {
    // 问题分类
    getProblemType: {
        url: `${baseUrl}month`,
        method: 'get',
        showLoading: true
    },
    getList: {
        url: 'https://api.vvhan.com/api/saorao?tel=15677246297',
        method: 'get',
        showLoading: true
    },
    getType: {
        url: 'https://api.vvhan.com/api/phone?tel=13145211010',
        method: 'get',
        showLoading: true
    },
    getData: {
        url: 'https://api.vvhan.com/api/dm?url=han88.net',
        method: 'get',
        showLoading: true
    },
    getListPage: {
        url: 'https://vegaverse-dev01.kankanai.com.cn/upms/logs/page',
        method: 'post',
        showLoading: true
    }
};

export default APIS;
