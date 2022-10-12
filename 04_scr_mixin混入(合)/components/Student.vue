<template>
    <!-- 组件的结构 -->
    <div class="demo ">
		<h2 @click="showName">名称：{{name}}</h2>	
		<h2>性别：{{sex}}</h2>
	</div>
</template>

<script>
    export default {
        name:'Student',
        data(){
			return{
				name:'野比大雄',
				sex:'男',
			}	
    },
	methods:{
		showName(){
			alert(this.name)
		}
	}
} 

</script>

<style>
/*组件样式*/
.demo{
	height:100%;
	/* background-color: rgb(11, 102, 238); */
	background-image: linear-gradient(#e66465, #9198e5);
	
}

</style>