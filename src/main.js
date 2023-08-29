import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import http from './serve/http.js';
Vue.prototype.$http = http;

// 第一个是videoJs的样式，后一个是vue-video-player的样式，因为考虑到我其他业务组件可能也会用到视频播放，所以就放在了main.js内
require('video.js/dist/video-js.css');
// require('vue-video-player/src/custom-theme.css');
/* 导入视频播放组件*/
// import VideoPlayer from 'vue-video-player';
// Vue.use(VideoPlayer);

import mixins from './mixins/index.js';
Vue.mixin(mixins);


// 全局注册所有组件
import componentJs from './utils/componentJs.js';
Vue.use(componentJs);

// import * as filters from '@/invariable/filters'; // global filters
// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key]);
// });

// 防止多次点击Button    v-preventReClick
Vue.directive('preventReClick', {
    inserted(el, binding) {
        el.addEventListener('click', () => {
            if (!el.disabled) {
                el.disabled = true;
                setTimeout(() => {
                    el.disabled = false;
                }, binding.value || 1000);
            }
        });
    }
});

// 过滤保留后两位小数
import { toMoney, mobileMin, checkMobile, dealInputVal } from './utils/index.js';
Vue.filter('filterCount', function(value) {
    return toMoney(value);
});
Vue.prototype.$mobileMin = mobileMin;
Vue.prototype.$checkMobile = checkMobile;
Vue.prototype.$dealInputVal = dealInputVal;

// 移动端适配
import 'amfe-flexible';
import 'babel-polyfill';// 支持es6
import 'lib-flexible';
import 'regenerator-runtime/runtime';

// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
// import Quill from 'quill';
Vue.use(VueQuillEditor);

// 预览图片
import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';
Vue.use(Viewer);
// Vue.use(Viewer, {
//     defaultOptions: {
//         movable: true,
//         zIndex: 9999
//     }
// });
Viewer.setDefaults({
    Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
});


import GeminiScrollbar from 'vue-gemini-scrollbar';
Vue.use(GeminiScrollbar);

// echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

/* UI库*/
import './plugins/element.js';
import './plugins/vant.js';
import 'element-ui/lib/theme-chalk/index.css';

/* 基础css*/
import './assets/less/base.less';

// 解决移动端点击延迟300ms
import FastClick from 'fastclick';
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
// 如果点击事件不需要立即响应 加class needsclick
// <a class="needsclick">Ignored by FastClick</a>

Vue.directive('focus', {
    inserted(el){
        el.focus();
    }
});

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    // console.log(333, to);
    if(to.meta.title) {
        document.title = to.meta.title;
    }
    // document.title = to.meta.title || "师徒制"; // 在路由里面写入的meta里面的title字段
    next();
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
