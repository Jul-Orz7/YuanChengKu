<template>
    <!-- 组件的结构 -->
    <div>
		<h2>旅行者：{{name}}</h2>	
		<h2>测试：{{address}}</h2>	
		<button @click='showName'>单击</button>
	</div>
</template>

<script>
//组件交互相关的代码(数据，方法等等)
    export default {
        name:'School',
        data(){
		return{
			name:'空',
			address:'提瓦特'
			} 
            },
	methods: {
		showName(){
		alert(this.schoolName)
			}
		},
	}
    // export default school//默认暴露，
</script>

<style>
    /*组件样式*/
    
</style>