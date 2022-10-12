/* 
  该文件是整个项目的入口
*/
//引入Vue
import Vue from 'vue'
//引入App组件，是所有组件的父组件
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false


/* 
  关于不同版本的Vue：

  1.vue.js与vue.runtime.xxx.js的区别：
    (1)Vue.js是完整版的Vue. 包含:核心功能+模板解析器
    (2)vue.runtime.xxx.js是运动版的vue，只包含：技术核心：没有解析模板

  2.因为Vue.runtime.xxx.js没有模板解析器，所有不能使用template配置项，需要使用
    render函数接收到的createElement函数去指定具体内容
    
*/

//创建vue实例对象 ---vm
new Vue({
  el:'#app',
  //下面这一行代码 将App组件放入容器中
  render: h => h(App),
})
