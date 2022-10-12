<template>
    <!-- 组件的结构 -->
    <div>
		<h2 @click="showName">{{schoolName}}中学</h2>	
		<h2>地址：{{address}}</h2>
	</div>
</template>

<script>
    export default {
        name:'School',
        data(){
			return{
				schoolName:'xxx',
				address:'萨达十大吉安市',
			} 
    },
	methods:{
		showName(){
		alert (this.schoolName)
		}
	}
	
} 
</script>

<style>
/*组件样式*/
</style>