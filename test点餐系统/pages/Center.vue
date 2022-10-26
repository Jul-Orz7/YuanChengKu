<template>
	<div>
	<h4 class="text-center">个人中心</h4>
	<div >
        <div class="">
            <img src="https://img01.yzcdn.cn/vant/sand.jpg" height="150px" width="100%">
        </div>
		<!-- 个人中心功能 -->
        <div class="muen">
            <div class="ys">
                <i class="van-icon van-icon-pending-payment"></i>
				<div class="ys2">
                    <router-link to="/myWallet"><span>我的钱包</span></router-link>
                </div> 
			</div>
                

            <div class="ys">
                <i class="van-icon van-icon-records"></i>
                <div class="ys2">
				<router-link to="/today"><span>今日订单</span></router-link>
                </div>    
			</div>

            <div class="ys">
                <i class="van-icon van-icon-tosend"></i>
                <div class="ys2">  
				<router-link to="/history"> <span>历史记录</span></router-link>
                </div> 
			</div>

            <div class="ys">
                <i class="van-icon van-icon-logistics"></i>
                <div class="ys2">  
				<router-link to="/MYQRcode"><span>我的二维码</span></router-link>
                </div>  
			</div>
		</div>
        <!-- 扩展框开始 -->
        <div class="ys3">
        <!-- <div class="user-group van-cell-group van-hairline--top-bottom"></div> -->
            <div role="button" tabindex="0" class="van-cell van-cell--clickable">
            <div class="van-cell__title"><span>我的申诉</span></div>
                <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
            </div><br/>

            <div role="button" tabindex="0" class="van-cell van-cell--clickable">
                <div class="van-cell__title"><span>历史反馈</span></div>
                <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
            </div><br/>
            <div role="button" tabindex="0" class="van-cell van-cell--clickable">
                <div class="van-cell__title"><span>意见反馈</span></div>
                    <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
            </div>
        </div>
        <!-- 扩展框结束 -->
        
    </div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Center',
        data() {
            return {
                value: 1,
                    };
                    
                },
	}
</script>

<style scoped>
.ys{
    text-align: center;
    width: 100%;
	/* border:1px solid rgb(161, 231, 184); */
    
}
.ys i{
    font-size: 20px;
    font-weight: bold;
}
.ys2{
    text-align: center;
}
.ys3{
    padding: 2%;
    
	/* border-bottom: 2px solid #DCDCDC; */

}
	span{
	font-size: 13pt;
}
.muen{
    display: flex;
    padding: 2%;
    margin: 40px 0px;
    width: 100%;
}

</style>