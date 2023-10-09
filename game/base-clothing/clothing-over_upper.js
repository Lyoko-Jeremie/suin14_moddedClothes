/* For any item that has a colour_combat tag, set it to 0 if that item ever gets its own combat sprites. */
/* word - widget will output "a" if "a", and nothing if "n". eg - You are wearing <<a>> hat. You are wearing <<a>> shorts.
plural - widget will output "are" if 1, and "is" if 0. eg - Your hat <<upperplural>> wet. Your shorts <<upperplural>> wet. */
function initOverUpper() {
	setup.clothes.over_upper = [
		{
			index: 0,
			name: "naked",
			name_cap: "Naked",
			variable: "naked",
			integrity: 0,
			integrity_max: 0,
			fabric_strength: 0,
			reveal: 1000,
			bustresize: 0,
			word: "n",
			strap: 0,
			open: 0,
			zip: 0,
			state: 0,
			state_base: 0,
			state_top: 0,
			state_top_base: 0,
			plural: 0,
			colour: 0,
			colour_options: [],
			exposed: 2,
			exposed_base: 2,
			type: ["naked"],
			gender: "n",
			warmth: 0,
			cost: 0,
			description: "naked",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			sleeve_img: 0,
			breast_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			mainImage: 0,
		},

		{
			index: 1,
			name: "froggy coat",
			name_cap: "Froggy coat",
			variable: "froggy",
			integrity: 300,
			integrity_max: 300,
			fabric_strength: 30,
			reveal: 100,
			bustresize: -4,
			word: "a",
			one_piece: 1,
			strap: 0,
			open: 0,
			zip: 0,
			state: "waist",
			state_base: "waist",
			state_top: "chest",
			state_top_base: "chest",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "green",
			exposed: 0,
			exposed_base: 0,
			type: ["rainproof"],
			set: "froggy",
			gender: "n",
			femininity: 0,
			warmth: 70,
			cost: 4500,
			description: "Protects you from the rain.",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			sleeve_img: 1,
			breast_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "",
			accIcon: 0,
			outfitPrimary: { over_lower: "froggy skirt", over_head: "froggy hood" },
		},

		{
			index: 2,
			name: "cream",
			name_cap: "Cream",
			variable: "cream",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 30,
			reveal: 1000,
			bustresize: 0,
			word: "n",
			one_piece: 0,
			strap: 0,
			open: 1,
			zip: 0,
			state: "waist",
			state_base: "waist",
			state_top: "chest",
			state_top_base: "chest",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: "white",
			exposed: 0,
			exposed_base: 0,
			type: ["naked"],
			set: "over_upper",
			gender: "n",
			warmth: 5,
			cost: 0,
			description: "It won't last long.",
			shop: [],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			sleeve_img: 0,
			breast_img: 1,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
		},
	];

	/*
		Clothes that modders add go into this array, this should be empty in the base game at all times.
		These items should have a `modder` variable with a the modders name in a short string
	*/
	setup.moddedClothes.over_upper = [
		{
			index: 1,
			name: "raincoat",
			name_cap: "raincoat", cn_name_cap: "雨伞裙",
			variable: "raincoat",
			integrity: 1300,
			integrity_max: 1300,
			fabric_strength: 0,
			reveal: 0,
			bustresize: 0,
			word: "a",
			one_piece: 1,
			strap: 0,
			open: 0,
			zip: 0,
			state: "waist",
			state_base: "waist",
			state_top: "chest",
			state_top_base: "chest",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: "green",
			exposed: 1,
			exposed_base: 1,
			type: ["rainproof"],
			set: "raincoat",
			gender: "n",
			femininity: 0,
			warmth: 10,
			cost: 4500,
			description: "可爱但是遮雨很有用。",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 1,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "pale tangerine", "teal", "pale white", "pale yellow", "custom"],
			accessory_colour_sidebar: 1,
			sleeve_img: 1,
			breast_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "raincoaticon.png",
			accIcon: 0,
			outfitPrimary: {over_lower: "raincoat skirt"}
		},
	
		{
			index: 1,
			name: "anschool",
			name_cap: "anschool", cn_name_cap: "校服外套",
			variable: "anschool",
			integrity: 1300,
			integrity_max: 1300,
			fabric_strength: 0,
			reveal: 0,
			bustresize: 0,
			word: "a",
			one_piece: 1,
			strap: 0,
			open: 0,
			zip: 0,
			state: "waist",
			state_base: "waist",
			state_top: "chest",
			state_top_base: "chest",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: "green",
			exposed: 1,
			exposed_base: 1,
			type: ["school"],
			set: "anschool",
			gender: "n",
			femininity: 0,
			warmth: 10,
			cost: 4500,
			description: "亚梦同款校服。",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 1,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "pale tangerine", "teal", "pale white", "pale yellow", "custom"],
			accessory_colour_sidebar: 1,
			sleeve_img: 1,
			breast_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "anschool.png",
			accIcon: 0,
			outfitPrimary: {over_lower: "anschool skirt"}
		},
	
		{
			index: 6,
			name: "yellowjacket",
			name_cap: "Yellowjacket",
			cn_name_cap: "小黄外套",
			variable: "yellowjacket",
			integrity: 1300,
			integrity_max: 1300,
			fabric_strength: 30,
			reveal: 50,
			bustresize: 0,
			word: "a",
			one_piece: 1,
			strap: 0,
			open: 0,
			zip: 0,
			state: "waist",
			state_base: "waist",
			state_top: "chest",
			state_top_base: "chest",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "black",
			exposed: 1,
			exposed_base: 1,
			type: ["school"],
			set: "yellowjacket",
			gender: "n",
			femininity: 0,
			warmth: 70,
			cost: 4500,
			description: "一件小黄外套，温暖你的初秋。",
			shop: ["clothing", "school"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			sleeve_img: 1,
			breast_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "yellowjacket.png",
			accIcon: 0,
			outfitPrimary: {over_lower: "yellow skirt"}
		},
	
		{
			index: 6,
			name: "hongjiche",
			name_cap: "Hongjiche",
			cn_name_cap: "红机车",
			variable: "hongjiche",
			integrity: 1300,
			integrity_max: 1300,
			fabric_strength: 30,
			reveal: 50,
			bustresize: 0,
			word: "a",
			one_piece: 1,
			strap: 0,
			open: 0,
			zip: 0,
			state: "waist",
			state_base: "waist",
			state_top: "chest",
			state_top_base: "chest",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "red",
			exposed: 1,
			exposed_base: 1,
			type: ["cool"],
			set: "hongjiche",
			gender: "n",
			femininity: 0,
			warmth: 70,
			cost: 4500,
			description: "红机车外套，很拽。",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			sleeve_img: 1,
			breast_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "hongjiche.png",
			accIcon: 0,
			outfitPrimary: {over_lower: "hongjiche skirt"}
		},
	
		{
			index: 1,
			name: "xiaofuoveru",
			name_cap: "xiaofuoveru", cn_name_cap: "天行学院外套",
			variable: "xiaofuoveru",
			integrity: 1300,
			integrity_max: 1300,
			fabric_strength: 0,
			reveal: 0,
			bustresize: 0,
			word: "a",
			one_piece: 1,
			strap: 0,
			open: 0,
			zip: 0,
			state: "waist",
			state_base: "waist",
			state_top: "chest",
			state_top_base: "chest",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: "green",
			exposed: 0,
			exposed_base: 0,
			type: ["school"],
			set: "xiaofuoveru",
			gender: "n",
			femininity: 0,
			warmth: 10,
			cost: 4500,
			description: "是呀，我知道，你一直没变......",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 1,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "pale tangerine", "teal", "pale white", "pale yellow", "custom"],
			accessory_colour_sidebar: 1,
			sleeve_img: 1,
			breast_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "xiaofuoveru.png",
			accIcon: 0,
			outfitPrimary: {over_lower: "xiaofuoverl"}
		},
	
		{
			index: 2,
			name: "poisonous black little rabbit",
			name_cap: "Poisonous black little rabbit", cn_name_cap: "恶魔小黑兔",
			variable: "poisonous black little rabbit",
			integrity: 1300,
			integrity_max: 1300,
			fabric_strength: 30,
			reveal: 100,
			bustresize: 0,
			word: "a",
			one_piece: 1,
			strap: 0,
			open: 0,
			zip: 0,
			state: "waist",
			state_base: "waist",
			state_top: "chest",
			state_top_base: "chest",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "black",
			exposed: 1,
			exposed_base: 1,
			type: ["costume"],
			set: "poisonous black little rabbit",
			gender: "n",
			femininity: 0,
			warmth: 0,
			cost: 4500,
			description: "挂着恶魔一样笑容的黑色毛绒兔子玩偶。",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			sleeve_img: 1,
			breast_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "poisonous_black_little_rabbit.png",
			accIcon: 0,
			outfitPrimary: {over_lower: "poisonous black little rabbit"}
		},
	
		{
			index: 22,
			name: "verosika waitao",
			name_cap: "verosika waitao", cn_name_cap: "毛毛外套",
			variable: "verosika waitao",
			integrity: 500,
			integrity_max: 500,
			fabric_strength: 30,
			reveal: 100,
			bustresize: 0,
			word: "a",
			one_piece: 1,
			strap: 0,
			open: 0,
			zip: 0,
			state: "waist",
			state_base: "waist",
			state_top: "chest",
			state_top_base: "chest",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "white",
			exposed: 0,
			exposed_base: 0,
			type: ["cool"],
			set: "verosika waitao",
			gender: "n",
			femininity: 0,
			warmth: 75,
			cost: 4500,
			description: "维罗茜卡的毛毛外套",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			sleeve_img: 0,
			breast_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "verosika waitao.png",
			accIcon: 0,
			outfitPrimary: {over_lower: "verosika waitao"}
		},
	
		{
			index: 22,
			name: "rabbit coat",
			name_cap: "rabbit coat", cn_name_cap: "兔子外套",
			variable: "rabbit coat",
			integrity: 800,
			integrity_max: 800,
			fabric_strength: 30,
			reveal: 100,
			bustresize: 0,
			word: "a",
			one_piece: 1,
			strap: 0,
			open: 0,
			zip: 0,
			state: "waist",
			state_base: "waist",
			state_top: "chest",
			state_top_base: "chest",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: "white",
			exposed: 0,
			exposed_base: 0,
			type: ["school", "cool"],
			set: "rabbit coat",
			gender: "n",
			femininity: 0,
			warmth: 75,
			cost: 4500,
			description: "爱吃萝卜和青菜。",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			sleeve_img: 1,
			breast_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "rabbit coat.png",
			accIcon: 0,
			outfitPrimary: {over_lower: "rabbit coat skirt"}
		},
	
		{
			index: 1,
			name: "butterfly veil",
			name_cap: "Butterfly veil", cn_name_cap: "蝴蝶面纱",
			variable: "butterflyveil",
			integrity: 10000,
			integrity_max: 10000,
			fabric_strength: 30,
			reveal: 600,
			bustresize: 0,
			word: "a",
			one_piece: 1,
			strap: 0,
			open: 0,
			zip: 0,
			state: "waist",
			state_base: "waist",
			state_top: "chest",
			state_top_base: "chest",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "black",
			exposed: 0,
			exposed_base: 0,
			type: ["mask", "costume", "formal"],
			set: "butterflyveil",
			gender: "n",
			femininity: 0,
			warmth: 0,
			cost: 4500,
			description: "优雅而神秘。",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			sleeve_img: 0,
			breast_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "butterfly_veil.png",
			accIcon: 0,
			outfitPrimary: {over_lower: "butterfly veil", over_head: "butterfly veil"},
		},
	
		{
			index: 1,
			name: "heisewaida",
			name_cap: "heisewaida", cn_name_cap: "黑色外搭",
			variable: "heisewaida",
			integrity: 1300,
			integrity_max: 1300,
			fabric_strength: 0,
			reveal: 0,
			bustresize: 0,
			word: "a",
			one_piece: 1,
			strap: 0,
			open: 0,
			zip: 0,
			state: "waist",
			state_base: "waist",
			state_top: "chest",
			state_top_base: "chest",
			plural: 0,
			colour: 0,		
			colour_options: [],		
			colour_combat: "red",
			exposed: 1,
			exposed_base: 1,
			type: ["school"],
			set: "heisewaida",
			gender: "n",
			femininity: 0,
			warmth: 10,
			cost: 4500,
			description: "不知道这么穿衣服能不能保暖。",
			shop: ["clothing"],
			accessory: 0,		
			accessory_colour: 0,		
			accessory_colour_options: [],	
			sleeve_img: 1,		
			breast_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "heisewaida.png",
			accIcon: 0,
			outfitPrimary: {over_lower: "heisewaida skirt"}
		},
		
		{index: 9,
			name: "fur jacket",
			name_cap: "Fur jacket",
			cn_name_cap: "毛领外套",
			variable: "furjacket",
			integrity_max: 200,
			integrity: 200,
			fabric_strength: 30,
			reveal: 200,
			bustresize: 0,
			word: "a",
			one_piece: 0,
			strap: 0,
			open: 0,
			zip: 0,
			state_top_base: "neck",
			state_base: "chest",
			state_top: "neck",
			state: "chest",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			exposed_base: 0,
			exposed: 0,
			type: ["normal", "cool"],
			set: "furjacket",
			gender: "n",
			femininity: -200,
			warmth: 75,
			cost: 10000,
			description: "一件有着毛领的短外套，看起来很温暖。",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 1,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			sleeve_img: 1,
			sleeve_acc_img: 0,
			breast_img: 0,
			breast_acc_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			mainImage: 1,
			outfitPrimary: {over_lower:"fur jacket bottom"}
		},
	];

	setup.moddedClothes.over_upper.forEach((x, i) => (x.index = setup.clothes.over_upper.length + i));
	setup.clothes.over_upper.push(...setup.moddedClothes.over_upper);
}
window.initOverUpper = initOverUpper;