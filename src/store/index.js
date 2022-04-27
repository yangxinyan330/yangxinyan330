import Vue from 'vue';
import Vuex from 'vuex';
// 固化数据
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

import a from './mudules/a.js';
import b from './mudules/b.js';

const plugins = [
    createPersistedState({
        storage: window.sessionStorage,
    }),
];

export default new Vuex.Store({
    namespaced: true, // 解决不同模块命名冲突
    plugins,
    modules: {
        a,
        b,
    },
});
