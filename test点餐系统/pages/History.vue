<template>
	<div>
        <van-nav-bar
            title="历史记录"
            left-text="个人中心"
            left-arrow
            @click-left="onClickLeft"
        />

	<div class="container">
		<ul class="yang">
			<li>订单编号:5467890456789</li>
			<li>订单详情：套餐二</li>
			<li>数量:1</li>
			<li>总金额:90元</li>
		</ul>	

		<ul class="yang">
			<li>订单编号:5467890456789</li>
			<li>订单详情：套餐二</li>
			<li>数量:1</li>
			<li>总金额:90元</li>
		</ul>	
		<ul class="yang">
			<li>订单编号:5467890456789</li>
			<li>订单详情：套餐二</li>
			<li>数量:1</li>
			<li>总金额:90元</li>
		</ul>	

		

		</div>

	</div>
</template>

<script>
export default {
    name:'history',
	methods: {
        onClickLeft() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.container{
		padding: 2%;
		
		
}
	.yang{
		width: 100%;
		font-size: 14px;
		background-color: rgb(186, 189, 192);
	}
	ul li  {
        list-style-type: none;
		margin: 11px 5pt 11px 5pt;
		
	
    }
	
</style>