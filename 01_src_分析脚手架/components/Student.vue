<template>
    <!-- 组件的结构 -->
    <div class="demo ">
		<h2>名称：{{name}}</h2>	
		<h2 >年龄：{{age}}</h2>	
		<button @click='studentName'>单击</button>
	</div>
</template>

<script>
//组件交互相关的代码(数据，方法等等)
    export default {
        name:'Student',
        data(){
		return{
			name:'咸鱼',
			age:20
		} 
    },
	methods: {
		studentName(){
			alert(this.name)
			}
		},
	}
    // export default school//默认暴露，
</script>

<style scoped>
    /*组件样式*/

.demo{
	height: 200px;
	/* background-color: rgb(11, 102, 238); */
	background-image: linear-gradient(#e66465, #9198e5);
	
}
</style>