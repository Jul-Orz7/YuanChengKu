<template>
	<div>
        <van-nav-bar
            title="今日订单"
            left-text="个人中心"
            left-arrow
            @click-left="onClickLeft"
        />

		<!-- 套餐开始 -->
		<div class="container">
			<div class="sj-item">
					<div class="sj-top">
						<img src="https://img01.yzcdn.cn/vant/leaf.jpg" alt="" style="height: 80px; width: 80px;"/>
						<div class="sj-item1">
							<p>套餐二</p>
							<h6 class="text-muted">专业版</h6>
							<p class="text-danger">￥8980</p>
						</div>
							<div class="jia"><van-stepper v-model="value" /></div>
					</div>
					
			</div>
		</div>

		<div class="container">
			<div class="sj-item">
					<div class="sj-top">
						<img src="https://img01.yzcdn.cn/vant/leaf.jpg" alt="" style="height: 80px; width: 80px;"/>
						<div class="sj-item1">
							<p>套餐二</p>
							<h6 class="text-muted">专业版</h6>
							<p class="text-danger">￥8980</p>
						</div>
							<div class="jia"><van-stepper v-model="value" /></div>
					</div>
					
			</div>
		</div>
		<div class="container">
			<div class="sj-item">
					<div class="sj-top">
						<img src="https://img01.yzcdn.cn/vant/leaf.jpg" alt="" style="height: 80px; width: 80px;"/>
						<div class="sj-item1">
							<p>套餐二</p>
							<h6 class="text-muted">专业版</h6>
							<p class="text-danger">￥8980</p>
						</div>
							<div class="jia"><van-stepper v-model="value" /></div>
					</div>
					
			</div>
		</div>

		<div class="container">
			<div class="sj-item">
					<div class="sj-top">
						<img src="https://img01.yzcdn.cn/vant/leaf.jpg" alt="" style="height: 80px; width: 80px;"/>
						<div class="sj-item1">
							<p>套餐二</p>
							<h6 class="text-muted">专业版</h6>
							<p class="text-danger">￥8980</p>
						</div>
							<div class="jia"><van-stepper v-model="value" /></div>
					</div>
					
			</div>
		</div>
	<!-- 套餐结束 -->
</div>
		
</template>

<script>
	export default {
		name:'Today',
        methods: {
        onClickLeft() {
            this.$router.go(-1);
        }
    }
	}
</script>
<style scoped>
	.container{
		padding: 3%;
	}
	.sj-top{
		position:relative;
		display: flex;
		width: 100%;
		height: 80px;
		background-color: aliceblue
	}
	.sj-item1{
		padding: 1%;
	}
	.jia{
		
		/*float:right */
		position:absolute;
		width:95%;
		transform: translate(0%,100%);
		text-align:right;
		
	}
</style>