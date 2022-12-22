<template>
	<div>
		<div class="h-28 bg-light-50 flex justify-end items-center mr-5">
			<div class="flex justify-center items-center">
				<input class="searchInput  text-xl" placeholder="search">
				<button class="bg-primary text-light-50 rounded py-2 px-3 ml-5">CLICK</button>
			</div>
		</div>
		<div class="h-12  flex justify-around items-center text-2xl text-warm-gray-700">
			<div class="w-1/3 h-12 leading-12 rounded-sm cursor-pointer text-center bgleft" :class="{ 'active': activeIndex == 0 }" @click="tab(0)">BREAKFAST</div>
			<div class="w-1/3 h-12 leading-12 rounded-sm cursor-pointer text-center bgcenter" :class="{ 'active': activeIndex == 1 }" @click="tab(1)">LUNCH</div>
			<div class="w-1/3 h-12 leading-12 rounded-sm cursor-pointer text-center bgright" :class="{ 'active': activeIndex == 2 }" @click="tab(2)">DINNER</div>
		</div>

		<div class="relative min-h-850px" :class="{ 'bgleft': activeIndex == 0,'bgcenter':activeIndex == 1,'bgright':activeIndex ==2 }">
			<div>
				<div class="flex justify-evenly items-center  flex-wrap p-20">
					<div class="w-3/12 flex justify-center items-center column mt-20" v-for="(item,index) in list">
						<img width="200px" :src="item.img" alt="" @click="clickImg(index,item.child)">
						<div class="mt-8 text-light-50 " :class="{'text-dark-900':activeIndex==2}">{{ item.name }}</div>
					</div>
				</div>
			</div>
		</div>

	</div>

</template>

<script>
export default {
	data() {
		return {
			show: true,
			activeIndex: 0,
			editlist: {},
			list: [
				{
					"img": require('../assets/img/sp/h1.png'),
					"name": "86Kcal/egg",
				},
				{
					"img": require('../assets/img/sp/h2.png'),
					"name": "325Kcal/corn"
				}, {
					"img": require('../assets/img/sp/h3.png'),
					"name": "114Kcal/steamed bread"
				},
				{
					"img": require('../assets/img/sp/h4.png'),
					"name": "88Kcal/cereal	"
				},
                {
					"img": require('../assets/img/sp/h5.png'),
					"name": "108Kcal/milk",
				},
                {
					"img": require('../assets/img/sp/h6.png'),
					"name": "144Kcal/yogurt",
				},
                {
					"img": require('../assets/img/sp/h7.png'),
					"name": "40Kcal/Soya-bean milk",
				},
                {
					"img": require('../assets/img/sp/h8.png'),
					"name": "74Kcal/white porridge",
				},
			],
			list1: [
			{
					"img": require('../assets/img/sp/h1.png'),
					"name": "86Kcal/egg",
				},
				{
					"img": require('../assets/img/sp/h2.png'),
					"name": "325Kcal/corn"
				}, {
					"img": require('../assets/img/sp/h3.png'),
					"name": "114Kcal/steamed bread"
				},
				{
					"img": require('../assets/img/sp/h4.png'),
					"name": "88Kcal/cereal	"
				},
                {
					"img": require('../assets/img/sp/h5.png'),
					"name": "108Kcal/milk",
				},
                {
					"img": require('../assets/img/sp/h6.png'),
					"name": "144Kcal/yogurt",
				},
                {
					"img": require('../assets/img/sp/h7.png'),
					"name": "40Kcal/Soya-bean milk",
				},
                {
					"img": require('../assets/img/sp/h8.png'),
					"name": "74Kcal/white porridge",
				},
			],
			list2: [
			{
					"img": require('../assets/img/sp/i1.png'),
					"name": "145Kcal/rice",
				},
				{
					"img": require('../assets/img/sp/i2.png'),
					"name": "325Kcal/corn"
				}, {
					"img": require('../assets/img/sp/i3.png'),
					"name": "385Kcal/noodles"
				},
				{
					"img": require('../assets/img/sp/i4.png'),
					"name": "438Kcal/hamburg"
				},
                {
					"img": require('../assets/img/sp/i5.png'),
					"name": "116Kcal/beef",
				},
                {
					"img": require('../assets/img/sp/i6.png'),
					"name": "104Kcal/basa fish",
				},
                {
					"img": require('../assets/img/sp/i7.png'),
					"name": "98Kcal/basal shrimps",
				},
                {
					"img": require('../assets/img/sp/i8.png'),
					"name": "187Kcal/chicken leg",
				},
			],
			list3: [
			{
					"img": require('../assets/img/sp/j1.png'),
					"name": "74Kcal/white porridge",
				},
				{
					"img": require('../assets/img/sp/j2.png'),
					"name": "117Kcal/sweet potato"
				}, {
					"img": require('../assets/img/sp/j3.png'),
					"name": "373Kcal/lotus root starch"
				},
				{
					"img": require('../assets/img/sp/j4.png'),
					"name": "198Kcal/wonton"
				},
                {
					"img": require('../assets/img/sp/j5.png'),
					"name": "16Kcal/lettuce",
				},
                {
					"img": require('../assets/img/sp/j6.png'),
					"name": "109Kcal/braised fish",
				},
                {
					"img": require('../assets/img/sp/j7.png'),
					"name": "98Kcal/basal shrimps",
				},
                {
					"img": require('../assets/img/sp/j8.png'),
					"name": "84Kcal/scrambled eggs with tomato",
				},
			]
		}

	},
	methods: {
		tab(n) {
			this.activeIndex = n
			if (n == 0) {
				this.list = this.list1
			}
			if (n == 1) {
				this.list = this.list2
			}
			if (n == 2) {
				this.list = this.list3
			}
		},
		clickImg(index,item) {
			if(index<3){
				this.editlist = item
				this.show = false
			}

		},
		hideEdit(){
			this.show =true
		}
	},

	created() {

	}
}
</script>

<style lang="less" scoped>
.active {
	color: #428fd7;
}
.bgleft{
    background: #63a1a9;
}
.bgcenter{
    background: #8db6cd;
}
.bgright{
    background: #fcf5e9;
}
</style>
