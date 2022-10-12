//引入Vue
import Vue from "vue"
//引入App
import App from "./App.vue"
//引入Vuex
import Vuex from 'vuex'


//关闭Vue的生产提示
Vue.config.productionTip = false

//使用插件
Vue.use(Vuex)

//创建Vue
new Vue({
    el:'#app',
    render: h => h(App),
    store:'hello',
    beforeCreate(){
        Vue.prototype.$bus = this
    },
})

