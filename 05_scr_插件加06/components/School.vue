<template>
    <!-- 组件的结构 -->
    <div>
		<h2 @click="showName">{{schoolName}}中学</h2>	
		<h2>地址：{{address | mySlice}}</h2>
		<button @click="test">单击我测试</button>
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
		test(){
			this.hello()
		}
	}
} 
</script>
