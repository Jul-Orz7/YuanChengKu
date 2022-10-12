<template>
    <!-- 组件的结构 -->
    <div class="demo ">
		<h1>{{msg}}</h1>
		<h2>名称：{{name}}</h2>	
		<h2>性别：{{sex}}</h2>
		<h2 >年龄：{{myAge+1}}</h2>	
		<button @click="updateAge">修改年龄</button>
	</div>
</template>

<script>
    export default {
        name:'Student',
        data(){
		return{
			msg:'哔哩哔哩',
			myAge:this.age
			// name:'咸鱼',
			// sex:'男',
			// age:20,
		} 
    },
	methods:{
		updateAge(){
			this.myAge++
		}
	},
	props:['name','sex','age'] //简单声明接收
	//接收的同时对数据类型限制
	/* props:{
		name:String,
		age:Number,
		sex:String
	}
 */

//接收的时候对类型限制+默认值的指定+必要性的限制
/* 	props:{
		name:{
			type:String,//name 的类型是字符串
			required:true//名字是必要的
		},
		age:{
			type:Number,
			default:0,//默认值
		},
		sex:{
			type:String,
			required:true
		}
	}*/
} 

</script>

<style>
/*组件样式*/
.demo{
	height: 200px;
	/* background-color: rgb(11, 102, 238); */
	background-image: linear-gradient(#e66465, #9198e5);
	
}

</style>