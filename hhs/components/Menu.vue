<template>
	<el-container class="home-container">
		<!-- 页面主体 -->
		<el-container>
			<!-- 侧边栏 -->
			<el-aside :width="'300px'">
				<div class="logo w-3/4 !mt-20" >
					<img src="../assets/img/logo.png" alt="">
				</div>
				<!-- 侧边栏菜单区域 -->
				<el-menu background-color="#498390" text-color="#fff" active-text-color="#409eff" :unique-opened="true"
					:collapse="isCollapse" :collapse-transition="false" :default-active="activePath" :router="true">
					<!-- 一级菜单 -->
					<el-menu-item index="/index">
						<span class="text-2xl font-bold" slot="title">Home</span>
					</el-menu-item>
					<el-menu-item index="/home" >
						<span class="text-2xl font-bold"  slot="title">Recipe</span>
					</el-menu-item>
					<el-menu-item index="/turntable">
						<span class="text-2xl font-bold"  slot="title">Turntable</span>
					</el-menu-item>
					<el-submenu index="1">
						<template slot="title">
							<span class="text-2xl font-bold" >Records</span>
						</template>
						<el-menu-item-group>
							<el-menu-item class="text-2xl font-bold"  index="/calories">Food Calories</el-menu-item>
							<el-menu-item class="text-2xl font-bold" index="/myrecords">My Records</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-menu-item index="/ledger">
						<span class="text-2xl font-bold" slot="title">Make my ledger</span>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<!-- 右侧内容主体 -->
			<el-main>
				<!-- 路由占位符 -->
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
export default {
	data() {
		return {
			// 左侧菜单数据
			menulist: [
				{
					"authName": 'Home',
					"path": 'home',
					id: 1
				},
				{
					"authName": 'Recipe',
					"path": 'home',
					id: 2
				},
				{
					"authName": 'Turntable',
					"path": 'turntable',
					id: 3
				},
				{
					"authName": 'Records',
					"path": 'null',
					id: 4,
					"children": [
						{
							"id": 401,
							"authName": "Food Calories",
							"path": 'yhgl',
						},
						{
							"id": 402,
							"authName": "My Records",
							"path": 'myrecords',
						}
					]
				},
				{
					"authName": 'Make my ledger',
					"path": 'yhgl',
					id: 5
				},
			],
			// 是否折叠
			isCollapse: false,
			// 被激活的链接地址
			activePath: ''
		}
	},
	created() {
	},
	methods: {
	}
}
</script>

<style scoped lang="less">
.logo{
	margin: 0 auto;
}
.home-container {
	height: 100%;
}

.el-header {
	background-color: #373d41;
	display: flex;
	justify-content: space-between;
	padding-left: 0;
	align-items: center;
	color: #fff;
	font-size: 20px;

	>div {
		display: flex;
		align-items: center;

		span {
			margin-left: 15px;
		}
	}
}

.el-aside {
	background-color: #498390;

	.el-menu {
		border-right: solid 0px #e6e6e6;
	}
}

.el-main {
	background-color: #fff;
	padding: 0;
}

.iconfont {
	margin-right: 10px;
}

.toggle-button {
	background-color: #4a5064;
	line-height: 24px;
	text-align: center;
	color: #fff;
	font-size: 10px;
	letter-spacing: 0.5em;
	cursor: pointer;
}
</style>
