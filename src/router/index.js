// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import Home from '../pages/Home'
import Other from '../pages/Other'
import Center from '../pages/Center'
import Public from '../pages/Public'
import Private from '../pages/Private'
import History from '../pages/History'
import MYQRcode from '../pages/MYQRcode'
import Today from '../pages/Today'
import MyWallet from '../pages/MyWallet'




//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/center',
			component:Center,
		},
		
		{
			path:'/history',
			component:History,
		},
		{
			path:'/MYQRcode',
			component:MYQRcode,
		},
		{
			path:'/today',
			component:Today,
		},
		{
			path:'/other',
			component:Other
		},
		{
			path:'/myWallet',
			component:MyWallet,
		},
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'/home/private',
					component:Private,
				},
				{
					path:'/home/public',
					component:Public,
				}
			]
		}
	]
})
