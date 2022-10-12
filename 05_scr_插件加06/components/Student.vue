<template>
    <!-- 组件的结构 -->
    <div>
		<h2>名称：{{name}}</h2>	
		<h2>性别：{{sex}}</h2>
		<h2>年龄：{{age}}</h2>
		<input type="text" v-fbind:value='name'>

	</div>
</template>

<script>
    export default {
        name:'Student',
        data(){
			return{
				name:'野比大雄',
				sex:'男',
				age:18
			} 
    },
} 

</script>

