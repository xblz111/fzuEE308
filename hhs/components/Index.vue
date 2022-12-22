<template>
	<div class="box">
		<!-- 左边图片 -->
		<div class="left">
			<!-- <img width="100%" height="100%" src="../assets/img/logo-left.png" alt=""> -->
		</div>
		<div class="right">
			<div class="right-top flex justify-center items-center">
				<div class=" w-xl  h-60  ">
					<img width="100%" height="100%" src="../assets/img/logo.png" alt="">
				</div>
			</div>
			<div class="right-bottom flex justify-around items-center">
				<div @click="go('home')" class=" cursor-pointer rounded-lg w-3/12 h-40 text-center content-center leading-40  ">Recipe</div>
				<div @click="go('turntable')" class=" cursor-pointer rounded-lg w-3/12 h-40 text-center content-center leading-40 ">Truntable</div>
				<div @click="go('myrecords')" class=" cursor-pointer rounded-lg w-3/12 h-40 text-center content-center leading-40 ">Records</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods: {
		go(path){
			this.$router.push('/'+path)
		}
	}
}
</script>

<style lang="less" scoped>
.box {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	overflow: hidden;
}

.left {
	width: 30%;
	height: 100%;
	background: url('../assets/img/logo-left.png') no-repeat;
	background-size: 100%100%;
}
.right{
	width: 70%;
	height: 100%;
}
.right-top{
	width: 100%;
	height: 70%;
	background-color: #498390;
}
.right-bottom{
	width: 100%;
	height: 30%;
}
.right-bottom div:nth-child(1){
	background: url('../assets/img/sp/a1.png') no-repeat;
	background-size: 100%100%;
	font-size: 26px;
	font-weight: bold;
	color: #fff;
}
.right-bottom div:nth-child(2){
	background: url('../assets/img/sp/a1.png') no-repeat;
	background-size: 100%100%;
	font-size: 26px;
	font-weight: bold;
	color: #fff;
}
.right-bottom div:nth-child(3){
	background: url('../assets/img/sp/a1.png') no-repeat;
	background-size: 100%100%;
	font-size: 26px;
	font-weight: bold;
	color: #fff;
}
</style>
