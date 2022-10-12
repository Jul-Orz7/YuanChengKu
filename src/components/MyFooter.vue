<template>
    <div>
        <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="green">
            <van-tabbar-item icon="home-o">
                <router-link to='/home'> <span>首页</span></router-link>
            </van-tabbar-item>
            <van-tabbar-item icon="search">
                <router-link to="/other"><span>其他商品</span></router-link>
            </van-tabbar-item>
            <van-tabbar-item icon="setting-o">
                <router-link to='/center'><span>个人中心</span></router-link>
            </van-tabbar-item>
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


</style>
