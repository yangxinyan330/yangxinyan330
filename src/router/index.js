import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/index.vue'),
        meta: { title: 'index' },
    },
    {
        path: '/AAA',
        name: 'AAA',
        component: () => import('../views/AAA.vue'),
        meta: { title: '所有' },
    },
    {
        path: '/monitor',
        name: 'monitor',
        component: () => import('../views/monitor.vue'),
        meta: { title: '监控' },
    },
    {
        path: '/echart',
        name: 'echart',
        component: () => import('../views/echart.vue'),
        meta: { title: 'echart' },
    },
    {
        path: '/checkMore',
        name: 'checkMore',
        component: () => import('../views/checkMore.vue'),
        meta: { title: '查看更多' },
    },
    {
        path: '/tree',
        name: 'tree',
        component: () => import('../views/tree.vue'),
        meta: { title: 'tree树' },
    },
    {
        path: '/form',
        name: 'form',
        component: () => import('../views/form.vue'),
        meta: { title: 'form表单' },
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: () => import('../views/confirm.vue'),
        meta: { title: 'confirm弹窗' },
    },
    {
        path: '/newMethods',
        name: 'newMethods',
        component: () => import('../views/newMethods.vue'),
        meta: { title: '写法不同', keepAlive: true },
    },
    {
        path: '/quill',
        name: 'quill',
        component: () => import('../views/quill.vue'),
        meta: { title: 'quill富文本' },
    },
    {
        path: '/nineGe',
        name: 'nineGe',
        component: () => import('../views/nineGe.vue'),
        meta: { title: '九宫格' },
    },
    {
        path: '/dateTime',
        name: 'dateTime',
        component: () => import('../views/dateTime.vue'),
        meta: { title: 'dateTime' },
    },
    {
        path: '/loading',
        name: 'loading',
        component: () => import('../views/loading.vue'),
        meta: { title: 'loading下拉加载' },
    },
    {
        path: '/previewFile',
        name: 'previewFile',
        component: () => import('../views/previewFile.vue'),
        meta: { title: 'previewFile预览及下载文件' },
    },
    {
        path: '/uploadImg',
        name: 'uploadImg',
        component: () => import('../views/uploadImg.vue'),
        meta: { title: '上传图片' },
    },
    {
        path: '/input',
        name: 'input',
        component: () => import('../views/input.vue'),
        meta: { title: 'input正则' },
    },
    {
        path: '/addLess',
        name: 'addLess',
        component: () => import('../views/addLess.vue'),
        meta: { title: 'addLess' },
    },
    {
        path: '/attrs2',
        name: 'attrs2',
        component: () => import('../views/attrs2/top.vue'),
        meta: { title: 'attrs2' },
    },
    {
        path: '/attrsTest',
        name: 'attrsTest',
        component: () => import('../views/attrsTest/top.vue'),
        meta: { title: 'attrsTest' },
    },
    {
        path: '/reduce',
        name: 'reduce',
        component: () => import('../views/reduce.vue'),
        meta: { title: 'reduce' },
    },
    {
        path: '/set',
        name: 'set',
        component: () => import('../views/set.vue'),
        meta: { title: 'set' },
    },
    {
        path: '/MMM',
        name: 'MMM',
        component: () => import('../views/MMM.vue'),
        meta: { title: 'MMM' },
    },
    {
        path: '/table',
        name: 'table',
        component: () => import('../views/table.vue'),
        meta: { title: 'table' },
    },
    {
        path: '/numbers',
        name: 'numbers',
        component: () => import('../views/numbers.vue'),
        meta: { title: '数字处理' },
    },
    {
        path: '/checkboxRadio',
        name: 'checkboxRadio',
        component: () => import('../views/checkboxRadio.vue'),
        meta: { title: '复选和单选' },
    },
    {
        path: '/tooltip',
        name: 'tooltip',
        component: () => import('../views/tooltip.vue'),
        meta: { title: '气泡弹窗' },
    },
    {
        path: '/popover',
        name: 'popover',
        component: () => import('../views/popover.vue'),
        meta: { title: '气泡弹窗2' },
    },
    {
        path: '/promise',
        name: 'promise',
        component: () => import('../views/promise.vue'),
        meta: { title: 'promise' },
    },
    {
        path: '/debounce',
        name: 'debounce',
        component: () => import('../views/debounce.vue'),
        meta: { title: '节流和防抖' },
    },
    {
        path: '/vuex',
        name: 'vuex',
        component: () => import('../views/vuex.vue'),
        meta: { title: 'vuex' },
    },
];

const router = new VueRouter({
    // mode: 'history',
    routes,
});

export default router;

// 解决点击同一导航不报错
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error);
};
