import Vue from 'vue'
import VueRouter from 'vue-router'//引用路由

//引入组件
import Index from '../components/Index.vue'
import Menu from '../components/Menu.vue'
import Home from '../components/Home.vue'
import Turntable from '../components/Turntable.vue'
import MyRecords from '../components/MyRecords.vue'
import Ledger from '../components/Ledger.vue'
import Calories from '../components/Calories.vue'

Vue.use(VueRouter)//vue挂载路由


const router =  new VueRouter({
  routes:[
		{
			path:'/',
			redirect:'/Index'//默认的首页地址
		},
		{
			path:'/index',
			component:Index
		},
		{
			path:'/menu',//菜单
			component:Menu,
			redirect:'/index',
			children:[//菜单各页面的路由
				{
					path:'/home',//路由路径
					component:Home//组件
				},
				{
					path:'/turntable',
					component:Turntable
				},
				{
					path:'/myrecords',
					component:MyRecords
				},
				{
					path:'/ledger',
					component:Ledger
				},
				{
					path:'/calories',
					component:Calories
				},
			]
		}
	]
})

export default router

