import Vue from 'vue'; //凡是没有带./或者../都是逐级查找node_modules目录
//引入主体vue
import App from './app.vue';


new Vue({
    el: '#app',
    render: c => c(App),
});
