/*
 * @Author: your name
 * @Date: 2021-06-29 15:19:12
 * @LastEditTime: 2021-09-17 17:17:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \333d:\my\myComponent\src\plugins\vant.js
 */
import Vue from 'vue';
import 'vant/lib/index.css';
import {
    Skeleton,
    Dialog,
    Toast,
    IndexBar,
    IndexAnchor,
    Cell,
    PullRefresh,
    List
} from 'vant';

Vue.use(Skeleton);
Vue.use(Dialog);
Vue.use(Toast);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
Vue.use(PullRefresh);
Vue.use(List);

Vue.prototype.$dialog = Dialog;
Vue.prototype.$toast = Toast;
