<template>

	<div class=" col-xs-12">
		<van-nav-bar
            title="订餐系统"
            left-arrow
            @click-left="onClickLeft"
        />
	</div>
</template>

<script>
	export default {
		name:'Banner',
		methods: {
        onClickLeft() {
            this.$router.go(-1);
        }
    }
	}
</script>
<style scoped>
	div{
		background-color:rgb(247, 244, 241);
		}
		
</style>