//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

//引入vant
import	Vant from 'vant'
import 'vant/lib/index.css';

//引入axios
import axios from 'axios'
Vue.prototype.$axios = axios


Vue.use(Vant);


//关闭Vue的生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	router:router
})

