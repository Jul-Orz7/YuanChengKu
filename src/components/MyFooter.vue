<template>
    <div >
        <router-view />
            <van-tabbar route class="footerBg">
            <van-tabbar-item replace to="/home/private" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/other" icon="search">其他商品</van-tabbar-item>
            <van-tabbar-item replace to="/center" icon="setting-o">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
        name:'MyFooter',
        data() {
    return {
        active: 0,
    };
    },
}
</script>

<style  scoped>
.footerBg{
	border-top: 1px solid rgb(209, 204, 204);
}
</style>
