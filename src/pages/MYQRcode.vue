<template>
    <div>
        <van-nav-bar
            title="我的二维码"
            left-text="个人中心"
            left-arrow
            @click-left="onClickLeft"
        />
            
        <img src="https://img01.yzcdn.cn/vant/tree.jpg" width="80%" height="360px">
    </div>
</template>
<script>
export default {
    name:'MyQRcode',
        methods: {
        onClickLeft() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
ul{
    display: flex;
}
img{
    padding: 10%;
}
</style>