/* For any item that has a colour_combat tag, set it to 0 if that item ever gets its own combat sprites. */
function initOverLower() {
	setup.clothes.over_lower = [
		{
			index: 0,
			name: "naked",
			name_cap: "Naked",
			variable: "naked",
			integrity: 0,
			integrity_max: 0,
			fabric_strength: 0,
			reveal: 1000,
			rearresize: 0,
			word: "n",
			skirt: 0,
			skirt_down: 0,
			state: 0,
			state_base: 0,
			plural: 0,
			colour: 0,
			colour_options: [],
			exposed: 2,
			exposed_base: 2,
			vagina_exposed: 1,
			vagina_exposed_base: 1,
			anus_exposed: 1,
			anus_exposed_base: 1,
			type: ["naked"],
			gender: "n",
			warmth: 0,
			cost: 0,
			description: "naked",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			high_img: 0,
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			mainImage: 0,
		},

		{
			index: 1,
			name: "froggy skirt",
			name_cap: "Froggy skirt",
			variable: "froggy",
			integrity: 300,
			integrity_max: 300,
			fabric_strength: 30,
			reveal: 100,
			rearresize: -4,
			word: "a",
			one_piece: 1,
			skirt: 1,
			skirt_down: 1,
			zip: 1,
			state: "waist",
			state_base: "waist",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "green",
			exposed: 0,
			exposed_base: 0,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 0,
			anus_exposed_base: 0,
			type: ["rainproof"],
			set: "froggy",
			gender: "n",
			femininity: 0,
			warmth: 65,
			cost: 0,
			description: "Protects you from rain.",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			high_img: 0,
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			outfitSecondary: ["over_upper", "froggy coat"],
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
			rearresize: 0,
			word: "n",
			one_piece: 0,
			skirt: 0,
			skirt_down: 0,
			zip: 0,
			state: "waist",
			state_base: "waist",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "white",
			exposed: 0,
			exposed_base: 0,
			vagina_exposed: 1,
			vagina_exposed_base: 1,
			anus_exposed: 1,
			anus_exposed_base: 1,
			type: ["naked"],
			set: "over_lower",
			gender: "n",
			femininity: 0,
			cost: 10000,
			description: "It won't last long.",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			high_img: 0,
			back_img: 0,
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
	setup.moddedClothes.over_lower = [
		{
			index: 1,
			name: "raincoat skirt",
			name_cap: "raincoat skirt", cn_name_cap: "雨伞裙",
			variable: "raincoat skirt",
			integrity: 300,
			integrity_max: 300,
			fabric_strength: 0,
			reveal: 0,
			rearresize: 0,
			word: "a",
			one_piece: 1,
			skirt: 1,
			skirt_down: 1,
			zip: 1,
			state: "waist",
			state_base: "waist",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "green",
			exposed: 0,
			exposed_base: 0,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 0,
			anus_exposed_base: 0,
			type: ["rainproof"],
			set: "raincoat",
			gender: "n",
			femininity: 0,
			warmth: 10,
			cost: 0,
			description: "可爱但是遮雨很有用。",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			high_img: 0,
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			outfitSecondary: ["over_upper", "raincoat"]
		},
		{
			index: 1,
			name: "anschool skirt",
			name_cap: "anschool skirt", cn_name_cap: "校服外套裙",
			variable: "anschool skirt",
			integrity: 300,
			integrity_max: 300,
			fabric_strength: 0,
			reveal: 0,
			rearresize: 0,
			word: "a",
			one_piece: 1,
			skirt: 1,
			skirt_down: 1,
			zip: 1,
			state: "waist",
			state_base: "waist",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "green",
			exposed: 0,
			exposed_base: 0,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 0,
			anus_exposed_base: 0,
			type: ["school"],
			set: "anschool",
			gender: "n",
			femininity: 0,
			warmth: 10,
			cost: 0,
			description: "亚梦同款校服。",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			high_img: 0,
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			outfitSecondary: ["over_upper", "anschool"]
		},
	
		{
			index: 6,
			name: "yellow skirt",
			name_cap: "Yellow skirt",
			cn_name_cap: "小黄外套下摆",
			variable: "yellow skirt",
			integrity: 300,
			integrity_max: 300,
			fabric_strength: 30,
			reveal: 50,
			rearresize: 0,
			word: "a",
			one_piece: 1,
			skirt: 1,
			skirt_down: 1,
			zip: 1,
			state: "waist",
			state_base: "waist",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "black",
			exposed: 0,
			exposed_base: 0,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 0,
			anus_exposed_base: 0,
			type: ["school"],
			set: "yellowjacket",
			gender: "n",
			femininity: 0,
			warmth: 65,
			cost: 0,
			description: "小黄外套的下摆。",
			shop: ["clothing", "school"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			high_img: 0,
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			outfitSecondary: ["over_upper", "yellowjacket"]
		},
	
		{
			index: 8,
			name: "hongjiche skirt",
			name_cap: "Hongjiche skirt",
			cn_name_cap: "红机车下摆",
			variable: "hongjiche",
			integrity: 300,
			integrity_max: 300,
			fabric_strength: 30,
			reveal: 50,
			rearresize: 0,
			word: "a",
			one_piece: 1,
			skirt: 1,
			skirt_down: 1,
			zip: 1,
			state: "waist",
			state_base: "waist",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "black",
			exposed: 0,
			exposed_base: 0,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 0,
			anus_exposed_base: 0,
			type: ["cool"],
			set: "hongjiche",
			gender: "n",
			femininity: 0,
			warmth: 65,
			cost: 0,
			description: "红机车的下摆。",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			high_img: 0,
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			outfitSecondary: ["over_upper", "hongjiche"]
		},
	
		{
			index: 1,
			name: "xiaofuoverl",
			name_cap: "xiaofuoverl", cn_name_cap: "天行学院外套裙",
			variable: "xiaofuoveru",
			integrity: 300,
			integrity_max: 300,
			fabric_strength: 0,
			reveal: 0,
			rearresize: 0,
			word: "a",
			one_piece: 1,
			skirt: 1,
			skirt_down: 1,
			zip: 1,
			state: "waist",
			state_base: "waist",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "green",
			exposed: 0,
			exposed_base: 0,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 0,
			anus_exposed_base: 0,
			type: ["school"],
			set: "xiaofuoveru",
			gender: "n",
			femininity: 0,
			warmth: 10,
			cost: 0,
			description: "是呀，我知道，你一直没变......",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			high_img: 0,
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			outfitSecondary: ["over_upper", "xiaofuoveru"]
		},
	
		{
			index: 2,
			name: "poisonous black little rabbit",
			name_cap: "Poisonous black little rabbit", cn_name_cap: "恶魔小黑兔",
			variable: "poisonous black little rabbit",
			integrity: 10000,
			integrity_max: 10000,
			fabric_strength: 30,
			reveal: 100,
			rearresize: 0,
			word: "a",
			one_piece: 1,
			skirt: 1,
			skirt_down: 1,
			zip: 1,
			state: "waist",
			state_base: "waist",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "yellow",
			exposed: 0,
			exposed_base: 0,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 0,
			anus_exposed_base: 0,
			type: ["normal"],
			set: "poisonous black little rabbit",
			gender: "n",
			femininity: 0,
			warmth: 0,
			cost: 0,
			description: "挂着恶魔一样笑容的黑色毛绒兔子玩偶。",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			high_img: 0,
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			outfitSecondary: ["over_upper", "poisonous black little rabbit"]
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
			rearresize: 0,
			word: "a",
			one_piece: 1,
			skirt: 1,
			skirt_down: 1,
			zip: 1,
			state: "waist",
			state_base: "waist",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "white",
			exposed: 0,
			exposed_base: 0,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 0,
			anus_exposed_base: 0,
			type: ["cool"],
			set: "verosika waitao",
			gender: "n",
			femininity: 0,
			warmth: 75,
			cost: 0,
			description: "维罗茜卡的毛毛外套",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			high_img: 0,
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			outfitSecondary: ["over_upper", "verosika waitao"]
		},
	
		{
			index: 22,
			name: "rabbit coat skirt",
			name_cap: "rabbit coat skirt", cn_name_cap: "兔子外套",
			variable: "rabbit coat",
			integrity: 800,
			integrity_max: 800,
			fabric_strength: 30,
			reveal: 100,
			rearresize: 0,
			word: "a",
			one_piece: 1,
			skirt: 1,
			skirt_down: 1,
			zip: 1,
			state: "waist",
			state_base: "waist",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "white",
			exposed: 0,
			exposed_base: 0,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 0,
			anus_exposed_base: 0,
			type: ["school", "cool"],
			set: "rabbit coat",
			gender: "n",
			femininity: 0,
			warmth: 75,
			cost: 0,
			description: "爱吃萝卜和青菜。",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			high_img: 0,
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			outfitSecondary: ["over_upper", "rabbit coat"]
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
			rearresize: 0,
			word: "a",
			one_piece: 1,
			skirt: 1,
			skirt_down: 1,
			zip: 1,
			state: "waist",
			state_base: "waist",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "black",
			exposed: 0,
			exposed_base: 0,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 0,
			anus_exposed_base: 0,
			type: ["mask", "costume", "formal"],
			set: "butterflyveil",
			gender: "n",
			femininity: 0,
			warmth: 0,
			cost: 0,
			description: "神秘而优雅。",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			high_img: 0,
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			outfitSecondary: ["over_upper", "butterfly veil"],
		},
	
		 {
			index: 1,
			name: "heisewaida skirt",
			name_cap: "heisewaida skirt", cn_name_cap: "黑色外搭裙",
			variable: "heisewaida",
			integrity: 300,
			integrity_max: 300,
			fabric_strength: 0,
			reveal: 0,
			rearresize: 0,
			word: "a",
			one_piece: 1,
			skirt: 1,
			skirt_down: 1,
			zip: 1,
			state: "waist",
			state_base: "waist",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_combat: "green",
			exposed: 0,
			exposed_base: 0,
			vagina_exposed: 0,
			vagina_exposed_base: 0,
			anus_exposed: 0,
			anus_exposed_base: 0,
			type: ["school"],
			set: "heisewaida",
			gender: "n",
			femininity: 0,
			warmth: 10,
			cost: 0,
			description: "不知道这么穿衣服能不能保暖。",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			high_img: 0,
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			outfitSecondary: ["over_upper", "heisewaida"]
		},
		
		{index: 9,
			name: "fur jacket bottom",
			name_cap: "Fur jacket bottom",
			cn_name_cap: "毛领外套下摆",
			variable: "furjacket",
			integrity_max: 200,
			integrity: 200,
			fabric_strength: 30,
			reveal: 200,
			rearresize: 0,
			word: "a",
			one_piece: 1,
			skirt: 0,
			skirt_down: 0,
			zip: 1,
			state_base: "chest",
			state: "chest",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_sidebar: 0,
			colour_combat: 0,
			exposed_base: 0,
			exposed: 0,
			vagina_exposed_base: 0,
			vagina_exposed: 0,
			anus_exposed_base: 0,
			anus_exposed: 0,
			type: ["normal", "cool"],
			set: "furjacket",
			gender: "n",
			femininity: -200,
			warmth: 75,
			cost: 0,
			description: "毛领外套的下摆。",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			accessory_colour_sidebar: 0,
			back_img: 0,
			back_img_colour: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			mainImage: 0,
			outfitSecondary: ["over_upper","fur jacket"],
		},
	];

	setup.moddedClothes.over_lower.forEach((x, i) => (x.index = setup.clothes.over_lower.length + i));
	setup.clothes.over_lower.push(...setup.moddedClothes.over_lower);
}
window.initOverLower = initOverLower;