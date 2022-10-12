<template>
<div>
    <h1>{{msg}}</h1>
    <hr/>
    <Student name ="咸鱼" sex="男" :age="20"/>

</div>
</template>

<script>
//引入School组件

import Student from './components/Student'

export default {
    name:'App',
    data(){
        return{
            msg:'欢迎学习Vue!',
        }
    },   
    components:{Student}, 
}
</script>
