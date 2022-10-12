export default {
    install(Vue){
        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        //定义全局指令
        Vue.directive('fbind',{
            //指令与元素成功绑定时（一上来）
            bind(element,binding){
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element){
                element.focus()
            },
            //指定所在的模块被重新解析时
            update(element,binding){
                element.value = binding.value
            }
        })

        //定义混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200
                }
            }
        })

        //给vue原型上面添加一个方法（vm和vc就都可以使用）
        Vue.prototype.hello = ()=>{alert('旅行者')}
    }
}