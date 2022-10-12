<template>
	<div>
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
	
			
	


		<!-- 套餐结束 -->
		
				<div class="card">
				<h6 class="card-title text-danger">* 注:第一份6元,第二份起每份36元</h6>
		<div class="card-text">私餐数量:0</div>
			<div class="sj-item1">
				<button >下单</button>
			</div>
			</div>
		</div>
	</template>
	<script>
	export default {
		// name:'Private',
		data() {
			return {
				value: ''
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
	.card {
		text-align: center;
		width:94%;
		height: 100px;
		background-color: #eee;
		padding: 2px;
		margin: 0 auto;
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