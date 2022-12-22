<template>
	<div>
		<!-- 头部栏 -->
		<div class="h-28 bg-light-50 flex justify-end items-center">
			<div class="flex justify-center items-center">
				<input class="searchInput  text-xl" placeholder="search">
				<button class="bg-primary text-light-50 rounded py-2 px-3 ml-5">CLICK</button>
				<button @click="isUpload = !isUpload" class="bg-primary text-light-50 rounded py-2 px-3 ml-5 mr-10">UPLOAD</button>
			</div>
		</div>

		<!-- 选项卡 -->
		<div class="h-22 bg-primary flex justify-end items-center text-3xl text-light-600">
			<div class="mr-20 cursor-pointer" :class="{ 'active': activeIndex == 0 }" @click="tab(0)">All Recipes</div>
			<div class="mr-20 cursor-pointer" :class="{ 'active': activeIndex == 1 }" @click="tab(1)">Breakfast</div>
			<div class="mr-20 cursor-pointer" :class="{ 'active': activeIndex == 2 }" @click="tab(2)">Lunch</div>
			<div class="mr-20 cursor-pointer" :class="{ 'active': activeIndex == 3 }" @click="tab(3)">Dinner</div>
			<div class="mr-20 cursor-pointer" :class="{ 'active': activeIndex == 4 }" @click="tab(4)">Snacks</div>
		</div>


				<!-- 上传 -->
				<div v-if="isUpload">
			<div class="flex justify-between items-center min-h-600px">
				<div class="flex justify-between items-center column w-1/2 min-h-600px pt-20">
					<div class="flex justify-around items-start w-full">
						<div class="text-xl font-bold">Cuisine Name</div>
						<input class="w-80" type="text">
					</div>
					<div class="flex justify-around items-start w-full">
						<div class="text-xl font-bold">Graph</div>
						<img src="../assets/img/sp/img.png" alt="">
					</div>
					<div class="flex justify-around items-start w-full">
						<div class="text-xl font-bold">Nutrition Facts <span>(per serving)</span></div>
						<input class="h-40 w-80" type="text">
					</div>
				</div>
				<div class="flex justify-between items-center column w-1/2 min-h-600px pt-20">
					<div class="flex justify-around items-start w-full">
						<div class="text-xl font-bold">Ingredients></div>
						<input class="h-40 w-80" type="text">
					</div>
					<div class="flex justify-around items-start w-full">
						<div class="text-xl font-bold">Directions</div>
						<input class="h-40 w-80" type="text">
					</div>
				</div>
			</div>
			<div class="w-full flex justify-end mt-10 ">
				<button @click="isUpload = !isUpload" class="bg-primary text-light-50 rounded py-2 px-3  mr-23">UPLOAD</button>
			</div>
		</div>

		<div v-else class="relative">
			<div>
				<!-- 封面 点击不同的选项根据activeIndex的值选择显示不同的banner图 -->
				<div class="w-full" v-if="activeIndex != 0">
					<img v-if="activeIndex == 1" width="100%" src="../assets/img/sp/f1.png" alt="">
					<img v-if="activeIndex == 2" width="100%" src="../assets/img/sp/f2.png" alt="">
					<img v-if="activeIndex == 3" width="100%" src="../assets/img/sp/f3.png" alt="">
					<img v-if="activeIndex == 4" width="100%" src="../assets/img/sp/f4.png" alt="">
				</div>

				<!-- 食谱照片和名字 数据存放在list数组 -->
				<div class="flex justify-evenly items-center  flex-wrap mt-3">
					<div class="w-3/12 flex justify-center items-center column mt-8" v-for="(item, index) in list">
						<img width="250px" :src="item.img" alt="" @click="clickImg(index, item.child)">
						<div class="mt-1">{{ item.name }}</div>
					</div>
				</div>
			</div>

			<!-- 详细信息 -->
			<div class="w-full opacity-90 bg-light-50 opacity-90 absolute -top-5 left-0 flex justify-around items-start pt-10 px-10 "
				style="height: 100vh;" :class="{ 'hidden': show }" @click="hideEdit()">
				<div class="w-3/12 flex justify-center items-sart column">
					<div class="font-bold text-xl">{{ editlist.name }}</div>
					<img class="mt-10" width="300px" :src="editlist.img" alt="">
					<h1 class="font-bold text-xl mt-10">Nutrition Facts</h1>
					<div class="mt-2 text-xl">(per serving)</div>
					<div class="mt-2 text-xl">{{ editlist.calories }} Calories</div>
					<div class="mt-2 text-xl">{{ editlist.fat }} Fat</div>
					<div class="mt-2 text-xl">{{ editlist.carbs }} Carbs</div>
					<div class="mt-2 text-xl">{{ editlist.protein }} Protein</div>
				</div>
				<div class="w-4/12 flex justify-center items-sart column ml-5">
					<div class="font-bold text-xl mb-10">Ingredients</div>
					<div>{{ editlist.ingredients }}</div>
				</div>
				<div class="w-5/12 flex justify-center items-sart column">
					<div class="font-bold text-xl mb-10">Directions</div>
					<div>
						{{ editlist.directions }}
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
			// 时候显示长传的页面
			isUpload:false,
			// 正常显示食谱
			show: true,
			// 当前下标 用来判断点击的选项卡
			activeIndex: 0,
			// 详细信息的对象
			editlist: {},

			// All Recipes的数据
			list: [
				{
					"img": require('../assets/img/sp/a1.png'),
					"name": "Quick Beef Stir-Fry",
					"child": {
						"img": require('../assets/img/sp/a1.png'),
						"name": "Quick Beef Stir-Fry",
						"calories": "268",
						"fat": "16g",
						'carbs': "9g",
						"protein": "23g",
						"ingredients": " 2 tablespoons vegetable oil 1 pound beef sirloin, cut into 2-inch strips 1 ½ cups fresh broccoli florets 1 red bell pepper, cut into matchsticks 2 carrots, thinly sliced 1 green onion, chopped 1 teaspoon minced garlic 2 tablespoons soy sauce 2 tablespoons sesame seeds, toasted",
						"directions": "Heat vegetable oil in a large wok or skillet over medium-high heat; cook and stir beef until browned, 3 to 4 minutes. Move beef to the side of the wok and add broccoli, bell pepper, carrots, green onion, and garlic to the center of the wok. Cook and stir vegetables for 2 minutes.Stir beef into vegetables and season with soy sauce and sesame seeds. Continue to cook and stir until vegetables are tender, about 2 more minutes."

					}
				},
				{
					"img": require('../assets/img/sp/a2.png'),
					"name": "Fluffy Microwave Scrambled Eggs",
					"child": {
						"img": require('../assets/img/sp/a2.png'),
						"name": "Fluffy Microwave Scrambled Eggs",
						"calories": "141",
						"fat": "9g",
						'carbs': "2g",
						"protein": "12g",
						"ingredients": " 4 eggs ¼ cup milk ⅛ teaspoon salt",
						"directions": "1.Break the eggs into a microwave-proof mixing bowl. Add milk and salt; mix well.2.Pop the bowl into the microwave and cook on high power for 30 seconds. Remove bowl, beat eggs very well, scraping down the sides of the bowl, and return to the microwave for another 30 seconds. Repeat this pattern, stirring every 30 seconds for up to 2 1/2 minutes. Stop when eggs have the consistency you desire."
					}
				},
				 {
					"img": require('../assets/img/sp/a3.png'),
					"name": "Pumpkin Conchas",
					"child": {
						"img": require('../assets/img/sp/a3.png'),
						"name": "Pumpkin Conchas",
						"calories": "393",
						"fat": "13g",
						'carbs': "61g",
						"protein": "8g",
						"ingredients": " 2 ¼ cups all-purpose flour ½ cup pumpkin puree ¼ cup warm milk 1 large egg yolk 2 tablespoons butter, melted 2 tablespoons white sugar 1 (.25 ounce) package active dry yeast 1 teaspoon kosher salt ⅛ teaspoon vanilla extract",
						"directions": "1.Break the eggs into a microwave-proof mixing bowl. Add milk and salt; mix well.2.Pop the bowl into the microwave and cook on high power for 30 seconds. Remove bowl, beat eggs very well, scraping down the sides of the bowl, and return to the microwave for another 30 seconds. Repeat this pattern, stirring every 30 seconds for up to 2 1/2 minutes. Stop when eggs have the consistency you desire."
					}
				},
				{
					"img": require('../assets/img/sp/a4.png'),
					"name": "Chicken Wings"
				},
				{
					"img": require('../assets/img/sp/a5.png'),
					"name": "BBQ Pork"
				},
				{
					"img": require('../assets/img/sp/a6.png'),
					"name": "Grilled Asian Chicken"
				},
				{
					"img": require('../assets/img/sp/a7.png'),
					"name": "Pasta Salad"
				},
				{
					"img": require('../assets/img/sp/a8.png'),
					"name": "Gingerbread Cinnamon Rolls"
				},
				{
					"img": require('../assets/img/sp/a9.png'),
					"name": "Easy French Toast Casserole"
				},
				{
					"img": require('../assets/img/sp/a10.png'),
					"name": "Spicy Green Beans"
				},
				{
					"img": require('../assets/img/sp/a11.png'),
					"name": "No-Cook Overnight Oatmeal"
				},
				{
					"img": require('../assets/img/sp/a12.png'),
					"name": "Spring Roll"
				}
			],
			// All Recipes的数据
			list1: [
			{
					"img": require('../assets/img/sp/a1.png'),
					"name": "Quick Beef Stir-Fry",
					"child": {
						"img": require('../assets/img/sp/a1.png'),
						"name": "Quick Beef Stir-Fry",
						"calories": "268",
						"fat": "16g",
						'carbs': "9g",
						"protein": "23g",
						"ingredients": " 2 tablespoons vegetable oil 1 pound beef sirloin, cut into 2-inch strips 1 ½ cups fresh broccoli florets 1 red bell pepper, cut into matchsticks 2 carrots, thinly sliced 1 green onion, chopped 1 teaspoon minced garlic 2 tablespoons soy sauce 2 tablespoons sesame seeds, toasted",
						"directions": "Heat vegetable oil in a large wok or skillet over medium-high heat; cook and stir beef until browned, 3 to 4 minutes. Move beef to the side of the wok and add broccoli, bell pepper, carrots, green onion, and garlic to the center of the wok. Cook and stir vegetables for 2 minutes.Stir beef into vegetables and season with soy sauce and sesame seeds. Continue to cook and stir until vegetables are tender, about 2 more minutes."

					}
				},
				{
					"img": require('../assets/img/sp/a2.png'),
					"name": "Fluffy Microwave Scrambled Eggs",
					"child": {
						"img": require('../assets/img/sp/a2.png'),
						"name": "Fluffy Microwave Scrambled Eggs",
						"calories": "141",
						"fat": "9g",
						'carbs': "2g",
						"protein": "12g",
						"ingredients": " 4 eggs ¼ cup milk ⅛ teaspoon salt",
						"directions": "1.Break the eggs into a microwave-proof mixing bowl. Add milk and salt; mix well.2.Pop the bowl into the microwave and cook on high power for 30 seconds. Remove bowl, beat eggs very well, scraping down the sides of the bowl, and return to the microwave for another 30 seconds. Repeat this pattern, stirring every 30 seconds for up to 2 1/2 minutes. Stop when eggs have the consistency you desire."
					}
				},
				 {
					"img": require('../assets/img/sp/a3.png'),
					"name": "Pumpkin Conchas",
					"child": {
						"img": require('../assets/img/sp/a3.png'),
						"name": "Pumpkin Conchas",
						"calories": "393",
						"fat": "13g",
						'carbs': "61g",
						"protein": "8g",
						"ingredients": " 2 ¼ cups all-purpose flour ½ cup pumpkin puree ¼ cup warm milk 1 large egg yolk 2 tablespoons butter, melted 2 tablespoons white sugar 1 (.25 ounce) package active dry yeast 1 teaspoon kosher salt ⅛ teaspoon vanilla extract",
						"directions": "1.Break the eggs into a microwave-proof mixing bowl. Add milk and salt; mix well.2.Pop the bowl into the microwave and cook on high power for 30 seconds. Remove bowl, beat eggs very well, scraping down the sides of the bowl, and return to the microwave for another 30 seconds. Repeat this pattern, stirring every 30 seconds for up to 2 1/2 minutes. Stop when eggs have the consistency you desire."
					}
				},
				{
					"img": require('../assets/img/sp/a4.png'),
					"name": "Chicken Wings"
				},
				{
					"img": require('../assets/img/sp/a5.png'),
					"name": "BBQ Pork"
				},
				{
					"img": require('../assets/img/sp/a6.png'),
					"name": "Grilled Asian Chicken"
				},
				{
					"img": require('../assets/img/sp/a7.png'),
					"name": "Pasta Salad"
				},
				{
					"img": require('../assets/img/sp/a8.png'),
					"name": "Gingerbread Cinnamon Rolls"
				},
				{
					"img": require('../assets/img/sp/a9.png'),
					"name": "Easy French Toast Casserole"
				},
				{
					"img": require('../assets/img/sp/a10.png'),
					"name": "Spicy Green Beans"
				},
				{
					"img": require('../assets/img/sp/a11.png'),
					"name": "No-Cook Overnight Oatmeal"
				},
				{
					"img": require('../assets/img/sp/a12.png'),
					"name": "Spring Roll"
				}
			],
			// Breakfast的数据
			list2: [
			{
					"img": require('../assets/img/sp/b1.png'),
					"name": "Classic Waffles",
					"child": {
						"img": require('../assets/img/sp/b1.png'),
						"name": "Classic Waffles",
						"calories": "379",
						"fat": "16g",
						'carbs': "48g",
						"protein": "10g",
						"ingredients": " 2 cups all-purpose flour 1 teaspoon salt 4 teaspoons baking powder 2 tablespoons white sugar 2 eggs 1 ½ cups warm milk ⅓ cup butter, melted 1 teaspoon vanilla extract",
						"directions": "1.In a large bowl, mix together flour, salt, baking powder and sugar; set aside. Preheat waffle iron to desired temperature.2.In a separate bowl, beat the eggs. Stir in the milk, butter and vanilla. Pour the milk mixture into the flour mixture; beat until blended.3.Ladle the batter into a preheated waffle iron. Cook the waffles until golden and crisp. Serve immediately."
					}
				},
				{
					"img": require('../assets/img/sp/b2.png'),
					"name": "Gingerbread Cinnamon Rolls",
					"child": {
						"img": require('../assets/img/sp/b2.png'),
						"name": "Gingerbread Cinnamon Rolls",
						"calories": "530",
						"fat": "24g",
						'carbs': "73g",
						"protein": "7g",
						"ingredients": " ½ cup warm whole milk (110 degrees F (43 degrees C)) 3 tablespoons molasses  1 (.25 ounce) envelope active dry yeast ¼ cup granulated sugar 2 teaspoons kosher salt 4 ¾ cups all-purpose flour, divided, or more as needed ½ cup sour cream 6 tablespoons unsalted butter, softened 1 large egg, lightly beaten cooking spray",
						"directions": "1.Combine warm milk, molasses, and yeast in a small bowl and stir together until combined. Let sit until foamy, about 5 minutes.2.Add sugar, salt, and 4 1/2 cups of the flour to the work bowl of a stand mixer fitted with the paddle attachment. Beat on low speed until just combined, about 15 seconds. With mixer running on low speed, add milk mixture, sour cream, butter, and egg. Continue beating until dough forms, 1 to 2 minutes. Switch to a dough hook attachment. Beat on medium-low speed until dough is smooth and elastic, 6 to 9 minutes; add remaining 1/4 cup flour 1/2 to 1 teaspoon at a time, if necessary.3.Place dough in a large bowl greased with cooking spray and turn to coat. Cover with a clean kitchen towel. Let rise in a warm draft-free place until dough has doubled in size, 1 hour 30 minutes to 2 hours."
					}
				},
				 {
					"img": require('../assets/img/sp/b3.png'),
					"name": "Pumpkin Conchas",
					"child": {
						"img": require('../assets/img/sp/b3.png'),
						"name": "Pumpkin Conchas",
						"calories": "393",
						"fat": "13g",
						'carbs': "61g",
						"protein": "8g",
						"ingredients": " 2 ¼ cups all-purpose flour ½ cup pumpkin puree ¼ cup warm milk 1 large egg yolk 2 tablespoons butter, melted 2 tablespoons white sugar 1 (.25 ounce) package active dry yeast 1 teaspoon kosher salt ⅛ teaspoon vanilla extract",
						"directions": "1.Break the eggs into a microwave-proof mixing bowl. Add milk and salt; mix well.2.Pop the bowl into the microwave and cook on high power for 30 seconds. Remove bowl, beat eggs very well, scraping down the sides of the bowl, and return to the microwave for another 30 seconds. Repeat this pattern, stirring every 30 seconds for up to 2 1/2 minutes. Stop when eggs have the consistency you desire."
					}
				},
				{
					"img": require('../assets/img/sp/b4.png'),
					"name": "Easy French Toast Casserole"
				},
				{
					"img": require('../assets/img/sp/b5.png'),
					"name": "No-Cook Overnight Oatmeal"
				},
				{
					"img": require('../assets/img/sp/b6.png'),
					"name": "Fluffy Microwave Scrambled Eggs"
				},
				{
					"img": require('../assets/img/sp/b7.png'),
					"name": "Apple Fritter Pancakes"
				},
				{
					"img": require('../assets/img/sp/b8.png'),
					"name": "Chicken Arroz Caldo"
				}
			],
			// Lunch的数据
			list3: [
			{
					"img": require('../assets/img/sp/c1.png'),
					"name": "Quick Beef Stir-Fry",
					"child": {
						"img": require('../assets/img/sp/c1.png'),
						"name": "Quick Beef Stir-Fry",
						"calories": "268",
						"fat": "16g",
						'carbs': "9g",
						"protein": "23g",
						"ingredients": " 2 tablespoons vegetable oil 1 pound beef sirloin, cut into 2-inch strips 1 ½ cups fresh broccoli florets 1 red bell pepper, cut into matchsticks 2 carrots, thinly sliced 1 green onion, chopped 1 teaspoon minced garlic 2 tablespoons soy sauce 2 tablespoons sesame seeds, toasted",
						"directions": "Heat vegetable oil in a large wok or skillet over medium-high heat; cook and stir beef until browned, 3 to 4 minutes. Move beef to the side of the wok and add broccoli, bell pepper, carrots, green onion, and garlic to the center of the wok. Cook and stir vegetables for 2 minutes.Stir beef into vegetables and season with soy sauce and sesame seeds. Continue to cook and stir until vegetables are tender, about 2 more minutes."

					}
				},
				{
					"img": require('../assets/img/sp/c2.png'),
					"name": "Grilled Asian Chicken",
					"child": {
						"img": require('../assets/img/sp/c2.png'),
						"name": "Grilled Asian Chicken",
						"calories": "217",
						"fat": "8g",
						'carbs': "11g",
						"protein": "26g",
						"ingredients": " ¼ cup soy sauce 2 tablespoons honey 4 teaspoons sesame oil 2 cloves garlic, crushed 3 slices fresh ginger root 4 skinless, boneless chicken breast halves",
						"directions": "1.Combine soy sauce, honey, sesame oil, garlic, and ginger in a small microwave-safe bowl; heat in the microwave on medium power for 1 minute, then stir. Heat again for 30 seconds, watching closely to prevent boiling.2.Place chicken breasts in a shallow dish. Pour soy sauce mixture over top and set aside to marinate for 15 minutes.3.Preheat an outdoor grill for medium-high heat and lightly oil the grate.4.Meanwhile, remove chicken from marinade; transfer marinade into a small saucepan and bring to a boil. Reduce heat to low and simmer until thick, about 1 minute. Set aside for basting.5.Cook chicken on the preheated grill, basting frequently with reserved marinade, until golden brown on all sides and chicken is no longer pink in the center, about 6 to 8 minutes per side. An instant-read meat thermometer inserted into the thickest piece should read at least 160 degrees F (70 degrees C)."
					}
				},
				 {
					"img": require('../assets/img/sp/c3.png'),
					"name": "BBQ Pork",
					"child": {
						"img": require('../assets/img/sp/c3.png'),
						"name": "BBQ Pork",
						"calories": "483",
						"fat": "9g",
						'carbs': "54g",
						"protein": "44g",
						"ingredients": " ½ cup soy sauce ⅓ cup honey ⅓ cup ketchup ⅓ cup brown sugar ¼ cup Chinese rice wine 2 tablespoons hoisin sauce 2 tablespoons red bean curd (Optional) 1 teaspoon Chinese five-spice powder (Optional)",
						"directions": "1.Stir soy sauce, honey, ketchup, brown sugar, rice wine, hoisin sauce, red bean curd, and five-spice powder together in a saucepan over medium-low heat. Cook and stir until just combined and slightly warm, 2 to 3 minutes.2.Meanwhile, slice each pork tenderloin lengthwise into 1 1/2- to 2-inch-thick strips. Place pork strips in a large, resealable plastic bag.3.Pour marinade into the bag with the pork. Squeeze air from the bag, seal, and turn the bag a few times until pork is well coated. Marinate in the refrigerator, 2 hours to overnight.4.When ready to cook, preheat a charcoal grill for medium-high heat and lightly oil the grate.5.Remove pork from marinade and shake to remove excess liquid. Set aside the remaining marinade for basting.6.Rake the hot coals into two equal piles on opposite sides of the charcoal grate. Add a small container of water to the grate. Place pork strips in the center of the grate for indirect cooking.7.Cook pork over indirect heat, turning regularly and basting as desired, until an instant-read thermometer inserted into the center reads at least 145 degrees F (63 degrees C), 30 minutes or longer."
					}
				},
				{
					"img": require('../assets/img/sp/c4.png'),
					"name": "Sloppy Joes"
				},
				{
					"img": require('../assets/img/sp/c5.png'),
					"name": "Chicken Wings"
				},
				{
					"img": require('../assets/img/sp/c6.png'),
					"name": "Fluffy Microwave Scrambled Eggs"
				},
				{
					"img": require('../assets/img/sp/c7.png'),
					"name": "Apple Fritter Pancakes"
				},
				{
					"img": require('../assets/img/sp/c8.png'),
					"name": "Chicken Arroz Caldo"
				}
			],
			// Dinner的数据
			list4: [
			{
					"img": require('../assets/img/sp/d1.png'),
					"name": "Beef Dumplings",
					"child": {
						"img": require('../assets/img/sp/d1.png'),
						"name": "Beef Dumplings",
						"calories": "356",
						"fat": "21g",
						'carbs': "25g",
						"protein": "16g",
						"ingredients": " 1 ½ pounds ground beef 2 cups shredded Chinese cabbage 1 medium carrot, shredded 1 medium onion, minced 1 large egg 1 tablespoon soy sauce 1 tablespoon vegetable oil 1 teaspoon sugar 1 teaspoon salt 1 (14 ounce) package wonton wrappers",
						"directions": "1.Mix together beef, cabbage, carrot, and onion in a large bowl. Stir in egg, soy sauce, oil, sugar, and salt.2.Place 1 heaping teaspoon filling in the center of a wonton wrapper. Moisten wonton edges with a few drops water. Fold dumpling in half and pinch the edges together to seal. Create a ripple pattern along the sealed edge by pinching and gently pushing together small segments. Repeat to make remaining dumplings.3.Bring a large pot of water to a boil. Add dumplings and cook until they float to the surface, about 5 minutes. Drain."

					}
				},
				{
					"img": require('../assets/img/sp/d2.png'),
					"name": "Pasta Salad",
					"child": {
						"img": require('../assets/img/sp/d2.png'),
						"name": "Pasta Salad",
						"calories": "400",
						"fat": "25g",
						'carbs': "39g",
						"protein": "8g",
						"ingredients": " 1 pound tri-colored spiral pasta 1 (16 ounce) bottle Italian-style salad dressing 6 tablespoons salad seasoning mix 2 cups cherry tomatoes, diced 1 green bell pepper, chopped 1 red bell pepper, diced ½ yellow bell pepper, chopped 1 (2.25 ounce) can black olives, chopped",
						"directions": "1.Bring a large pot of lightly salted water to a boil. Cook pasta in the boiling water, stirring occasionally, until tender yet firm to the bite, about 10 to 12 minutes; rinse under cold water and drain.2.Whisk Italian dressing and salad spice mix together until smooth.3.Combine pasta, tomatoes, bell peppers, and olives in a salad bowl; pour dressing over salad and toss to coat. Refrigerate salad, 8 hours to overnight."
					}
				},
				 {
					"img": require('../assets/img/sp/d3.png'),
					"name": "BBQ Pork",
					"child": {
						"img": require('../assets/img/sp/c3.png'),
						"name": "BBQ Pork",
						"calories": "483",
						"fat": "9g",
						'carbs': "54g",
						"protein": "44g",
						"ingredients": " ½ cup soy sauce ⅓ cup honey ⅓ cup ketchup ⅓ cup brown sugar ¼ cup Chinese rice wine 2 tablespoons hoisin sauce 2 tablespoons red bean curd (Optional) 1 teaspoon Chinese five-spice powder (Optional)",
						"directions": "1.Stir soy sauce, honey, ketchup, brown sugar, rice wine, hoisin sauce, red bean curd, and five-spice powder together in a saucepan over medium-low heat. Cook and stir until just combined and slightly warm, 2 to 3 minutes.2.Meanwhile, slice each pork tenderloin lengthwise into 1 1/2- to 2-inch-thick strips. Place pork strips in a large, resealable plastic bag.3.Pour marinade into the bag with the pork. Squeeze air from the bag, seal, and turn the bag a few times until pork is well coated. Marinate in the refrigerator, 2 hours to overnight.4.When ready to cook, preheat a charcoal grill for medium-high heat and lightly oil the grate.5.Remove pork from marinade and shake to remove excess liquid. Set aside the remaining marinade for basting.6.Rake the hot coals into two equal piles on opposite sides of the charcoal grate. Add a small container of water to the grate. Place pork strips in the center of the grate for indirect cooking.7.Cook pork over indirect heat, turning regularly and basting as desired, until an instant-read thermometer inserted into the center reads at least 145 degrees F (63 degrees C), 30 minutes or longer."
					}
				},
				{
					"img": require('../assets/img/sp/d4.png'),
					"name": "Spicy Green Beans"
				},
				{
					"img": require('../assets/img/sp/d5.png'),
					"name": "Chicken Wings"
				},
				{
					"img": require('../assets/img/sp/d6.png'),
					"name": "Fluffy Microwave Scrambled Eggs"
				},
				{
					"img": require('../assets/img/sp/d7.png'),
					"name": "Apple Fritter Pancakes"
				},
				{
					"img": require('../assets/img/sp/d8.png'),
					"name": "Chicken Arroz Caldo"
				}
			],
			// Snacks的数据
			list5: [
			{
					"img": require('../assets/img/sp/e1.png'),
					"name": "Grilled Halloumi with Berry Salsa",
					"child": {
						"img": require('../assets/img/sp/e1.png'),
						"name": "Grilled Halloumi with Berry Salsa",
						"calories": "406",
						"fat": "29g",
						'carbs': "26g",
						"protein": "16g",
						"ingredients": " 4 ounces fresh blueberries 3 ounces red currants 3 tablespoons chopped fresh mint, divided 3 tablespoons chopped fresh cilantro, divided 1 tablespoon fresh marjoram, stems removed 1 habanero pepper, seeded and minced 2 tablespoons olive oil 2 tablespoons agave syrup 2 limes, divided ½ cup cashews 8 ounces halloumi cheese, cut into 8 slices",
						"directions": "1.Place blueberries and red currants into a mixing bowl. Add 2 tablespoons mint, 2 tablespoons cilantro, marjoram, habanero, olive oil, agave syrup, and juice of 1 lime. Mix and set aside.2.Heat a nonstick griddle over medium-high heat. Cook cashews until browned, stirring often to keep from burning, 8 to 10 minutes. Transfer cashews to a plate and set aside. Reduce heat to medium and brown halloumi cheese slices, 2 to 3 minutes per side.3.Place halloumi cheese onto a plate, top with berry salsa mixture and remaining 1 tablespoon mint and cilantro. Chop cashews and spread on top of halloumi. Garnish with lime wedges from remaining lime. Serve immediately."

					}
				},
				{
					"img": require('../assets/img/sp/e2.png'),
					"name": "Pasta Salad",
					"child": {
						"img": require('../assets/img/sp/d2.png'),
						"name": "Pasta Salad",
						"calories": "400",
						"fat": "25g",
						'carbs': "39g",
						"protein": "8g",
						"ingredients": " 1 pound tri-colored spiral pasta 1 (16 ounce) bottle Italian-style salad dressing 6 tablespoons salad seasoning mix 2 cups cherry tomatoes, diced 1 green bell pepper, chopped 1 red bell pepper, diced ½ yellow bell pepper, chopped 1 (2.25 ounce) can black olives, chopped",
						"directions": "1.Bring a large pot of lightly salted water to a boil. Cook pasta in the boiling water, stirring occasionally, until tender yet firm to the bite, about 10 to 12 minutes; rinse under cold water and drain.2.Whisk Italian dressing and salad spice mix together until smooth.3.Combine pasta, tomatoes, bell peppers, and olives in a salad bowl; pour dressing over salad and toss to coat. Refrigerate salad, 8 hours to overnight."
					}
				},
				 {
					"img": require('../assets/img/sp/e3.png'),
					"name": "Balsamic Bruschetta",
					"child": {
						"img": require('../assets/img/sp/e3.png'),
						"name": "Balsamic Bruschetta",
						"calories": "197",
						"fat": "4g",
						'carbs': "33g",
						"protein": "8g",
						"ingredients": " 1 loaf French bread, cut into 1/4-inch slices 1 tablespoon extra-virgin olive oil 8 roma (plum) tomatoes, diced ⅓ cup chopped fresh basil 1 ounce Parmesan cheese, freshly grated 2 cloves garlic, minced 1 tablespoon good quality balsamic vinegar 2 teaspoons extra-virgin olive oil ¼ teaspoon kosher salt ¼ teaspoon freshly ground black pepper",
						"directions": "1.Preheat oven to 400 degrees F (200 degrees C). Brush bread slices on both sides lightly with 1 tablespoon oil and place on large baking sheet. Toast bread until golden, 5 to 10 minutes, turning halfway through.2.Meanwhile, toss together tomatoes, basil, Parmesan cheese, and garlic in a bowl. Mix in balsamic vinegar, 2 teaspoons olive oil, kosher salt, and pepper.3.Spoon tomato mixture onto toasted bread slices and serve immediately."
					}
				},
				{
					"img": require('../assets/img/sp/e4.png'),
					"name": "Candied Pecans"
				},
				{
					"img": require('../assets/img/sp/e5.png'),
					"name": "Chicken Wings"
				},
				{
					"img": require('../assets/img/sp/e6.png'),
					"name": "Best Egg Rolls"
				},
				{
					"img": require('../assets/img/sp/e7.png'),
					"name": "Buttermilk Cornbread"
				},
				{
					"img": require('../assets/img/sp/e8.png'),
					"name": "Spring Roll"
				}
			]
		}

	},
	methods: {
		// 传进路由路径可以跳转相应页面
		go(path){
			this.$router.push('/'+path)
		},

		// 点击不同的5个选项卡 activeIndex等于相应的下标 并将当前页面数据赋值给list重新渲染
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
			if (n == 3) {
				this.list = this.list4
			}
			if (n == 4) {
				this.list = this.list5
			}
		},

		// 点击前三个食谱显示详细信息
		clickImg(index, item) {
			if (index < 3) {
				this.editlist = item
				this.show = false
			}

		},
		// 点击详细信息 隐藏详细信息蒙层 
		hideEdit() {
			this.show = true
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
</style>
