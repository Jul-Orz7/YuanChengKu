<template>
    <div>
        <!--  -->
        <van-nav-bar
            title="我的钱包"
            left-text="个人中心"
            left-arrow
            @click-left="onClickLeft"
        /> 
        <div class="flex1 flex column">
        <div style="height:16vh " class="heng">
            <!-- 展示 -->
                <div class="flex2">
                    <van-icon name="certificate" />
                    <div class="zhiTi">收付款</div>
                </div>
                <div class="flex2">
                    <van-icon name="paid" />
                    <div class="zhiTi">钱包</div>
                </div>
        </div>

        <!--  -->
        <div style="height:16vh" class="mgt8">
            <div class="hueise">金融管理</div>
            <div>
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
        </div>
        </div>

        <!--  -->
        <div style="height:16vh" class="mgt8">
            <div class="hueise">金融管理</div>
            <div>
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
        </div>
        </div>

        <!--  -->
        <div style="height:16vh" class="mgt8">
            <div class="hueise">金融管理</div>
            <div>
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
            </div>
        </div>
        </div>
        </div>
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
*{
    margin: 0;
    /* border: 1px solid black; */
}
.zhiTi{
	font-size: 10pt;
    
}
.hueise{
    font-size: 10px;
    color: rgba(153, 160, 157, 0.76);
}
.heng{
    display: flex;
    flex-direction:row;
    margin:2% 1% 4% 1%;
    background-color:rgba(72, 184, 50, 0.952);
    border-radius: 8px;
    text-align: center;

}
.flex{
    display: flex;
    background-color: rgb(208, 202, 202);
    
}
.flex1{
    flex: 1;
    height: 100vh;
    padding: 2%;
}
.flex2{
    /* display: flex; */
    margin: 10px;
    font-size: 27pt;
    background-color:rgba(72, 184, 50, 0);
    color: aliceblue;
    width: 50%;
    flex-direction: column;

}
.column{
        flex-direction: column;
        }
.mgt8{
        padding: 3%;
        margin-bottom: 4%;
        background-color:white;
        border-radius: 8px;
}
.ys{
    text-align: center;
    width: 98%;
	/* border:1px solid rgb(161, 231, 184); */
    
}
.ys i{
    font-size: 22px;
}
.ys2{
    text-align: center;
}
.ys3{
    margin: 3% 0 0 0;
}
	span{
	font-size: 10pt;
}
.muen{
    display: flex;
    padding: 1%;
    margin: 3% 0 3% 1%;
    width: 98%;
    border-radius: 10px;
}
</style>