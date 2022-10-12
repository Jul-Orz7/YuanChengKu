<template>
<div>
    <h1>{{msg}}</h1>
    <hr/>
    <School class="demo"/>
    <hr/>
    <Student class="demo"/>

</div>
</template>

<script>
//引入School组件

import Student from './components/Student'
import School from'./components/School'


export default {
    name:'App',
    data(){
        return{
            msg:'欢迎学习Vue!',
        }
    },   
    components:{Student,School}, 

}
</script>
<style>
/*组件样式*/
.demo{
	/* height:100%; */
    height: 150px;
	/* background-color: rgb(11, 102, 238); */
	background-image: linear-gradient(#e66465, #9198e5);
	
}

</style>