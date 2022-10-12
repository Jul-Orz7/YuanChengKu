<template>
    <div>
        <van-nav-bar
            title="我的钱包"
            left-text="个人中心"
            left-arrow
            @click-left="onClickLeft"
        />
            
        <img src="https://img01.yzcdn.cn/vant/leaf.jpg" width="80%" height="360px">
    </div>
</template>
<script>
export default {
    name:'MyWallet',
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