<template>
	<div >
		<h4 class="text-center">首页</h4>
		<!-- 菜单开始 -->
		<div class="menu">
			<ul class="nav nav-tabs ">
				<li>
					<router-link  active-class="active" to="/home/Private"><span>私餐</span></router-link>
				</li>
				<li>
					<router-link  active-class="active" to="/home/Public"><span>公餐</span></router-link>
				</li>
				
			</ul>
			
		</div>
			<router-view></router-view>

		<!-- 菜单结束-->
		</div>
		
</template>

<script>
	export default {
		name:'Home',
	}
</script>
<style scoped>
h4{
    padding: 1%;
}
	.menu {
		margin-left:1%;
		height: 50px;
		width: 100%;
		background-color:rgb(237, 245, 239);
		border-bottom: 1px solid #DCDCDC;
		display: flex;
		justify-content:center;
	
	}
	span{
	font-size: 11pt;
	}
	a {
	color: rgb(14, 1, 7);
		}
</style>