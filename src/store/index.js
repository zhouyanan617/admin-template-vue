import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

// directory: 说明需要检索的目录
// useSubdirectories: 是否检索子目录
// regExp: 匹配文件的正则表达式
const files = require.context('./modules', false, /\.js$/);
const modules = {};
files.keys().forEach(key => {
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

const plugins = process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : [];

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules,
    plugins,
});
