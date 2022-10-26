<template>
  <div>
    <div class="row">
      <!-- 使用顶部组件 -->
      <Banner/>
    </div>
			<!-- 指定组件的呈现位置 -->
      <div>
      <router-view></router-view>
      </div>
      <!-- 使用底部组件 -->
      <MyFooter/>
    </div>
</template>

<script>
	import Banner from './components/Banner'
  import MyFooter from './components/MyFooter'
	export default {
		name:'App',
		components:{Banner,MyFooter},
    data() {
      return {
        active: 0
      }
    },
  methods:{
    switchTo(path){
      this.$router.replace(path)
    }
  }
  
	}
</script>
<style>
    a {
	color: rgb(14, 1, 7);
		}
</style>
