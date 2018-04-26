let config = {
    host: 'http://192.168.0.1:8899'
}
export default {
    install: function(Vue) {
        Vue.prototype.$myConfig = config;
    }
}
