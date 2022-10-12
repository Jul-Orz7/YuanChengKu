//引入Vue
import Vue from "vue"
//引入App
import App from "./App.vue"
import plugins from "./plugins"

//关闭Vue的生产提示
Vue.config.productionTip = false

//使用plugins插件
Vue.use(plugins)
//创建Vue
new Vue({
    el:'#app',
    render: h => h(App)
})