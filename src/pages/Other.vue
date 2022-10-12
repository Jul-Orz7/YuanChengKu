<template>
	<div>
	<h4 class="text-center">其他商品</h4>
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
		
	<!-- 套餐结束 -->
	<div class="a" >
		<button>下单</button>
	</div>
</div>
		
</template>

<script>
	export default {
		name:'Other',
	}
</script>
<style scoped>
	.container{
		padding: 3%;
	}
	.a{
		text-align: center;
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
	.card {
		text-align: center;
		width:100%;
		height: 100px;
		background-color: #eee;
		padding: 2px;
	}
	button{ 
		color: white;
		background-color: #4CAF50;
		padding: 3px 60px;
		font-size: 8pt;
		border: none;
		border-radius: 2px;

	}
	.jia{
		
		/*float:right */
		position:absolute;
		width:95%;
		transform: translate(0%,100%);
		text-align:right;
		
	}
</style>