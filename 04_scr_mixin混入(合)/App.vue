<template>
<div>
    <h1>{{msg}}</h1>
    <hr/>
    <School/>
    <hr/>
    <Student/>

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
