////фото рыба
import tartarTunec from './images/tartarTunec.webp'
import tartarRis from './images/tartarRis.webp'
import nigLosos from './images/nigLosos.webp'
import nigMaguro from './images/nigMaguro.webp'
import mentMaguro from './images/mentMaguro.webp'
import mentLosos from './images/mentLosos.webp'
import guncShiso from './images/guncShiso.webp'
import rolMaguro from './images/rolMaguro.webp'
import rolDarado from './images/rolDarado.webp'
import rolTomYam from './images/rolTomYam.webp'
// import rolSaba from './images/rolSaba.webp'
import onigiri from './images/onigiri.webp'
import maguroDomb from './images/maguroDomb.webp'


export const dishes = {
	// station1
	// магуро донбури
	dish101: {
		id: 'dish101',
		name: 'Магуро донбури',
		image: maguroDomb,
		ingredients: [
			{
				name: 'Магуро тунец',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish401',
			},
			{
				name: 'Авокадо',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish901',
			},
			{
				name: 'Томат',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish902',
			},
			{
				name: 'Рис для суши',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Луковое масло',
				weight: 7,
				unit: 'гр',
				isDish: true,
				dishId: 'dish403',
			},
			{
				name: 'Шисо',
				weight: 10,
				unit: 'гр',
			},
			{
				name: 'Цума',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish903',
			},
		],
		preparation: '',
		station: 'station1',
	},
	// тар тар тунец говядина
	dish102: {
		id: 'dish102',
		name: 'Тар тар тунец говядина',
		image: tartarTunec,
		ingredients: [
			{
				name: 'Огурец васаби',
				weight: 25,
				unit: 'гр',
				isDish: true,
				dishId: 'dish404',
			},
			{
				name: 'Говядина тар тар',
				weight: 50,
				unit: 'гр',
				isDish: true,
				dishId: 'dish405',
			},
			{
				name: 'Тунец',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish406',
			},
			{
				name: 'Лук зеленый (в замес)',
				weight: 4,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Лук красивый',
				weight: 4,
				unit: 'гр',
				isDish: true,
				dishId: 'dish#',
			},
			{
				name: 'Горчица зернистая',
				weight: 4,
				unit: 'гр',
			},
			{
				name: 'Лук криспи',
				weight: 4,
				unit: 'гр',
			},
			{
				name: 'Шисо',
				weight: 8,
				unit: 'гр',
			},
			{
				name: 'Масло трюфельное',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Перец черный',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Цума',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish903',
			},
			{
				name: 'Яйцо (желток)',
				weight: 1,
				unit: 'шт',
			},
			{
				name: 'Батат пай',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish407',
			},
			{
				name: 'Пудра нори',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish408',
			},
			{
				name: 'Кунжут шичими',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Васаби',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish409',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// тар тар говядина на рисе
	dish103: {
		id: 'dish103',
		name: 'Тар тар говядина на рисе',
		image: tartarRis,
		ingredients: [
			{
				name: 'Говядина тар тар',
				weight: 50,
				unit: 'гр',
				isDish: true,
				dishId: 'dish405',
			},
			{
				name: 'Рис для суши',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Лук зеленый',
				weight: 4,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Шисо',
				weight: 10,
				unit: 'гр',
			},
			{
				name: 'Перец черный',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Масло трюфельное',
				weight: 3,
				unit: 'гр',
			},
			{
				name: 'Пудра нори',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish408',
			},
			{
				name: 'Красивый лук',
				weight: 4,
				unit: 'гр',
				isDish: true,
				dishId: 'dish905',
			},
			{
				name: 'Шичими',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Кунжут ким чи',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Яйцо (желток)',
				weight: 1,
				unit: 'шт',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// татаки тунец манго
	dish104: {
		id: 'dish104',
		name: 'Татаки тунец манго',
		image: '',
		ingredients: [
			{
				name: 'Тунец татаки',
				weight: 70,
				unit: 'гр',
				isDish: true,
				dishId: 'dish410',
			},
			{
				name: 'Манго',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish906',
			},
			{
				name: 'Томат',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish902',
			},
			{
				name: 'Красный лук',
				weight: 7,
				unit: 'гр',
				isDish: true,
				dishId: 'dish907',
			},
			{
				name: 'Соус понзу',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish411',
			},
			{
				name: 'Оливковое масло',
				weight: 6,
				unit: 'гр',
			},
			{
				name: 'Микро редис',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Бобы эдамаме',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish908',
			},
			{
				name: 'Редис',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish909',
			},
			{
				name: 'Цума',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish903',
			},
			{
				name: 'Шичими',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Цветы',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Кунжут ким чи',
				weight: 1,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// нигири дорадо
	dish105: {
		id: 'dish105',
		name: 'Нигири дорадо',
		image: '',
		ingredients: [
			{
				name: 'Дорадо',
				weight: 36,
				unit: 'гр',
				isDish: true,
				dishId: 'dish412',
			},
			{
				name: 'Рис для суши',
				weight: 36,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Соус тоса',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish413',
			},
			{
				name: 'Имбирь марин',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Васаби',
				weight: 4,
				unit: 'гр',
				isDish: true,
				dishId: 'dish409',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// нигири лосось
	dish106: {
		id: 'dish106',
		name: 'Нигири лосось',
		image: nigLosos,
		ingredients: [
			{
				name: 'Лосось',
				weight: 36,
				unit: 'гр',
				isDish: true,
				dishId: 'dish910',
			},
			{
				name: 'Рис для суши',
				weight: 36,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Соус тоса',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish413',
			},
			{
				name: 'Имбирь марин',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Васаби',
				weight: 4,
				unit: 'гр',
				isDish: true,
				dishId: 'dish409',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// ментайко лосось
	dish107: {
		id: 'dish107',
		name: 'Ментайко лосось',
		image: mentLosos,
		ingredients: [
			{
				name: 'Лосось',
				weight: 36,
				unit: 'гр',
				isDish: true,
				dishId: 'dish910',
			},
			{
				name: 'Рис для суши',
				weight: 36,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Соус кэвиар',
				weight: 15,
				unit: 'гр',
				isDish: true,
				dishId: 'dish414',
			},
			{
				name: 'Лук красивый',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish905',
			},
			{
				name: 'Рисовый шарики',
				weight: 2,
				unit: 'гр',
			},
			{
				name: 'Имбирь марин',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Васаби',
				weight: 4,
				unit: 'гр',
				isDish: true,
				dishId: 'dish409',
			},
			{
				name: 'Цветок',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Кунжут ким чи',
				weight: 1,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// ментайко дорадо
	dish108: {
		id: 'dish108',
		name: 'Ментайко дорадо',
		image: mentLosos,
		ingredients: [
			{
				name: 'Дорадо',
				weight: 36,
				unit: 'гр',
				isDish: true,
				dishId: 'dish412',
			},
			{
				name: 'Рис для суши',
				weight: 36,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Соус кэвиар',
				weight: 15,
				unit: 'гр',
				isDish: true,
				dishId: 'dish414',
			},
			{
				name: 'Лук красивый',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish905',
			},
			{
				name: 'Рисовый шарики',
				weight: 2,
				unit: 'гр',
			},
			{
				name: 'Имбирь марин',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Васаби',
				weight: 4,
				unit: 'гр',
				isDish: true,
				dishId: 'dish409',
			},
			{
				name: 'Цветок',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Кунжут ким чи',
				weight: 1,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// ментайко магуро
	dish109: {
		id: 'dish109',
		name: 'Ментайко магуро',
		image: mentMaguro,
		ingredients: [
			{
				name: 'Магуро тунец',
				weight: 36,
				unit: 'гр',
				isDish: true,
				dishId: 'dish401',
			},
			{
				name: 'Рис для суши',
				weight: 36,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Соус кэвиар',
				weight: 15,
				unit: 'гр',
				isDish: true,
				dishId: 'dish414',
			},
			{
				name: 'Лук красивый',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish905',
			},
			{
				name: 'Рисовый шарики',
				weight: 2,
				unit: 'гр',
			},
			{
				name: 'Имбирь марин',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Васаби',
				weight: 4,
				unit: 'гр',
				isDish: true,
				dishId: 'dish409',
			},
			{
				name: 'Цветок',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Кунжут ким чи',
				weight: 1,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// нигири магуро дзуке
	dish110: {
		id: 'dish110',
		name: 'Нигири магуро дзуке',
		image: nigMaguro,
		ingredients: [
			{
				name: 'Магуро тунец',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish401',
			},
			{
				name: 'Рис для суши',
				weight: 36,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Соус шисо',
				weight: 2,
				unit: 'гр',
			},
			{
				name: 'Сальса чили',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish415',
			},
			{
				name: 'Имбирь марин',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Васаби',
				weight: 4,
				unit: 'гр',
				isDish: true,
				dishId: 'dish409',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// онигири лосось унаги майо
	dish111: {
		id: 'dish111',
		name: 'Онигири лосось унаги майо',
		image: onigiri,
		ingredients: [
			{
				name: 'Рис для суши',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Лосось копчен',
				weight: 25,
				unit: 'гр',
				isDish: true,
				dishId: 'dish416',
			},
			{
				name: 'Лук зеленый',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Майонез японск',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Соль',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Шичими',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Кунжут ким чи',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Нори',
				weight: 0.25,
				unit: 'шт',
			},
			{
				name: 'Соус для онигири',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish417',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// онигири тунец неги майо
	dish112: {
		id: 'dish112',
		name: 'Онигири тунец неги майо',
		image: onigiri,
		ingredients: [
			{
				name: 'Рис для суши',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Тунец',
				weight: 25,
				unit: 'гр',
				isDish: true,
				dishId: 'dish406',
			},
			{
				name: 'Лук зеленый',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Майонез японск',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Соль',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Шичими',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Кунжут кимчи',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Нори',
				weight: 0.25,
				unit: 'шт',
			},
			{
				name: 'Соус для онигири',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish417',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// онигири лосось понзу васаби
	dish113: {
		id: 'dish113',
		name: 'Онигири лосось понзу васаби',
		image: onigiri,
		ingredients: [
			{
				name: 'Рис для суши',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Лосось',
				weight: 25,
				unit: 'гр',
				isDish: true,
				dishId: 'dish910',
			},
			{
				name: 'Васаби',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish#',
			},
			{
				name: 'Соус понзу',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish411',
			},
			{
				name: 'Шичими',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Кунжут ким чи',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Нори',
				weight: 0.25,
				unit: 'шт',
			},
			{
				name: 'Соус для онигири',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish417',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// онигири тунец ментайко
	dish114: {
		id: 'dish114',
		name: 'Онигири тунец ментайко',
		image: onigiri,
		ingredients: [
			{
				name: 'Рис для суши',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Тунец магуро',
				weight: 25,
				unit: 'гр',
				isDish: true,
				dishId: 'dish401',
			},
			{
				name: 'Соус кэвиар',
				weight: 7,
				unit: 'гр',
				isDish: true,
				dishId: 'dish414',
			},
			{
				name: 'Шичими',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Кунжут кимчи',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Нори',
				weight: 0.25,
				unit: 'шт',
			},
			{
				name: 'Соус для онигири',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish417',
			},
		],
		preparation: '',
		station: 'station1',
	},
	// набор онигири
	dish115: {
		id: 'dish115',
		name: 'Набор онигири',
		image: '',
		ingredients: [
			{
				name: 'Онигири лосось унаги майо',
				weight: 1,
				unit: 'шт',
				isDish: true,
				dishId: 'dish111',
			},
			{
				name: 'Онигири лосось понзу васаби',
				weight: 1,
				unit: 'шт',
				isDish: true,
				dishId: 'dish113',
			},
			{
				name: 'Онигири тунец ментайко',
				weight: 1,
				unit: 'шт',
				isDish: true,
				dishId: 'dish114',
			},
			{
				name: 'Онигири тунец неги майо',
				weight: 1,
				unit: 'шт',
				isDish: true,
				dishId: 'dish112',
			},
			{
				name: 'Соус для онигири',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish417',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// гункан лосось шисо
	dish116: {
		id: 'dish116',
		name: 'Гункан лосось шисо',
		image: guncShiso,
		ingredients: [
			{
				name: 'Рис для суши',
				weight: 36,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Лосось',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish910',
			},
			{
				name: 'Соус шисо',
				weight: 3,
				unit: 'гр',
			},
			{
				name: 'Майонез японск',
				weight: 6,
				unit: 'гр',
			},
			{
				name: 'Соль',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Кунжут кимчи',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Красивый лук',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish907',
			},
			{
				name: 'Имбирь марин',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Васаби',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish409',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// магуро-дзуке
	dish117: {
		id: 'dish117',
		name: 'Магуро дзуке',
		image: rolMaguro,
		ingredients: [
			{
				name: 'Рис для суши',
				weight: 120,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Нори',
				weight: 0.5,
				unit: 'шт',
			},
			{
				name: 'Авокадо',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish901',
			},
			{
				name: 'Огурец соломка',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish911',
			},
			{
				name: 'Манго',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish906',
			},
			{
				name: 'Магуро тунец',
				weight: 70,
				unit: 'гр',
				isDish: true,
				dishId: 'dish401',
			},
			{
				name: 'Имбирь марин',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Васаби',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish409',
			},
			{
				name: 'Сальса чили',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish415',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// дорадо кабузиме
	dish125: {
		id: 'dish125',
		name: 'Дорадо кабузиме',
		image: rolDarado,
		ingredients: [
			{
				name: 'Рис для суши',
				weight: 120,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'нори',
				weight: 0.5,
				unit: 'шт',
			},
			{
				name: 'Авокадо',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish901',
			},
			{
				name: 'Лосось в кляре',
				weight: 25,
				unit: 'гр',
				isDish: true,
				dishId: 'dish429',
			},
			{
				name: 'Дорадо',
				weight: 70,
				unit: 'гр',
				isDish: true,
				dishId: 'dish412',
			},
			{
				name: 'Соус тоса',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish413',
			},
			{
				name: 'Имбирь марин',
				weight: 7,
				unit: 'гр',
			},
			{
				name: 'Васаби',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish409',
			},
			{
				name: 'Микроредис',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Шичими',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Кунжут ким чи',
				weight: 1,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// том ям никей
	dish118: {
		id: 'dish118',
		name: 'Том ям никей',
		image: rolTomYam,
		ingredients: [
			{
				name: 'Рис для суши',
				weight: 120,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Нори',
				weight: 0.5,
				unit: 'шт',
			},
			{
				name: 'Огурец соломка',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish911',
			},
			{
				name: 'Креветка темпура',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish418',
			},
			{
				name: 'Лосось',
				weight: 65,
				unit: 'гр',
				isDish: true,
				dishId: 'dish910',
			},
			{
				name: 'Имбирь марин',
				weight: 7,
				unit: 'гр',
			},
			{
				name: 'Васаби',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish409',
			},
			{
				name: 'Соус том ям',
				weight: 70,
				unit: 'гр',
				isDish: true,
				dishId: 'dish419',
			},
			{
				name: 'Микро кинза',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Шарики рисовые',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Кунжут кимчи',
				weight: 1,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// виттелло на рисе
	dish119: {
		id: 'dish119',
		name: 'Виттелло на рисе',
		image: '',
		ingredients: [
			{
				name: 'Говядина гюкоцу',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish420',
			},
			{
				name: 'Рис для суши',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Соус виттело',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish421',
			},
			{
				name: 'Кунжут кимчи',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Нити чили',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Масло чили',
				weight: 4,
				unit: 'гр',
				isDish: true,
				dishId: 'dish422',
			},
			{
				name: 'Лук красивый',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish905',
			},
			{
				name: 'Соус демигляс',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish423',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// хумус эдамаме тунец
	dish120: {
		id: 'dish120',
		name: 'Хумус эдамаме тунец',
		image: '',
		ingredients: [
			{
				name: 'Хумус эдамаме',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish424',
			},
			{
				name: 'Тунец',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish406',
			},
			{
				name: 'Соус уши',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish425',
			},
			{
				name: 'Масло чили',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish422',
			},
			{
				name: 'Нори суши',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Кунжут ким чи',
				weight: 1,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// зеленый салат казок
	dish121: {
		id: 'dish121',
		name: 'Зеленый салат казоку',
		image: '',
		ingredients: [
			{
				name: 'Огурец свежий',
				weight: 50,
				unit: 'гр',
				isDish: true,
				dishId: 'dish912',
			},
			{
				name: 'Киви',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish913',
			},
			{
				name: 'Авокадо',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish901',
			},
			{
				name: 'Ромейн',
				weight: 50,
				unit: 'гр',
				isDish: true,
				dishId: 'dish914',
			},
			{
				name: 'Брокколи свеж',
				weight: 40,
				unit: 'гр',
			},
			{
				name: 'Шисо песто',
				weight: 50,
				unit: 'гр',
				isDish: true,
				dishId: 'dish426',
			},
			{
				name: 'Кинза микро',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Шпинат свеж',
				weight: 10,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// свиные уши
	dish122: {
		id: 'dish122',
		name: 'Свиные уши',
		image: '',
		ingredients: [
			{
				name: 'Уши',
				weight: 120,
				unit: 'гр',
				isDish: true,
				dishId: 'dish427',
			},
			{
				name: 'Огурец битый',
				weight: 50,
				unit: 'гр',
				isDish: true,
				dishId: 'dish428',
			},
			{
				name: 'Лук красный',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish907',
			},
			{
				name: 'Соус уши',
				weight: 35,
				unit: 'гр',
				isDish: true,
				dishId: 'dish425',
			},
			{
				name: 'Чили перец',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish#',
			},
			{
				name: 'Арахис',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish916',
			},
			{
				name: 'Лук красивый',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish905',
			},
			{
				name: 'Микро кинза',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Кунжут ч/б',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// гункан лосось на курин сет
	dish123: {
		id: 'dish123',
		name: 'Гункан лосось на курин сет',
		image: '',
		ingredients: [
			{
				name: 'Рис для суши',
				weight: 18,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Лосось копчен',
				weight: 15,
				unit: 'гр',
				isDish: true,
				dishId: 'dish416',
			},
			{
				name: 'Лук зеленый',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Майонез японск',
				weight: 3,
				unit: 'гр',
			},
			{
				name: 'Кунжут ким чи',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Нори',
				weight: 0.2,
				unit: 'шт',
			},
			{
				name: 'Васаби',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish409',
			},
		],
		preparation: '',
		station: 'station1',
	},

	// Гункан тунец на говяжий сет
	dish124: {
		id: 'dish124',
		name: 'Гункан тунец на говяжий сет',
		image: '',
		ingredients: [
			{
				name: 'Рис для суши',
				weight: 18,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Тунец',
				weight: 15,
				unit: 'гр',
				isDish: true,
				dishId: 'dish406',
			},
			{
				name: 'Лук зеленый',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Майонез японск',
				weight: 3,
				unit: 'гр',
			},
			{
				name: 'Кунжут ким чи',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Нори',
				weight: 0.2,
				unit: 'шт',
			},
			{
				name: 'Васаби',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish409',
			},
		],
		preparation: '',
		station: 'station1',
	},
	// station2 /////////////////////////////////////
	// удон buddha noodles
	dish201: {
		id: 'dish201',
		name: 'Удон buddha noodles',
		image: '',
		ingredients: [
			{
				name: 'Лапша удон',
				weight: 120,
				unit: 'гр',
			},
			{
				name: 'Курица бедро',
				weight: 50,
				unit: 'гр',
				isDish: true,
				dishId: 'dish481',
			},
			{
				name: 'Болгарский перец',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish939',
			},
			{
				name: 'Лук красный',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish907',
			},
			{ name: 'Фасоль стручковая с/м', weight: 20, unit: 'гр' },
			{ name: 'Паста арахисовая', weight: 20, unit: 'гр' },
			{ name: 'Уксус рисовый', weight: 5, unit: 'гр' },
			{ name: 'Сахарный песок', weight: 3, unit: 'гр' },
			{ name: 'Устречный соус', weight: 10, unit: 'гр' },
			{ name: 'Соевый соус just', weight: 5, unit: 'гр' },
			{ name: 'Вода', weight: 20, unit: 'гр' },
		],
		preparation: '',
		station: 'station2',
	},

	// нанбан сандо
	dish202: {
		id: 'dish202',
		name: 'Нанбан сандо',
		image: '',
		ingredients: [
			{ name: 'Бриошь', weight: 100, unit: 'гр' },
			{
				name: 'Бедро курин',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish481',
			},
			{ name: 'Мука', weight: 10, unit: 'гр' },
			{ name: 'Кляр', weight: 20, unit: 'гр' },
			{
				name: 'Соус нанбан',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish485',
			},
			{
				name: 'Соус якисоба',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish468',
			},
			{
				name: 'Лук зеленый',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// нанбан тори
	dish203: {
		id: 'dish203',
		name: 'Нанбан тори',
		image: '',
		ingredients: [
			{
				name: 'Курица бедро',
				weight: 70,
				unit: 'гр',
				isDish: true,
				dishId: 'dish481',
			},
			{
				name: 'Кляр',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish474',
			},
			{ name: 'Мука', weight: 10, unit: 'гр' },
			{ name: 'Капуста б/к', weight: 30, unit: 'гр' },
			{ name: 'Шисо понзу (соевый ауджисо)', weight: 10, unit: 'гр' },
			{
				name: 'Соус нанбан',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish485',
			},
			{
				name: 'Соус якисоба',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish468',
			},
			{
				name: 'Лук зеленый',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// креветки темпура
	dish204: {
		id: 'dish204',
		name: 'Креветки темпура',
		image: '',
		ingredients: [
			{
				name: 'Креветки',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish940',
			},
			{
				name: 'Капуста б/к',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish941',
			},
			{
				name: 'Цума',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish903',
			},
			{ name: 'Соус аоджисо', weight: 10, unit: 'гр' },
			{
				name: 'Соус тай',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish456',
			},
			{
				name: 'Кунжут ч/б',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// гёдза свинина-креветка
	dish205: {
		id: 'dish205',
		name: 'Гёдза свинина-креветка',
		image: '',
		ingredients: [
			{
				name: 'Гёдза',
				weight: 5,
				unit: 'шт',
				isDish: true,
				dishId: 'dish475',
			},
			{
				name: 'Соус гёдза свин-креветка',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish464',
			},
			{
				name: 'Слури на гёдза',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish467',
			},
			{
				name: 'Зелёный лук',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// кокосовый бык сандо
	dish206: {
		id: 'dish206',
		name: 'Кокосовый бык сандо',
		image: '',
		ingredients: [
			{ name: 'Бриошь', weight: 100, unit: 'гр' },
			{
				name: 'Соус демигляс',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish465',
			},
			{
				name: 'Говядина кокосовый бык',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish488',
			},
			{
				name: 'Соус мисо майо',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish486',
			},
			{
				name: 'Соус якисоба',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish468',
			},
			{
				name: 'Лук зеленый',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// гарниш
	dish489: {
		id: 'dish489',
		name: 'Гарниш',
		image: '',
		ingredients: [
			{ name: 'Броккли свеж', weight: 12, unit: 'гр' },
			{ name: 'Шрирача', weight: 3, unit: 'гр' },
			{
				name: 'Батат фри',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish407',
			},
			{
				name: 'Лук зеленый',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{ name: 'Кунжут кимчи', weight: 1, unit: 'гр' },
			{
				name: 'Арахис',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish916',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// баклажаны закуска
	dish490: {
		id: 'dish490',
		name: 'Баклажаны закуска',
		image: '',
		ingredients: [
			{
				name: 'Баклажаны',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish942',
			},
			{ name: 'Кляр', weight: 30, unit: 'гр', isDish: true, dishId: 'dish474' },
			{ name: 'Крахмал', weight: 35, unit: 'гр' },
			{
				name: 'Соус тай',
				weight: 35,
				unit: 'гр',
				isDish: true,
				dishId: 'dish456',
			},
			{
				name: 'Эспума',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish466',
			},
			{
				name: 'Лук зеленый',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
			{ name: 'Пудра нори', weight: 1, unit: 'гр' },
		],
		preparation: '',
		station: 'station2',
	},

	// огурцы кимчи
	dish207: {
		id: 'dish207',
		name: 'Огурцы кимчи',
		image: '',
		ingredients: [
			{
				name: 'Огурцы марин',
				weight: 130,
				unit: 'гр',
				isDish: true,
				dishId: 'dish479',
			},
			{ name: 'Шичими', weight: 1, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// эдамаме с солью
	dish208: {
		id: 'dish208',
		name: 'Эдамаме с солью',
		image: '',
		ingredients: [
			{ name: 'Эдамаме', weight: 150, unit: 'гр' },
			{ name: 'Соль', weight: 2, unit: 'гр' },
		],
		preparation: '',
		station: 'station2',
	},

	// грибной микс
	dish209: {
		id: 'dish209',
		name: 'Грибной микс',
		image: '',
		ingredients: [
			{
				name: 'Моэр марин',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish473',
			},
			{
				name: 'Вешенки марин',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish483',
			},
			{
				name: 'Лук зеленый красивый',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish905',
			},
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
			{ name: 'Шичими', weight: 1, unit: 'гр' },
		],
		preparation: '',
		station: 'station2',
	},

	// капуста кимчи
	dish210: {
		id: 'dish210',
		name: 'Капуста кимчи',
		image: '',
		ingredients: [
			{ name: 'Капуста ким чи', weight: 130, unit: 'гр' },
			{ name: 'Лук зелёный', weight: 2, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// чука
	dish211: {
		id: 'dish211',
		name: 'Чука',
		image: '',
		ingredients: [
			{ name: 'Чука', weight: 130, unit: 'гр' },
			{ name: 'Ореховый соус', weight: 2, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// гёдза лосось-шиитаке
	dish212: {
		id: 'dish212',
		name: 'Гёдза лосось-шиитаке',
		image: '',
		ingredients: [
			{
				name: 'Гёдза лосось-шиитаке',
				weight: 5,
				unit: 'шт',
				isDish: true,
				dishId: 'dish470',
			},
			{
				name: 'Соус сливочный унаги',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish469',
			},
			{
				name: 'Слури на гёдза',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish467',
			},
			{
				name: 'Лук зеленый',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{ name: 'Острое масло', weight: 1, unit: 'гр' },
		],
		preparation: '',
		station: 'station2',
	},

	// маринад микс
	dish213: {
		id: 'dish213',
		name: 'Маринад микс',
		image: '',
		ingredients: [
			{
				name: 'Моэр марин',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish473',
			},
			{
				name: 'Вешенки маринованные',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish483',
			},
			{
				name: 'Огурцы кимчи',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish479',
			},
			{ name: 'Ким чи капуста', weight: 40, unit: 'гр' },
			{ name: 'Шичими', weight: 1, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station2',
	},
	// микс грибов темпура
	dish214: {
		id: 'dish214',
		name: 'Микс грибов темпура',
		image: '',
		ingredients: [
			{
				name: 'Шиитаке марин',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish480',
			},
			{
				name: 'Вешенки марин',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish483',
			},
			{
				name: 'Сливочный унаги',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish469',
			},
			{ name: 'Кляр', weight: 10, unit: 'гр', isDish: true, dishId: 'dish474' },
			{ name: 'мука', weight: 2, unit: 'гр' },
			{
				name: 'Комбу в кляре',
				weight: 2,
				unit: 'шт',
				isDish: true,
				dishId: 'dish491',
			},
			{
				name: 'Лук зеленый',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{ name: 'Пудра нори', weight: 1, unit: 'гр' },
		],
		preparation: '',
		station: 'station2',
	},

	// лосось терияки донбури
	dish312: {
		id: 'dish312',
		name: 'Лосось терияки донбури',
		image: '',
		ingredients: [
			{
				name: 'Лосось',
				weight: 70,
				unit: 'гр',
				isDish: true,
				dishId: 'dish910',
			},
			{
				name: 'Соус терияки',
				weight: 50,
				unit: 'гр',
				isDish: true,
				dishId: 'dish462',
			},
			{
				name: 'Рис для суши',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Мисо суп',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish477',
			},
			{ name: 'Шичими', weight: 1, unit: 'гр' },
			{
				name: 'Лук зеленый красивый',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish905',
			},
			{ name: 'Кунжутное масло', weight: 2, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
			{
				name: 'Лук зеленый',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// тясюдон
	dish215: {
		id: 'dish215',
		name: 'Тясюдон',
		image: '',
		ingredients: [
			{
				name: 'Рис для суши',
				weight: 130,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Чашу',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish451',
			},
			{
				name: 'Маринад на чашу',
				weight: 50,
				unit: 'гр',
				isDish: true,
				dishId: 'dish482',
			},
			{ name: 'Микрокинза', weight: 1, unit: 'гр' },
			{
				name: 'Лук зеленый',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{ name: 'Шичими', weight: 1, unit: 'гр' },
			{ name: 'Кунжут ким чи', weight: 1, unit: 'гр' },
		],
		preparation: '',
		station: 'station2',
	},

	// удон морепродукты
	dish216: {
		id: 'dish216',
		name: 'Удон морепродукты',
		image: '',
		ingredients: [
			{ name: 'Удон лапша', weight: 110, unit: 'гр' },
			{
				name: 'Креветки',
				weight: 55,
				unit: 'гр',
				isDish: true,
				dishId: 'dish940',
			},
			{
				name: 'Кальмар',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish943',
			},
			{
				name: 'Шиитаке',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish930',
			},
			{
				name: 'Фасоль стручковая',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish944',
			},
			{
				name: 'Лук красный',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish907',
			},
			{
				name: 'Соус удон море',
				weight: 100,
				unit: 'гр',
				isDish: true,
				dishId: 'dish460',
			},
			{
				name: 'Арахис',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish916',
			},
			{ name: 'Чили перец', weight: 2, unit: 'гр' },
			{ name: 'Микро кинза', weight: 1, unit: 'гр' },
			{
				name: 'Зеленый лук',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// карааге курица
	dish217: {
		id: 'dish217',
		name: 'Карааге курица',
		image: '',
		ingredients: [
			{
				name: 'Кура бедро',
				weight: 120,
				unit: 'гр',
				isDish: true,
				dishId: 'dish481',
			},
			{ name: 'Кляр', weight: 40, unit: 'гр', isDish: true, dishId: 'dish474' },
			{
				name: 'Смесь для карааге',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish478',
			},
			{
				name: 'Соус спайси майо',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish458',
			},
			{
				name: 'Соус якисоба',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish468',
			},
			{
				name: 'Лук зеленый',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
			{
				name: 'Лимон',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish945',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// гюдон
	dish218: {
		id: 'dish218',
		name: 'Гюдон',
		image: '',
		ingredients: [
			{
				name: 'Рис для суши',
				weight: 130,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Говядина васаби',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish484',
			},
			{ name: 'Жир от мозговой кости', weight: 10, unit: 'гр' },
			{
				name: 'Соус демиглас',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish465',
			},
			{ name: 'Яйцо кур (желток)', weight: 1, unit: 'шт' },
			{
				name: 'Лук зеленый',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{ name: 'Кунжут кимчи', weight: 1, unit: 'гр' },
		],
		preparation: '',
		station: 'station2',
	},

	// удон курица
	dish219: {
		id: 'dish219',
		name: 'Удон курица',
		image: '',
		ingredients: [
			{ name: 'Удон лапша', weight: 110, unit: 'гр' },
			{
				name: 'Кура бедро',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish481',
			},
			{
				name: 'Перец болгарский',
				weight: 15,
				unit: 'гр',
				isDish: true,
				dishId: 'dish939',
			},
			{
				name: 'Сельдерей',
				weight: 15,
				unit: 'гр',
				isDish: true,
				dishId: 'dish946',
			},
			{
				name: 'Шиитаке',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish930',
			},
			{
				name: 'Моэр',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish931',
			},
			{
				name: 'Фасоль стручковая',
				weight: 15,
				unit: 'гр',
				isDish: true,
				dishId: 'dish944',
			},
			{
				name: 'Лук порей',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish932',
			},
			{
				name: 'Лук репчатый',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish925',
			},
			{
				name: 'Соус удон кура',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish455',
			},
			{
				name: 'Зеленый лук',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
			{
				name: 'Пудра нори',
				weight: 1,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// сливочный удон
	dish220: {
		id: 'dish220',
		name: 'Сливочный удон',
		image: '',
		ingredients: [
			{ name: 'Удон лапша', weight: 110, unit: 'гр' },
			{
				name: 'Креветки',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish940',
			},
			{ name: 'Цветная капуста', weight: 30, unit: 'гр' },
			{
				name: 'Кальмар',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish943',
			},
			{ name: 'Кукуруза консер', weight: 30, unit: 'гр' },
			{
				name: 'Соус удон сливочный',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish457',
			},
			{
				name: 'Яйцо (желток)',
				weight: 1,
				unit: 'шт',
			},
			{ name: 'Стружка тунца', weight: 2, unit: 'гр' },
			{ name: 'Микро редис', weight: 1, unit: 'гр' },
			{ name: 'Кунжут кимчи', weight: 1, unit: 'гр' },
			{
				name: 'Зеленый лук',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
		],
		preparation: '',
		station: 'station2',
	},
	// Пад тай
	dish221: {
		id: 'dish221',
		name: 'Пад тай',
		image: '',
		ingredients: [
			{
				name: 'Лапша рисовая',
				weight: 150,
				unit: 'гр',
				isDish: true,
				dishId: 'dish492',
			},
			{
				name: 'Креветки',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish940',
			},
			{
				name: 'Кура бедро',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish481',
			},
			{
				name: 'Соус пад тай',
				weight: 50,
				unit: 'гр',
				isDish: true,
				dishId: 'dish461',
			},
			{
				name: 'Лук красный',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish907',
			},
			{ name: 'Тофу', weight: 20, unit: 'гр' },
			{
				name: 'Томаты черри',
				weight: 30,
				unit: 'гр',
			},
			{ name: 'Лайм', weight: 20, unit: 'гр' },
			{
				name: 'Арахис',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish916',
			},
			{
				name: 'Зеленый лук',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{ name: 'Микрокинза', weight: 1, unit: 'гр' },
		],
		preparation: '',
		station: 'station2',
	},

	// Рисовая лапша в стиле том ям
	dish222: {
		id: 'dish222',
		name: 'Рисовая лапша в стиле том ям',
		image: '',
		ingredients: [
			{
				name: 'Лапша рисовая',
				weight: 150,
				unit: 'гр',
				isDish: true,
				dishId: 'dish492',
			},
			{
				name: 'Креветки',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish940',
			},
			{
				name: 'Кальмар',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish943',
			},
			{
				name: 'Шиитаке',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish930',
			},
			{
				name: 'Соус удон море',
				weight: 65,
				unit: 'гр',
				isDish: true,
				dishId: 'dish460',
			},
			{
				name: 'Лук красный',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish907',
			},
			{ name: 'Кокосовое молоко', weight: 35, unit: 'мл' },
			{ name: 'Рыбный соус', weight: 7, unit: 'мл' },
			{ name: 'Лайм', weight: 20, unit: 'гр' },
			{
				name: 'Томаты черри',
				weight: 30,
				unit: 'гр',
			},
			{ name: 'Кунжут ким чи', weight: 1, unit: 'гр' },
			{ name: 'Рисовые шарики', weight: 1, unit: 'гр' },
			{ name: 'Микрокинза', weight: 1, unit: 'гр' },
		],
		preparation: '',
		station: 'station2',
	},

	// Торикау рис
	dish313: {
		id: 'dish313',
		name: 'Торикау рис',
		image: '',
		ingredients: [
			{
				name: 'Рис для суши',
				weight: 110,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Курица котлета в панировке',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish452',
			},
			{
				name: 'Соус карри',
				weight: 130,
				unit: 'гр',
				isDish: true,
				dishId: 'dish459',
			},
			{
				name: 'Соус якисоба',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish468',
			},
			{
				name: 'Луковое масло',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish403',
			},
			{ name: 'Имбирь маринованный', weight: 2, unit: 'гр' },
			{
				name: 'Лук зеленый',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// Торикау удон
	dish314: {
		id: 'dish314',
		name: 'Торикау удон',
		image: '',
		ingredients: [
			{
				name: 'Удон',
				weight: 110,
				unit: 'гр',
			},
			{
				name: 'Курица котлета в панировке',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish452',
			},
			{
				name: 'Соус карри',
				weight: 130,
				unit: 'гр',
				isDish: true,
				dishId: 'dish459',
			},
			{
				name: 'Соус якисоба',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish468',
			},
			{
				name: 'Луковое масло',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish403',
			},
			{ name: 'Имбирь маринованный', weight: 2, unit: 'гр' },
			{
				name: 'Лук зеленый',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// Омурайсу
	dish315: {
		id: 'dish315',
		name: 'Омурайсу',
		image: '',
		ingredients: [
			{
				name: 'Рис для суши',
				weight: 130,
				unit: 'гр',
				isDish: true,
				dishId: 'dish402',
			},
			{
				name: 'Кура бедро',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish481',
			},
			{
				name: 'Перец болгарский',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish939',
			},
			{
				name: 'Сельдерей',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish946',
			},
			{
				name: 'Шиитаке',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish930',
			},
			{
				name: 'Фасоль стручковая',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish944',
			},
			{
				name: 'Лук красный',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish907',
			},
			{
				name: 'Соус якисоба',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish468',
			},
			{
				name: 'Соус демиглас',
				weight: 35,
				unit: 'гр',
				isDish: true,
				dishId: 'dish465',
			},
			{ name: 'Яйцо', weight: 2, unit: 'шт' },
			{ name: 'Мирин', weight: 4, unit: 'мл' },
			{ name: 'Соль', weight: 2, unit: 'гр' },
			{ name: 'Сахар', weight: 2, unit: 'гр' },
			{ name: 'Хондаши', weight: 1, unit: 'гр' },
			{ name: 'Шичими', weight: 1, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
			{
				name: 'Зеленый лук',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
		],
		preparation: '',
		station: 'station2',
	},
	// station3 /////////////////////////////////////
	// Рамен сырный BIG
	dish302: {
		id: 'dish302',
		name: 'Рамен сырный',
		image: '',
		ingredients: [
			{ name: 'лапша рамен', weight: 120, unit: 'гр' },
			{
				name: 'Бульон сырный',
				weight: 340,
				unit: 'гр',
				isDish: true,
				dishId: 'dish440',
			},
			{
				name: 'Брискет',
				weight: 40,
				unit: 'гр',
			},
			{
				name: 'Яйцо маринованое',
				weight: 1,
				unit: 'шт',
				isDish: true,
				dishId: 'dish450',
			},
			{
				name: 'Лук зеленый',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{ name: 'Попкорн', weight: 20, unit: 'гр' },
			{
				name: 'Масло луковое',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish433',
			},
			{
				name: 'Масло острое',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish422',
			},
			{
				name: 'Абура',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish439',
			},
			{ name: 'Шичими', weight: 1, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station3',
	},

	// Рамен сырный Baby
	dish301: {
		id: 'dish301',
		name: 'Рамен сырный baby',
		image: '',
		ingredients: [
			{ name: 'Лапша рамен', weight: 70, unit: 'гр' },
			{
				name: 'Бульон сырный',
				weight: 200,
				unit: 'гр',
				isDish: true,
				dishId: 'dish440',
			},
			{ name: 'Брискет', weight: 20, unit: 'гр' },
			{
				name: 'Яйцо маринованое',
				weight: 0.5,
				unit: 'шт',
				isDish: true,
				dishId: 'dish450',
			},
			{
				name: 'Лук зеленый',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{ name: 'Попкорн', weight: 10, unit: 'гр' },
			{
				name: 'Масло луковое',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish433',
			},
			{
				name: 'Масло острое',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish422',
			},
			{
				name: 'Абура',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish439',
			},
			{ name: 'Шичими', weight: 1, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station3',
	},

	// Рамен тонкоцу BIG
	dish303: {
		id: 'dish303',
		name: 'Рамен тонкоцу',
		image: '',
		ingredients: [
			{ name: 'Лапша рамен', weight: 120, unit: 'гр' },
			{
				name: 'Бульон тонкоцу',
				weight: 340,
				unit: 'гр',
				isDish: true,
				dishId: 'dish444',
			},
			{
				name: 'Свинина чашу',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish451',
			},
			{
				name: 'Лотос маринованый',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish435',
			},
			{ name: 'Капуста кимчи', weight: 18, unit: 'гр' },
			{
				name: 'Яйцо маринованое',
				weight: 1,
				unit: 'шт',
				isDish: true,
				dishId: 'dish450',
			},
			{ name: 'Кукуруза консер', weight: 20, unit: 'гр' },
			{
				name: 'Лук зеленый',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{ name: 'Масло трюфель', weight: 5, unit: 'гр' },
			{
				name: 'Масло луковое',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish433',
			},
			{
				name: 'Масло острое',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish422',
			},
			{ name: 'Лист нори', weight: 0.25, unit: 'шт' },
			{
				name: 'Абура',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish439',
			},
			{ name: 'Шичими', weight: 1, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station3',
	},

	// Рамен тонкоцу Baby
	dish3043: {
		id: 'dish304',
		name: 'Рамен тонкоцу baby',
		image: '',
		ingredients: [
			{ name: 'Лапша рамен', weight: 70, unit: 'гр' },
			{
				name: 'Бульон тонкоцу',
				weight: 200,
				unit: 'гр',
				isDish: true,
				dishId: 'dish444',
			},
			{
				name: 'Свинина чашу',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish451',
			},
			{
				name: 'Лотос',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish435',
			},
			{ name: 'Капуста кимчи', weight: 12, unit: 'гр' },
			{
				name: 'Яйцо маринованое',
				weight: 0.5,
				unit: 'шт',
				isDish: true,
				dishId: 'dish450',
			},
			{ name: 'Кукуруза консер', weight: 10, unit: 'гр' },
			{
				name: 'Лук зеленый',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{ name: 'Масло трюфель', weight: 3, unit: 'гр' },
			{
				name: 'Масло луковое',
				weight: 7,
				unit: 'гр',
				isDish: true,
				dishId: 'dish433',
			},
			{
				name: 'Масло острое',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish422',
			},
			{ name: 'Лист нори', weight: 0.125, unit: 'шт' },
			{
				name: 'Абура',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish439',
			},
			{ name: 'Шичими', weight: 1, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station3',
	},

	// Тори пайтан BIG
	dish305: {
		id: 'dish305',
		name: 'Тори пайтан',
		image: '',
		ingredients: [
			{ name: 'Лапша рамен', weight: 120, unit: 'гр' },
			{
				name: 'Бульон тори',
				weight: 340,
				unit: 'гр',
				isDish: true,
				dishId: 'dish446',
			},
			{
				name: 'Куриная котлета кацу',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish452',
			},
			{
				name: 'Яйцо маринованное',
				weight: 1,
				unit: 'шт',
				isDish: true,
				dishId: 'dish452',
			},
			{ name: 'Имбирь марин красн', weight: 5, unit: 'гр' },
			{
				name: 'Лук зеленый',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Лотос',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish435',
			},
			{
				name: 'Масло острое',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish422',
			},
			{
				name: 'Масло луковое',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish433',
			},
			{
				name: 'Абура',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish439',
			},
			{ name: 'Шичими', weight: 1, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station3',
	},

	// Тори пайтан Baby
	dish306: {
		id: 'dish306',
		name: 'Тори пайтан baby',
		image: '',
		ingredients: [
			{ name: 'Лапша рамен', weight: 70, unit: 'гр' },
			{
				name: 'Бульон тори',
				weight: 120,
				unit: 'гр',
				isDish: true,
				dishId: 'dish446',
			},
			{
				name: 'Куринная котлета кацу',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish452',
			},
			{
				name: 'Яйцо маринованое',
				weight: 0.5,
				unit: 'шт',
				isDish: true,
				dishId: 'dish450',
			},
			{ name: 'Имбирь марин красн', weight: 3, unit: 'гр' },
			{
				name: 'Лук зеленый',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Лотос',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish435',
			},
			{
				name: 'Масло острое',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish422',
			},
			{
				name: 'Масло луковое',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish433',
			},
			{
				name: 'Абура',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish439',
			},
			{ name: 'Шичими', weight: 1, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station3',
	},

	// Рамен гюкоцу BIG
	dish307: {
		id: 'dish307',
		name: 'Рамен гюкоцу',
		image: '',
		ingredients: [
			{ name: 'Лапша рамен', weight: 120, unit: 'гр' },
			{
				name: 'Бульон гюкоцу',
				weight: 340,
				unit: 'гр',
				isDish: true,
				dishId: 'dish448',
			},
			{
				name: 'Говядина марин гю',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish420',
			},
			{
				name: 'Яйцо маринованое',
				weight: 1,
				unit: 'шт',
				isDish: true,
				dishId: 'dish450',
			},
			{
				name: 'Цума',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish903',
			},
			{
				name: 'Лук зеленый',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Лотос',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish435',
			},
			{
				name: 'Масло острое',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish422',
			},
			{ name: 'Масло трюфель', weight: 5, unit: 'гр' },
			{
				name: 'Масло луковое',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish433',
			},
			{
				name: 'Абура',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish439',
			},
			{ name: 'Шичими', weight: 1, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station3',
	},

	// Рамен гюкоцу Baby
	dish308: {
		id: 'dish308',
		name: 'Рамен гюкоцу baby',
		image: '',
		ingredients: [
			{ name: 'Лапша рамен', weight: 70, unit: 'гр' },
			{
				name: 'Бульон гюкоцу',
				weight: 200,
				unit: 'гр',
				isDish: true,
				dishId: 'dish448',
			},
			{
				name: 'Говядина марин',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish420',
			},
			{
				name: 'Яйцо марин',
				weight: 0.5,
				unit: 'шт',
				isDish: true,
				dishId: 'dish450',
			},
			{
				name: 'Цума',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish903',
			},
			{
				name: 'Лук зеленый',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Лотос',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Масло острое',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish422',
			},
			{ name: 'Масло трюфель', weight: 3, unit: 'гр' },
			{
				name: 'Масло луковое',
				weight: 7,
				unit: 'гр',
				isDish: true,
				dishId: 'dish403',
			},
			{
				name: 'Абура',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish439',
			},
			{ name: 'Шичими', weight: 1, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station3',
	},

	// Рамен курими BIG
	dish309: {
		id: 'dish309',
		name: 'Рамен курими',
		image: '',
		ingredients: [
			{ name: 'Лапша рамен', weight: 120, unit: 'гр' },
			{
				name: 'Бульон курими',
				weight: 340,
				unit: 'гр',
				isDish: true,
				dishId: 'dish441',
			},
			{
				name: 'Кальмар',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish453',
			},
			{
				name: 'Бекон темпура',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish454',
			},
			{
				name: 'Яйцо маринованное',
				weight: 1,
				unit: 'шт',
				isDish: true,
				dishId: 'dish450',
			},
			{ name: 'Кукуруза консерв', weight: 20, unit: 'гр' },
			{
				name: 'Лук зеленый',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Масло остр',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish422',
			},
			{ name: 'Масло трюфель', weight: 3, unit: 'гр' },
			{
				name: 'Масло луковое',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish403',
			},
			{
				name: 'Креветочное масло',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish432',
			},
			{
				name: 'Абура',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish439',
			},
			{ name: 'Шичими', weight: 1, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station3',
	},

	// Рамен курими Baby
	dish310: {
		id: 'dish310',
		name: 'Рамен курими baby',
		image: '',
		ingredients: [
			{ name: 'Лапша рамен', weight: 70, unit: 'гр' },
			{
				name: 'Бульон курими',
				weight: 200,
				unit: 'гр',
				isDish: true,
				dishId: 'dish441',
			},
			{
				name: 'Кальмар',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish453',
			},
			{
				name: 'Бекон темпура',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish454',
			},
			{
				name: 'Яйцо маринованное',
				weight: 0.5,
				unit: 'шт',
				isDish: true,
				dishId: 'dish450',
			},
			{ name: 'Кукуруза консерв', weight: 10, unit: 'гр' },
			{
				name: 'Лук зеленый',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Масло остр',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish422',
			},
			{ name: 'Масло трюфель', weight: 3, unit: 'гр' },
			{
				name: 'Масло луковое',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish403',
			},
			{
				name: 'Креветочное масло',
				weight: 3,
				unit: 'гр',
				isDish: true,
				dishId: 'dish432',
			},
			{
				name: 'Абура',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish439',
			},
			{ name: 'Шичими', weight: 1, unit: 'гр' },
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station3',
	},

	// Рамен том ям (только один размер)
	dish311: {
		id: 'dish311',
		name: 'Рамен том ям',
		image: '',
		ingredients: [
			{ name: 'Лапша рамен', weight: 120, unit: 'гр' },
			{
				name: 'Бульон том ям',
				weight: 340,
				unit: 'гр',
				isDish: true,
				dishId: 'dish449',
			},
			{
				name: 'Креветка темпура',
				weight: 3,
				unit: 'шт',
				isDish: true,
				dishId: 'dish418',
			},
			{
				name: 'Лук зеленый',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish904',
			},
			{
				name: 'Лук красный',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish907',
			},
			{ name: 'Микро кинза', weight: 5, unit: 'гр' },
			{ name: 'Грибы цао гу', weight: 25, unit: 'гр' },
			{
				name: 'Масло острое',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish422',
			},
			{
				name: 'Масло креветочное',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish432',
			},
			{
				name: 'Абура',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish439',
			},
			{
				name: 'Кунжут',
				weight: 1,
				unit: 'гр',
				isDish: true,
				dishId: 'dish917',
			},
		],
		preparation: '',
		station: 'station3',
	},

	// station4 /////////////////////////////////////
	// говядина на тар тар п/ф
	dish405: {
		id: 'dish405',
		name: 'Говядина тар тар',
		image: '',
		ingredients: [
			{
				name: 'Стриплойн',
				weight: 1000,
				unit: 'гр',
				isDish: true,
				dishId: 'dish918',
			},
			{
				name: 'Соль',
				weight: 2,
				unit: 'гр',
			},
			{
				name: 'Нитритная соль',
				weight: 15,
				unit: 'гр',
			},
			{
				name: 'Оливковое масло',
				weight: 30,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// маринованная дорада п/ф
	dish412: {
		id: 'dish412',
		name: 'Дорада',
		image: '',
		ingredients: [
			{
				name: 'Дорада филе',
				weight: 1000,
				unit: 'гр',
				isDish: true,
				dishId: 'dish919',
			},
			{
				name: 'Соль морская',
				weight: 100,
				unit: 'гр',
			},
			{
				name: 'Водоросли комбу',
				weight: 100,
				unit: 'гр',
			},
			{
				name: 'Вино белое сухое',
				weight: 20,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// уши свиные п/ф
	dish427: {
		id: 'dish427',
		name: 'Уши',
		image: '',
		ingredients: [
			{
				name: 'Уши свиные',
				weight: 1200,
				unit: 'гр',
			},
			{
				name: 'Вода',
				weight: 15,
				unit: 'л',
			},
			{
				name: 'Бадьян',
				weight: 15,
				unit: 'гр',
			},
			{
				name: 'Лук зеленый обрезь',
				weight: 100,
				unit: 'гр',
			},
			{
				name: 'Лук репчатый',
				weight: 250,
				unit: 'гр',
			},
			{
				name: 'Вино белое сух',
				weight: 60,
				unit: 'гр',
			},
			{
				name: 'Чеснок',
				weight: 50,
				unit: 'гр',
			},
			{
				name: 'Имбирь',
				weight: 80,
				unit: 'гр',
			},
			{
				name: 'Корица',
				weight: 10,
				unit: 'гр',
			},
			{
				name: 'Сычуанский перец',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Соевый соус',
				weight: 150,
				unit: 'гр',
			},
			{
				name: 'Темный соевый соус',
				weight: 100,
				unit: 'гр',
			},
			{
				name: 'Соль',
				weight: 100,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// Васаби п/ф
	dish409: {
		id: 'dish409',
		name: 'Васаби',
		image: '',
		ingredients: [
			{
				name: 'Васаби порошок',
				weight: 100,
				unit: 'гр',
			},
			{
				name: 'Вода',
				weight: 200,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// Сальса чили
	dish415: {
		id: 'dish415',
		name: 'Сальса чили',
		image: '',
		ingredients: [
			{
				name: 'Красный лук',
				weight: 40,
				unit: 'гр',
				isDish: true,
				dishId: 'dish907',
			},
			{
				name: 'Чили перец',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish915',
			},
			{
				name: 'Цедра лайма',
				weight: 3,
				unit: 'гр',
			},
			{
				name: 'Мякоть лайма',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Соус шисо',
				weight: 100,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// магуро тунец
	dish401: {
		id: 'dish401',
		name: 'Магуро тунец',
		image: '',
		ingredients: [
			{
				name: 'Тунец',
				weight: 350,
				unit: 'гр',
				isDish: true,
				dishId: 'dish406',
			},
			{
				name: 'Хондаши',
				weight: 10,
				unit: 'гр',
			},
			{
				name: 'Соевый соус',
				weight: 200,
				unit: 'гр',
			},
			{
				name: 'Мирин',
				weight: 200,
				unit: 'гр',
			},
			{
				name: 'Вода',
				weight: 100,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// копченый лосось п/ф
	dish416: {
		id: 'dish416',
		name: 'Лосось копчен',
		image: '',
		ingredients: [
			{
				name: 'Лосось',
				weight: 100,
				unit: 'гр',
				isDish: true,
				dishId: 'dish910',
			},
			{
				name: 'Соус унаги',
				weight: 30,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// Рис для суши
	dish402: {
		id: 'dish402',
		name: 'Рис для суши',
		image: '',
		ingredients: [
			{
				name: 'Рис икигай',
				weight: 2000,
				unit: 'гр',
			},
			{
				name: 'Вода канген',
				weight: 2000,
				unit: 'гр',
			},
			{
				name: 'Сушиза',
				weight: 500,
				unit: 'гр',
				isDish: true,
				dishId: 'dish430',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// хумус эдамаме п/ф
	dish424: {
		id: 'dish424',
		name: 'Хумус эдамаме',
		image: '',
		ingredients: [
			{
				name: 'Бобы эдамаме чищ',
				weight: 250,
				unit: 'гр',
				isDish: true,
				dishId: 'dish920',
			},
			{
				name: 'Шпинат свеж',
				weight: 50,
				unit: 'гр',
			},
			{
				name: 'Мёд цветочный',
				weight: 50,
				unit: 'гр',
			},
			{
				name: 'Вода фильтр',
				weight: 170,
				unit: 'гр',
			},
			{
				name: 'Соль',
				weight: 3,
				unit: 'гр',
			},
			{
				name: 'Масло кунжутное',
				weight: 2,
				unit: 'гр',
			},
			{
				name: 'Ромейн',
				weight: 60,
				unit: 'гр',
			},
			{
				name: 'Сок лайма',
				weight: 30,
				unit: 'гр',
			},
			{
				name: 'Паста чеснок-имбирь',
				weight: 50,
				unit: 'гр',
				isDish: true,
				dishId: 'dish931',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// соус понзу п/ф
	dish411: {
		id: 'dish411',
		name: 'Соус понзу',
		image: '',
		ingredients: [
			{
				name: 'Уксус рисовый',
				weight: 2000,
				unit: 'гр',
			},
			{
				name: 'Соевый соус',
				weight: 1500,
				unit: 'гр',
			},
			{
				name: 'Водоросли комбу',
				weight: 40,
				unit: 'гр',
			},
			{
				name: 'Цедра лайма',
				weight: 10,
				unit: 'гр',
			},
			{
				name: 'Стружка тунца бонито',
				weight: 30,
				unit: 'гр',
			},
			{
				name: 'Сок лимона',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish921',
			},
			{
				name: 'Сахар',
				weight: 100,
				unit: 'гр',
			},
			{
				name: 'Креветочное масло',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish432',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// соус кэвиар п/ф
	dish414: {
		id: 'dish414',
		name: 'Соус кэвиар',
		image: '',
		ingredients: [
			{
				name: 'Майонез японск',
				weight: 500,
				unit: 'гр',
			},
			{
				name: 'Кочудян',
				weight: 30,
				unit: 'гр',
			},
			{
				name: 'Соевый соус',
				weight: 20,
				unit: 'гр',
			},
			{
				name: 'Рыбный соус',
				weight: 10,
				unit: 'гр',
			},
			{
				name: 'Мирин',
				weight: 30,
				unit: 'гр',
			},
			{
				name: 'Вода',
				weight: 130,
				unit: 'гр',
			},
			{
				name: 'Хондаши',
				weight: 2,
				unit: 'гр',
			},
			{
				name: 'Тобико красная',
				weight: 40,
				unit: 'гр',
			},
			{
				name: 'Умами',
				weight: 2,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// соус том ям
	dish419: {
		id: 'dish419',
		name: 'Соус том ям',
		image: '',
		ingredients: [
			{
				name: 'Кокосовое молоко',
				weight: 1000,
				unit: 'гр',
			},
			{
				name: 'Паста том ям',
				weight: 70,
				unit: 'гр',
			},
			{
				name: 'Чили паста',
				weight: 65,
				unit: 'гр',
			},
			{
				name: 'Устричный соус',
				weight: 25,
				unit: 'гр',
			},
			{
				name: 'Рыбный соус',
				weight: 10,
				unit: 'гр',
			},
			{
				name: 'Соевый соус',
				weight: 10,
				unit: 'гр',
			},
			{
				name: 'Лемонграсс',
				weight: 20,
				unit: 'гр',
			},
			{
				name: 'Лист лайма',
				weight: 2,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// Шисо песто
	dish426: {
		id: 'dish426',
		name: 'Шисо песто',
		image: '',
		ingredients: [
			{
				name: 'Листья шисо',
				weight: 20,
				unit: 'гр',
			},
			{
				name: 'Шпинат',
				weight: 80,
				unit: 'гр',
			},
			{
				name: 'Оливковое масло',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Арахис',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish916',
			},
			{
				name: 'Сок лимона',
				weight: 65,
				unit: 'гр',
			},
			{
				name: 'Сок лайма',
				weight: 40,
				unit: 'гр',
			},
			{
				name: 'Сок апельсина',
				weight: 60,
				unit: 'гр',
			},
			{
				name: 'Соль',
				weight: 3,
				unit: 'гр',
			},
			{
				name: 'Мёд',
				weight: 50,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// соус тоса п/ф
	dish413: {
		id: 'dish413',
		name: 'Соус тоса',
		image: '',
		ingredients: [
			{
				name: 'Соевый соус',
				weight: 200,
				unit: 'гр',
			},
			{
				name: 'Вино белое сухое',
				weight: 100,
				unit: 'гр',
			},
			{
				name: 'Мирин',
				weight: 200,
				unit: 'гр',
			},
			{
				name: 'Стружка тунца бонито',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Кунжут белый',
				weight: 20,
				unit: 'гр',
			},
			{
				name: 'Чеснок чищ',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish922',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// соус для онигири п/ф
	dish417: {
		id: 'dish417',
		name: 'Соус для онигири ',
		image: '',
		ingredients: [
			{
				name: 'Сок апельсина',
				weight: 100,
				unit: 'гр',
				isDish: true,
				dishId: 'dish923',
			},
			{
				name: 'Горчица зернистая',
				weight: 40,
				unit: 'гр',
			},
			{
				name: 'Соевый соус с морями',
				weight: 20,
				unit: 'гр',
			},
			{
				name: 'Мёд',
				weight: 20,
				unit: 'гр',
			},
			{
				name: 'Горчичное масло',
				weight: 20,
				unit: 'гр',
			},
			{
				name: 'Масло оливковое',
				weight: 30,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// соус уши п/ф
	dish425: {
		id: 'dish425',
		name: 'Соус уши',
		image: '',
		ingredients: [
			{
				name: 'Соус устричный',
				weight: 100,
				unit: 'гр',
			},
			{
				name: 'Уксус рисовый',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Соус соевый',
				weight: 15,
				unit: 'гр',
			},
			{
				name: 'Паста чеснок-имбирь',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish431',
			},
			{
				name: 'Кинза',
				weight: 15,
				unit: 'гр',
				isDish: true,
				dishId: 'dish#',
			},
			{
				name: 'Перец чили',
				weight: 3,
				unit: 'гр',
			},
			{
				name: 'Масло луковое',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish433',
			},
			{
				name: 'Масло острое',
				weight: 5,
				unit: 'гр',
				isDish: true,
				dishId: 'dish422',
			},
			{
				name: 'Масло кунжутное',
				weight: 5,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// сушиза п/ф
	dish430: {
		id: 'dish430',
		name: 'Сушиза',
		image: '',
		ingredients: [
			{
				name: 'Уксус рисовый',
				weight: 2200,
				unit: 'гр',
			},
			{
				name: 'Сахар',
				weight: 1520,
				unit: 'гр',
			},
			{
				name: 'Соль',
				weight: 320,
				unit: 'гр',
			},
			{
				name: 'Уксус цитрусовый',
				weight: 40,
				unit: 'гр',
			},
			{
				name: 'Умами',
				weight: 20,
				unit: 'гр',
			},
			{
				name: 'Водоросли комбу',
				weight: 80,
				unit: 'гр',
			},
			{
				name: 'Хондаши',
				weight: 5,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// соус виттело
	dish421: {
		id: 'dish421',
		name: 'Соус виттело',
		image: '',
		ingredients: [
			{
				name: 'Сливочный сыр',
				weight: 100,
				unit: 'гр',
			},
			{
				name: 'Майонез японск',
				weight: 150,
				unit: 'гр',
			},
			{
				name: 'Тунец',
				weight: 90,
				unit: 'гр',
				isDish: true,
				dishId: 'dish406',
			},
			{
				name: 'Рыбный соус',
				weight: 20,
				unit: 'гр',
			},
			{
				name: 'Соус крабовый',
				weight: 40,
				unit: 'гр',
			},
			{
				name: 'Хондаши',
				weight: 2,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// острое масло п/ф
	dish422: {
		id: 'dish422',
		name: 'Острое масло',
		image: '',
		ingredients: [
			{
				name: 'Масло раст',
				weight: 400,
				unit: 'гр',
			},
			{
				name: 'Шичими',
				weight: 25,
				unit: 'гр',
			},
			{
				name: 'Сушеные хлопья чили',
				weight: 50,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// сио таре п/ф
	dish434: {
		id: 'dish434',
		name: 'Сио таре',
		image: '',
		ingredients: [
			{
				name: 'Вода',
				weight: 7,
				unit: 'л',
			},
			{
				name: 'Водоросли комбу',
				weight: 70,
				unit: 'гр',
			},
			{
				name: 'Стружка тунца',
				weight: 70,
				unit: 'гр',
			},
			{
				name: 'Луковое масло',
				weight: 150,
				unit: 'гр',
				isDish: true,
				dishId: 'dish433',
			},
			{
				name: 'Мирин',
				weight: 170,
				unit: 'гр',
			},
			{
				name: 'Вино бел сухое',
				weight: 170,
				unit: 'гр',
			},
			{
				name: 'Сахар',
				weight: 600,
				unit: 'гр',
			},
			{
				name: 'Соль',
				weight: 2500,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// лотос п/ф
	dish435: {
		id: 'dish435',
		name: 'Лотос',
		image: '',
		ingredients: [
			{
				name: 'Лотос мар',
				weight: 2000,
				unit: 'гр',
			},
			{
				name: 'Масло раст',
				weight: 20,
				unit: 'гр',
			},
			{
				name: 'Устричный соус',
				weight: 20,
				unit: 'гр',
			},
			{
				name: 'Соевый соус',
				weight: 100,
				unit: 'гр',
			},
			{
				name: 'Паста кочудян',
				weight: 10,
				unit: 'гр',
			},
			{
				name: 'Дашида курин',
				weight: 10,
				unit: 'гр',
			},
			{
				name: 'Луковое масло',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish433',
			},
			{
				name: 'Кунжутное масло',
				weight: 20,
				unit: 'гр',
			},
			{
				name: 'Сахар',
				weight: 10,
				unit: 'гр',
			},
			{
				name: 'Мирин',
				weight: 80,
				unit: 'гр',
			},
			{
				name: 'Вино бел сух',
				weight: 15,
				unit: 'гр',
			},
			{
				name: 'Вода канген',
				weight: 200,
				unit: 'мл',
			},
			{
				name: 'Паста чеснок-имбирь',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish431',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// луковое масло п/ф
	dish433: {
		id: 'dish433',
		name: 'Луковое масло',
		image: '',
		ingredients: [
			{
				name: 'Масло раст',
				weight: 1000,
				unit: 'мл',
			},
			{
				name: 'Лук репчатый',
				weight: 200,
				unit: 'гр',
				isDish: true,
				dishId: 'dish925',
			},
			{
				name: 'Лук порей (зелен лист)',
				weight: 100,
				unit: 'гр',
			},
			{
				name: 'Белая часть зел лука',
				weight: 200,
				unit: 'гр',
			},
			{
				name: 'Чеснок',
				weight: 50,
				unit: 'гр',
				isDish: true,
				dishId: 'dish926',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// креветочное масло п/ф
	dish432: {
		id: 'dish432',
		name: 'Креветочное масло',
		image: '',
		ingredients: [
			{
				name: 'Растительное масло',
				weight: 600,
				unit: 'гр',
			},
			{
				name: 'Хитин (панцири)',
				weight: 200,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// чесночное масло п/ф
	dish436: {
		id: 'dish436',
		name: 'Чесночное масло',
		image: '',
		ingredients: [
			{
				name: 'Растительное масло',
				weight: 400,
				unit: 'гр',
			},
			{
				name: 'Чеснок',
				weight: 200,
				unit: 'гр',
				isDish: true,
				dishId: 'dish926',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// нарутомаки
	dish437: {
		id: 'dish437',
		name: 'Нарутомаки',
		image: '',
		ingredients: [
			{
				name: 'Дорадо (обрезь)',
				weight: 150,
				unit: 'гр',
				isDish: true,
				dishId: 'dish412',
			},
			{
				name: 'Хондаши',
				weight: 2,
				unit: 'гр',
			},
			{
				name: 'Сахар',
				weight: 2,
				unit: 'гр',
			},
			{
				name: 'Вино бел сух',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Крахмал картофельный',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Краситель красный',
				weight: 1,
				unit: 'гр',
			},
			{
				name: 'Диоксид титна',
				weight: 1,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// маринад для яйц
	dish438: {
		id: 'dish438',
		name: 'Маринад для яйц',
		image: '',
		ingredients: [
			{
				name: 'Темный соевый соус',
				weight: 500,
				unit: 'гр',
			},
			{
				name: 'Мирин',
				weight: 200,
				unit: 'гр',
			},
			{
				name: 'Сахар',
				weight: 100,
				unit: 'гр',
			},
			{
				name: 'Вино бел сух',
				weight: 50,
				unit: 'гр',
			},
			{
				name: 'Вода',
				weight: 1,
				unit: 'л',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// абура п/ф
	dish439: {
		id: 'dish439',
		name: 'Абура',
		image: '',
		ingredients: [
			{
				name: 'Чеснок',
				weight: 300,
				unit: 'гр',
				isDish: true,
				dishId: 'dish926',
			},
			{
				name: 'Растительное масло',
				weight: 400,
				unit: 'гр',
			},
			{
				name: 'Шичими',
				weight: 10,
				unit: 'гр',
			},
			{
				name: 'Соль',
				weight: 10,
				unit: 'гр',
			},
			{
				name: 'Криспи лук',
				weight: 30,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// сырный бульон п/ф
	dish440: {
		id: 'dish440',
		name: 'Сырный бульон',
		image: '',
		ingredients: [
			{
				name: 'Вода',
				weight: 6,
				unit: 'л',
			},
			{
				name: 'Сырный соус чедр',
				weight: 1200,
				unit: 'гр',
			},
			{
				name: 'Плавленый сыр дружба',
				weight: 800,
				unit: 'гр',
			},
			{
				name: 'Устричный соус',
				weight: 500,
				unit: 'гр',
			},
			{
				name: 'Сахар',
				weight: 10,
				unit: 'гр',
			},
			{
				name: 'Сио таре',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish434',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// курими шрим бульон п/ф
	dish441: {
		id: 'dish441',
		name: 'Курими шрим бульон',
		image: '',
		ingredients: [
			{
				name: 'Вода канген',
				weight: 5,
				unit: 'л',
			},
			{
				name: 'Биск',
				weight: 500,
				unit: 'гр',
				isDish: true,
				dishId: 'dish442',
			},
			{
				name: 'Желтая карри паста',
				weight: 250,
				unit: 'гр',
			},
			{
				name: 'Плавленый сыр',
				weight: 400,
				unit: 'гр',
			},
			{
				name: 'Растительное масло',
				weight: 50,
				unit: 'гр',
			},
			{
				name: 'Дашидо малюск',
				weight: 30,
				unit: 'гр',
			},
			{
				name: 'Устричный соус',
				weight: 400,
				unit: 'гр',
			},
			{
				name: 'Хондаши',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Соевый соус',
				weight: 50,
				unit: 'гр',
			},
			{
				name: 'Сливки 10%',
				weight: 1,
				unit: 'л',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// бульон тонкоцу
	dish443: {
		id: 'dish443',
		name: 'Бульон тонкоцу основа',
		image: '',
		ingredients: [
			{
				name: 'Суповой набор свиной',
				weight: 25,
				unit: 'кг',
			},
			{
				name: 'Ноги свиные',
				weight: 25,
				unit: 'кг',
			},
			{
				name: 'Вода',
				weight: 100,
				unit: 'л',
			},
			{
				name: 'Лук репчатый',
				weight: 1,
				unit: 'кг',
				isDish: true,
				dishId: 'dish925',
			},
			{
				name: 'Чеснок',
				weight: 500,
				unit: 'гр',
				isDish: true,
				dishId: 'dish922',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// бульон тонкоцу п/ф
	dish444: {
		id: 'dish444',
		name: 'Бульон тонкоцу',
		image: '',
		ingredients: [
			{
				name: 'Бульон тонкоцу',
				weight: 6,
				unit: 'л',
				isDish: true,
				dishId: 'dish443',
			},
			{
				name: 'Сио таре',
				weight: 200,
				unit: 'гр',
				isDish: true,
				dishId: 'dish434',
			},
			{
				name: 'Дашида молюск',
				weight: 20,
				unit: 'гр',
			},
			{
				name: 'Дошида куриная',
				weight: 40,
				unit: 'гр',
			},
			{
				name: 'Мирин',
				weight: 50,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// бульон тори пайтан
	dish445: {
		id: 'dish445',
		name: 'Бульон тори пайтан основа',
		image: '',
		ingredients: [
			{
				name: 'Суповой набор',
				weight: 25,
				unit: 'кг',
			},
			{
				name: 'Лапы куриные',
				weight: 10,
				unit: 'кг',
			},
			{
				name: 'Крылья курин',
				weight: 10,
				unit: 'кг',
			},
			{
				name: 'Куриный жир',
				weight: 2,
				unit: 'кг',
			},
			{
				name: 'Вода',
				weight: 100,
				unit: 'л',
			},
			{
				name: 'Водоросли комбу',
				weight: 40,
				unit: 'гр',
			},
			{
				name: 'Лук репчатый',
				weight: 1.2,
				unit: 'кг',
			},
			{
				name: 'Чеснок',
				weight: 500,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// бульон тори пайтан п/ф
	dish446: {
		id: 'dish446',
		name: 'Бульон тори пайтан',
		image: '',
		ingredients: [
			{
				name: 'Бульон тори пайтан основа',
				weight: 6,
				unit: 'л',
			},
			{
				name: 'Дошида куриная',
				weight: 60,
				unit: 'гр',
			},
			{
				name: 'Мирин',
				weight: 50,
				unit: 'гр',
			},
			{
				name: 'Сио таре',
				weight: 200,
				unit: 'гр',
				isDish: true,
				dishId: 'dish434',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// бульон гюкоцу
	dish447: {
		id: 'dish447',
		name: 'Бульон гюкоцу основа',
		image: '',
		ingredients: [
			{
				name: 'Кости говяжьи',
				weight: 50,
				unit: 'кг',
			},
			{
				name: 'Вода',
				weight: 100,
				unit: 'л',
			},
			{
				name: 'Лук репчатый',
				weight: 1.2,
				unit: 'кг',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// бульон гюкоцу п/ф
	dish448: {
		id: 'dish448',
		name: 'Бульон гюкоцу',
		image: '',
		ingredients: [
			{
				name: 'Бульон гюкоцу основа',
				weight: 6,
				unit: 'л',
				isDish: true,
				dishId: 'dish447',
			},
			{
				name: 'Дошида говяжая',
				weight: 50,
				unit: 'гр',
			},
			{
				name: 'Дошида молюск',
				weight: 20,
				unit: 'гр',
			},
			{
				name: 'Сио таре',
				weight: 200,
				unit: 'гр',
				isDish: true,
				dishId: 'dish434',
			},
			{
				name: 'Мирин',
				weight: 50,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// том ям бульон п/ф
	dish449: {
		id: 'dish449',
		name: 'Том ям бульон',
		image: '',
		ingredients: [
			{
				name: 'Вода',
				weight: 6,
				unit: 'л',
			},
			{
				name: 'Паста том ям',
				weight: 550,
				unit: 'гр',
			},
			{
				name: 'Биск',
				weight: 200,
				unit: 'гр',
				isDish: true,
				dishId: 'dish442',
			},
			{
				name: 'Сахар',
				weight: 200,
				unit: 'гр',
			},
			{
				name: 'Дашида моллюск',
				weight: 30,
				unit: 'гр',
			},
			{
				name: 'Дашида куриная',
				weight: 30,
				unit: 'гр',
			},
			{
				name: 'Умами',
				weight: 100,
				unit: 'гр',
			},
			{
				name: 'Устричный соус',
				weight: 100,
				unit: 'гр',
			},
			{
				name: 'Рыбный соус',
				weight: 150,
				unit: 'гр',
			},
			{
				name: 'Тамариндовая паста',
				weight: 50,
				unit: 'гр',
			},
			{
				name: 'Молоко кокосовое aroy-d',
				weight: 1,
				unit: 'л',
			},
			{
				name: 'Шрирача',
				weight: 40,
				unit: 'гр',
			},
			{
				name: 'Листья лайма',
				weight: 5,
				unit: 'гр',
			},
			{
				name: 'Лемонграсс',
				weight: 40,
				unit: 'гр',
			},
		],
		preparation: '',
		station: 'station4',
	},
	// соус удон курица
	dish455: {
		id: 'dish455',
		name: 'Соус удон курица',
		image: '',
		ingredients: [
			{ name: 'Вино белое сухое', weight: 200, unit: 'гр' },
			{ name: 'Мирин', weight: 400, unit: 'гр' },
			{ name: 'Сахар песок', weight: 40, unit: 'гр' },
			{
				name: 'Паста чеснок-имбирь',
				weight: 200,
				unit: 'гр',
				isDish: true,
				dishId: 'dish431',
			},
			{ name: 'Соевый соус', weight: 100, unit: 'гр' },
			{ name: 'Тёмный соевый соус', weight: 100, unit: 'гр' },
			{ name: 'Умами', weight: 40, unit: 'гр' },
			{ name: 'Устричный соус', weight: 400, unit: 'гр' },
			{ name: 'Кунжутное масло', weight: 80, unit: 'гр' },
			{ name: 'Горчица русская', weight: 150, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// соус тай
	dish456: {
		id: 'dish456',
		name: 'Соус тай',
		image: '',
		ingredients: [
			{ name: 'Кокосовое молоко', weight: 400, unit: 'гр' },
			{ name: 'Тамариндовая паста', weight: 400, unit: 'гр' },
			{ name: 'Чили-креветочная паста', weight: 400, unit: 'гр' },
			{ name: 'Рыбный соус', weight: 130, unit: 'гр' },
			{
				name: 'Сок лайма',
				weight: 130,
				unit: 'гр',
				isDish: true,
				dishId: 'dish927',
			},
			{ name: 'Устричный соус', weight: 150, unit: 'гр' },
			{
				name: 'Чесночн-имбирная паста',
				weight: 75,
				unit: 'гр',
				isDish: true,
				dishId: 'dish431',
			},
			{ name: 'Сахар', weight: 260, unit: 'гр' },
			{ name: 'Соль', weight: 12, unit: 'гр' },
			{ name: 'Умами', weight: 12, unit: 'гр' },
			{
				name: 'Чили',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish915',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// соус сливочный удон
	dish457: {
		id: 'dish457',
		name: 'Соус сливочный удон',
		image: '',
		ingredients: [
			{ name: 'Сливки 10%', weight: 350, unit: 'гр' },
			{ name: 'Сливки 33%', weight: 350, unit: 'гр' },
			{
				name: 'Биск',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish442',
			},
			{ name: 'Шрирача', weight: 30, unit: 'гр' },
			{ name: 'Устричный соус', weight: 100, unit: 'гр' },
			{ name: 'Крабовый соевый соус', weight: 30, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// соус спайси майо
	dish458: {
		id: 'dish458',
		name: 'Соус спайси майо',
		image: '',
		ingredients: [
			{ name: 'Японский майонез', weight: 500, unit: 'гр' },
			{ name: 'Кетчуп', weight: 500, unit: 'гр' },
			{ name: 'Паприка копчен', weight: 60, unit: 'гр' },
			{ name: 'Соус кимчи', weight: 60, unit: 'гр' },
			{ name: 'Шрирача', weight: 60, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// соус карри
	dish459: {
		id: 'dish459',
		name: 'Соус карри',
		image: '',
		ingredients: [
			{
				name: 'Лук репчатый',
				weight: 650,
				unit: 'гр',
				isDish: true,
				dishId: 'dish925',
			},
			{
				name: 'Морковь',
				weight: 650,
				unit: 'гр',
				isDish: true,
				dishId: 'dish928',
			},
			{
				name: 'Картофель',
				weight: 650,
				unit: 'гр',
				isDish: true,
				dishId: 'dish929',
			},
			{ name: 'Масло подсолнечное', weight: 300, unit: 'гр' },
			{ name: 'Соус овощной карри', weight: 1, unit: 'блок' },
			{ name: 'Вода', weight: 6, unit: 'л' },
			{ name: 'Масала', weight: 6, unit: 'гр' },
			{ name: 'Ворчестр соус', weight: 100, unit: 'гр' },
			{ name: 'Тёмный соевый соус', weight: 160, unit: 'гр' },
			{ name: 'Умами', weight: 40, unit: 'гр' },
			{ name: 'Соль', weight: 90, unit: 'гр' },
			{ name: 'Сахар', weight: 100, unit: 'гр' },
			{ name: 'Эспрессо', weight: 1, unit: 'пор' },
		],
		preparation: '',
		station: 'station4',
	},

	// соус удон морепродукты
	dish460: {
		id: 'dish460',
		name: 'Соус удон морепродукты',
		image: '',
		ingredients: [
			{
				name: 'Биск',
				weight: 300,
				unit: 'гр',
				isDish: true,
				dishId: 'dish442',
			},
			{ name: 'Устричный соус', weight: 40, unit: 'гр' },
			{ name: 'Чили креветочная паста', weight: 40, unit: 'гр' },
			{ name: 'Паста том ям', weight: 20, unit: 'гр' },
			{ name: 'Красбовый соевый соус', weight: 20, unit: 'гр' },
			{ name: 'Кокосовое молоко', weight: 50, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// соус пад тай
	dish461: {
		id: 'dish461',
		name: 'Соус пад тай',
		image: '',
		ingredients: [
			{ name: 'Соус пад тай', weight: 100, unit: 'гр' },
			{ name: 'Устричный соус', weight: 100, unit: 'гр' },
			{ name: 'Сахар', weight: 25, unit: 'гр' },
			{ name: 'Рыбный соус', weight: 12, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// соус терияки
	dish462: {
		id: 'dish462',
		name: 'Соус терияки',
		image: '',
		ingredients: [
			{ name: 'Соевый соус', weight: 100, unit: 'гр' },
			{ name: 'Мирин', weight: 100, unit: 'гр' },
			{ name: 'Вино белое кухня', weight: 50, unit: 'гр' },
			{ name: 'Сахар', weight: 30, unit: 'гр' },
			{
				name: 'Сок апельсина',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish923',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// соус агидаси
	dish463: {
		id: 'dish463',
		name: 'Соус агидаси',
		image: '',
		ingredients: [
			{ name: 'Соус широдаши', weight: 200, unit: 'гр' },
			{ name: 'Устричный соус', weight: 40, unit: 'гр' },
			{ name: 'Вода', weight: 450, unit: 'гр' },
			{ name: 'Мирин', weight: 70, unit: 'гр' },
			{ name: 'Соевый соус', weight: 20, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// соус понзу на гедза
	dish464: {
		id: 'dish464',
		name: 'Соус понзу на гедза',
		image: '',
		ingredients: [
			{ name: 'Соевый соус', weight: 200, unit: 'гр' },
			{ name: 'Уксус рисовый', weight: 40, unit: 'гр' },
			{ name: 'Вода канген', weight: 200, unit: 'гр' },
			{ name: 'Мирин', weight: 70, unit: 'гр' },
			{ name: 'Острое масло', weight: 3, unit: 'гр' },
			{ name: 'Кунжутное масло', weight: 3, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// соус демиглас
	dish465: {
		id: 'dish465',
		name: 'Соус демиглас',
		image: '',
		ingredients: [
			{ name: 'Демиглас', weight: 1, unit: 'кг' },
			{ name: 'Лист лайма', weight: 2, unit: 'гр' },
			{ name: 'Соус черный перец', weight: 100, unit: 'гр' },
			{ name: 'Дашида говядина', weight: 8, unit: 'гр' },
			{ name: 'Соевый соус', weight: 20, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// эспума
	dish466: {
		id: 'dish466',
		name: 'Эспума',
		image: '',
		ingredients: [
			{ name: 'Сливки 33%', weight: 950, unit: 'гр' },
			{ name: 'Молоко 3,2%', weight: 350, unit: 'гр' },
			{ name: 'Желатин пищевый', weight: 10, unit: 'гр' },
			{ name: 'Сливочный сыр', weight: 300, unit: 'гр' },
			{ name: 'Мисо светлая', weight: 80, unit: 'гр' },
			{ name: 'Мёд', weight: 160, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// слури на гёдза
	dish467: {
		id: 'dish467',
		name: 'Слури на гёдза',
		image: '',
		ingredients: [
			{ name: 'Вода канген', weight: 160, unit: 'гр' },
			{ name: 'Растительное масло', weight: 55, unit: 'гр' },
			{ name: 'Мука', weight: 20, unit: 'гр' },
			{ name: 'Хондаши', weight: 2, unit: 'гр' },
			{ name: 'Соль', weight: 2, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// соус якисоба
	dish468: {
		id: 'dish468',
		name: 'Соус якисоба',
		image: '',
		ingredients: [
			{ name: 'Устричный соус', weight: 600, unit: 'гр' },
			{ name: 'Мёд', weight: 160, unit: 'гр' },
			{ name: 'Кетчуп', weight: 400, unit: 'гр' },
			{ name: 'Маринад имбиря', weight: 20, unit: 'гр' },
			{ name: 'Соус ворчестр', weight: 100, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// соус сливочный унаги
	dish469: {
		id: 'dish469',
		name: 'Соус сливочный унаги',
		image: '',
		ingredients: [
			{
				name: 'Соус унаги',
				weight: 120,
				unit: 'гр',
			},
			{ name: 'Сливки 33%', weight: 500, unit: 'гр' },
			{ name: 'Трюфельное масло', weight: 5, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// гедза лосось-шиитаке 1шт
	dish470: {
		id: 'dish470',
		name: 'Гедза лосось-шиитаке 1шт',
		image: '',
		ingredients: [
			{ name: 'Тесто гедза', weight: 5, unit: 'гр' },
			{
				name: 'Фарш гедза лосось',
				weight: 15,
				unit: 'гр',
				isDish: true,
				dishId: 'dish471',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// бульон даси п/ф
	dish472: {
		id: 'dish472',
		name: 'Бульон даси',
		image: '',
		ingredients: [
			{ name: 'Вода канген', weight: 4, unit: 'л' },
			{ name: 'Водоросли комбу', weight: 40, unit: 'гр' },
			{ name: 'Стружка тунца бонито', weight: 40, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// моэр маринованные п/ф
	dish473: {
		id: 'dish473',
		name: 'Моэр маринованные',
		image: '',
		ingredients: [
			{ name: 'Моэр', weight: 50, unit: 'гр' },
			{ name: 'Уксус чили чеснок', weight: 10, unit: 'гр' },
			{ name: 'Луковое масло', weight: 60, unit: 'гр' },
			{ name: 'Паста с хруст чили', weight: 40, unit: 'гр' },
			{ name: 'Соевый соус', weight: 35, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// кляр п/ф
	dish474: {
		id: 'dish474',
		name: 'Кляр',
		image: '',
		ingredients: [
			{ name: 'Мука', weight: 700, unit: 'гр' },
			{ name: 'Крахмал', weight: 300, unit: 'гр' },
			{ name: 'Вода канген', weight: 1.5, unit: 'л' },
			{ name: 'Яйцо кур', weight: 4, unit: 'шт' },
			{ name: 'Хондаши', weight: 15, unit: 'гр' },
			{ name: 'Соль', weight: 8, unit: 'гр' },
			{ name: 'Перец', weight: 2, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// гедза свинина-креветка 1шт
	dish475: {
		id: 'dish475',
		name: 'Гедза свинина-креветка 1шт',
		image: '',
		ingredients: [
			{ name: 'Тесто гедза', weight: 5, unit: 'гр' },
			{
				name: 'Фарш гедза свинина',
				weight: 15,
				unit: 'гр',
				isDish: true,
				dishId: 'dish476',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// фарш гедза лосось-шиитаке п/ф
	dish471: {
		id: 'dish471',
		name: 'Фарш гедза лосось-шиитаке',
		image: '',
		ingredients: [
			{
				name: 'Лосось',
				weight: 250,
				unit: 'гр',
				isDish: true,
				dishId: 'dish910',
			},
			{
				name: 'Шиитаке',
				weight: 35,
				unit: 'гр',
				isDish: true,
				dishId: 'dish930',
			},
			{
				name: 'Моэр',
				weight: 25,
				unit: 'гр',
				isDish: true,
				dishId: 'dish931',
			},
			{
				name: 'Лук порей',
				weight: 15,
				unit: 'гр',
				isDish: true,
				dishId: 'dish932',
			},
			{ name: 'Устричный соус', weight: 15, unit: 'гр' },
			{ name: 'Крабовый соевый соус', weight: 10, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// мисо суп п/ф
	dish477: {
		id: 'dish477',
		name: 'Мисо суп',
		image: '',
		ingredients: [
			{
				name: 'Бульон даси',
				weight: 4,
				unit: 'л',
				isDish: true,
				dishId: 'dish472',
			},
			{ name: 'Мисо паста светлая', weight: 250, unit: 'гр' },
			{ name: 'Хондаши', weight: 10, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// чесночно имбирная паста п/ф
	dish431: {
		id: 'dish431',
		name: 'Чесночно имбирная паста',
		image: '',
		ingredients: [
			{
				name: 'Чеснок чищ',
				weight: 350,
				unit: 'гр',
				isDish: true,
				dishId: 'dish922',
			},
			{
				name: 'Имбирь чищ',
				weight: 150,
				unit: 'гр',
				isDish: true,
				dishId: 'dish933',
			},
			{ name: 'Растительное масло', weight: 250, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// мучная смесь карааге п/ф
	dish478: {
		id: 'dish478',
		name: 'Мучная смесь карааге',
		image: '',
		ingredients: [
			{ name: 'Паприка копчен', weight: 160, unit: 'гр' },
			{ name: 'Мука', weight: 400, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// огурцы кимчи п/ф
	dish479: {
		id: 'dish479',
		name: 'Огурцы кимчи',
		image: '',
		ingredients: [
			{ name: 'Огурец', weight: 1, unit: 'кг' },
			{ name: 'Соль', weight: 10, unit: 'гр' },
			{ name: 'Соус кимчи', weight: 100, unit: 'гр' },
			{ name: 'Луковое масло', weight: 60, unit: 'гр' },
			{ name: 'Паста с хруст чили', weight: 40, unit: 'гр' },
			{ name: 'Соевый соус', weight: 35, unit: 'гр' },
			{
				name: 'Вакаме',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish934',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// шиитаке маринованные п/ф
	dish480: {
		id: 'dish480',
		name: 'Шиитаке маринованные',
		image: '',
		ingredients: [
			{
				name: 'Шиитаке отварные',
				weight: 300,
				unit: 'гр',
				isDish: true,
				dishId: 'dish930',
			},
			{ name: 'Соевый соус', weight: 50, unit: 'гр' },
			{
				name: 'Паста чеснок-имбирь',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish431',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// кура бедро марин п/ф
	dish481: {
		id: 'dish481',
		name: 'Кура бедро марин',
		image: '',
		ingredients: [
			{
				name: 'Кура бедро',
				weight: 1,
				unit: 'кг',
				isDish: true,
				dishId: 'dish935',
			},
			{
				name: 'Паста чеснок-имбирь',
				weight: 35,
				unit: 'гр',
				isDish: true,
				dishId: 'dish431',
			},
			{ name: 'Соевый соус', weight: 100, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// свинина чашу п/ф
	dish451: {
		id: 'dish451',
		name: 'Свинина чашу',
		image: '',
		ingredients: [
			{ name: 'Свинина б/к', weight: 2, unit: 'кг' },
			{
				name: 'Маринад на чашу',
				weight: 500,
				unit: 'гр',
				isDish: true,
				dishId: 'dish482',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// маринад на чашу п/ф
	dish482: {
		id: 'dish482',
		name: 'Маринад на чашу',
		image: '',
		ingredients: [
			{ name: 'Вино белое', weight: 100, unit: 'гр' },
			{ name: 'Сахар', weight: 50, unit: 'гр' },
			{ name: 'Мирин', weight: 120, unit: 'гр' },
			{
				name: 'Паста чеснок имбирь',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish431',
			},
			{ name: 'Тёмный соевый соус', weight: 100, unit: 'гр' },
			{ name: 'Соевый соус', weight: 100, unit: 'гр' },
			{ name: 'Умами', weight: 30, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// фарш свинина-креветка п/ф
	dish476: {
		id: 'dish476',
		name: 'Фарш свинина-креветка',
		image: '',
		ingredients: [
			{
				name: 'Свинина',
				weight: 2,
				unit: 'кг',
				isDish: true,
				dishId: 'dish936',
			},
			{
				name: 'Креветка',
				weight: 1,
				unit: 'кг',
				isDish: true,
				dishId: 'dish#',
			},
			{ name: 'Лук зеленый', weight: 375, unit: 'гр' },
			{ name: 'Устричный соус', weight: 115, unit: 'гр' },
			{ name: 'Соевый соус', weight: 90, unit: 'гр' },
			{ name: 'Пекин капуста', weight: 3, unit: 'кг' },
			{ name: 'Соль', weight: 45, unit: 'гр' },
			{ name: 'Паста чеснок-имбирь', weight: 135, unit: 'гр' },
			{ name: 'Умами', weight: 20, unit: 'гр' },
			{ name: 'Черный перец молот', weight: 3, unit: 'гр' },
			{ name: 'Кунжутное масло', weight: 20, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// вешенки маринованные п/ф
	dish483: {
		id: 'dish483',
		name: 'Вешенки маринованные',
		image: '',
		ingredients: [
			{
				name: 'Вешенки',
				weight: 700,
				unit: 'гр',
				isDish: true,
				dishId: 'dish937',
			},
			{
				name: 'Луковое масло',
				weight: 60,
				unit: 'гр',
				isDish: true,
				dishId: 'dish403',
			},
			{ name: 'Паста с хруст чили', weight: 40, unit: 'гр' },
			{ name: 'Соевый соус', weight: 35, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// говядина васаби п/ф
	dish484: {
		id: 'dish484',
		name: 'Говядина васаби',
		image: '',
		ingredients: [
			{
				name: 'Говядина',
				weight: 80,
				unit: 'гр',
				isDish: true,
				dishId: 'dish938',
			},
			{
				name: 'Васаби',
				weight: 2,
				unit: 'гр',
				isDish: true,
				dishId: 'dish409',
			},
			{ name: 'Соевый соус', weight: 7, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// кунжут п/ф
	dish917: {
		id: 'dish917',
		name: 'Кунжут ч/б',
		image: '',
		ingredients: [
			{ name: 'Кунжут черный', weight: 500, unit: 'гр' },
			{ name: 'Кунжут белый', weight: 500, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},
	// соус нанбан п/ф
	dish485: {
		id: 'dish485',
		name: 'Соус нанбан',
		image: '',
		ingredients: [
			{
				name: 'Лук репчатый (мелкий куб)',
				weight: 100,
				unit: 'гр',
				isDish: true,
				dishId: 'dish925',
			},
			{
				name: 'Лук красный (мелкий куб)',
				weight: 100,
				unit: 'гр',
				isDish: true,
				dishId: 'dish907',
			},
			{ name: 'Майонез', weight: 300, unit: 'гр' },
			{ name: 'Соевый крабовый', weight: 40, unit: 'гр' },
			{ name: 'Уксус рисовый', weight: 10, unit: 'гр' },
			{ name: 'Сахарный песок', weight: 10, unit: 'гр' },
			{ name: 'Черный перец молотый', weight: 5, unit: 'гр' },
			{
				name: 'Яйцо отварное (куб)',
				weight: 3,
				unit: 'шт',
			},
		],
		preparation: '',
		station: 'station4',
	},

	// соус мисо майо п/ф
	dish486: {
		id: 'dish486',
		name: 'Соус мисо майо',
		image: '',
		ingredients: [
			{ name: 'Майонез', weight: 75, unit: 'гр' },
			{ name: 'Мисо светлая', weight: 10, unit: 'гр' },
			{ name: 'Шрирача', weight: 10, unit: 'гр' },
			{ name: 'Соевый краб', weight: 10, unit: 'гр' },
			{ name: 'Паста тамаринд', weight: 40, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// биск п/ф
	dish442: {
		id: 'dish442',
		name: 'Биск',
		image: '',
		ingredients: [
			{ name: 'Хитин (панцири)', weight: 3, unit: 'кг' },
			{ name: 'Лук репчатый', weight: 300, unit: 'гр' },
			{ name: 'Чеснок', weight: 100, unit: 'гр' },
			{ name: 'Растительное масло', weight: 500, unit: 'гр' },
			{ name: 'Вода канген', weight: 15, unit: 'л' },
		],
		preparation: '',
		station: 'station4',
	},

	// паста лакса п/ф
	dish487: {
		id: 'dish487',
		name: 'Паста лакса',
		image: '',
		ingredients: [
			{
				name: 'Лук красный',
				weight: 100,
				unit: 'гр',
				isDish: true,
				dishId: 'dish907',
			},
			{ name: 'Чили мелкий', weight: 10, unit: 'гр' },
			{
				name: 'Имбирь очищ',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish933',
			},
			{
				name: 'Чеснок',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish922',
			},
			{ name: 'Кумин', weight: 5, unit: 'гр' },
			{ name: 'Кориандр', weight: 3, unit: 'гр' },
			{ name: 'Карри паста красная', weight: 20, unit: 'гр' },
			{ name: 'Куркума', weight: 5, unit: 'гр' },
			{ name: 'Вода канген', weight: 500, unit: 'мл' },
		],
		preparation: '',
		station: 'station4',
	},

	// кокосовый бык п/ф
	dish488: {
		id: 'dish488',
		name: 'Кокосовый бык',
		image: '',
		ingredients: [
			{
				name: 'Говядина',
				weight: 410,
				unit: 'гр',
				isDish: true,
				dishId: 'dish938',
			},
			{
				name: 'Паста лакса',
				weight: 70,
				unit: 'гр',
				isDish: true,
				dishId: 'dish487',
			},
			{ name: 'Молоко кокосовое', weight: 400, unit: 'гр' },
			{ name: 'Соус рыбный', weight: 8, unit: 'гр' },
			{ name: 'Соль', weight: 3, unit: 'гр' },
			{ name: 'Сахарный песок', weight: 8, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// station10

	// Карамель петушок
	dish41001: {
		id: 'dish41001',
		name: 'Карамель петушок',
		image: '',
		ingredients: [
			{ name: 'Сахар', weight: 400, unit: 'гр' },
			{ name: 'Вода', weight: 200, unit: 'гр' },
			{ name: 'Корица', weight: 2, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// Молочная пропитка
	dish41002: {
		id: 'dish41002',
		name: 'Молочная пропитка',
		image: '',
		ingredients: [
			{ name: 'Молоко 3.5%', weight: 100, unit: 'гр' },
			{ name: 'Пандан', weight: 1, unit: 'гр' },
			{ name: 'Сахар', weight: 10, unit: 'гр' },
			{ name: 'Соль', weight: 2, unit: 'гр' },
			{ name: 'Яйцо (желток)', weight: 2, unit: 'шт' },
			{ name: 'Сливочное масло', weight: 5, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// Пропитка кокосовая
	dessert303: {
		id: 'dessert303',
		name: 'Пропитка кокосовая',
		image: '',
		ingredients: [
			{ name: 'Сливки 33%', weight: 250, unit: 'гр' },
			{
				name: 'Сгущёнка кокосовая',
				weight: 250,
				unit: 'гр',
				isDish: true,
				dishId: 'dish41004',
			},
			{ name: 'Молоко', weight: 250, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// Эспума мисо
	dish41005: {
		id: 'dish41005',
		name: 'Эспума мисо',
		image: '',
		ingredients: [
			{ name: 'Сливки 33%', weight: 950, unit: 'гр' },
			{ name: 'Желатин', weight: 10, unit: 'гр' },
			{ name: 'Молоко', weight: 350, unit: 'гр' },
			{ name: 'Паста мисо', weight: 80, unit: 'гр' },
			{ name: 'Мёд', weight: 160, unit: 'гр' },
			{ name: 'Сыр творожный сливочный', weight: 300, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// Сгущёнка кокосовая
	dish41004: {
		id: 'dish41004',
		name: 'Сгущёнка кокосовая',
		image: '',
		ingredients: [
			{ name: 'Молоко кокосовое aroy-d', weight: 1000, unit: 'мл' },
			{ name: 'Мёд', weight: 150, unit: 'гр' },
			{ name: 'Молоко', weight: 100, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// Тесто дубай
	dish41006: {
		id: 'dish41006',
		name: 'Тесто дубай',
		image: '',
		ingredients: [
			{ name: 'Мука рисовая', weight: 35, unit: 'гр' },
			{ name: 'Мука пшеничная', weight: 35, unit: 'гр' },
			{ name: 'Крахмал кукурузный', weight: 20, unit: 'гр' },
			{ name: 'Сахар', weight: 20, unit: 'гр' },
			{ name: 'Молоко', weight: 120, unit: 'гр' },
			{ name: 'Масло растительное', weight: 15, unit: 'гр' },
			{ name: 'Краситель черный', weight: 1, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// Карамель сливочная
	dish41007: {
		id: 'dish41007',
		name: 'Карамель сливочная',
		image: '',
		ingredients: [
			{ name: 'Сахар', weight: 80, unit: 'гр' },
			{ name: 'Сливки 33%', weight: 80, unit: 'гр' },
			{ name: 'Мёд', weight: 10, unit: 'гр' },
			{ name: 'Сливочное масло', weight: 20, unit: 'гр' },
			{ name: 'Соль', weight: 2, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// Сливочный крем
	dish41008: {
		id: 'dish41008',
		name: 'Сливочный крем',
		image: '',
		ingredients: [
			{ name: 'Сливки 33%', weight: 100, unit: 'гр' },
			{ name: 'Сахарная пудра', weight: 20, unit: 'гр' },
			{ name: 'Сыр маскарпоне', weight: 50, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// Соус из апельсина
	dish41009: {
		id: 'dish41009',
		name: 'Соус из апельсина',
		image: '',
		ingredients: [
			{
				name: 'Апельсин',
				weight: 145,
				unit: 'гр',
			},
			{ name: 'Пюре апельсин', weight: 100, unit: 'гр' },
			{ name: 'Сахар', weight: 15, unit: 'гр' },
			{ name: 'Крахмал кукурузный', weight: 3, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// Чизкейк
	dish41010: {
		id: 'dish41010',
		name: 'Чизкейк',
		image: '',
		ingredients: [
			{ name: 'Сыр маскарпоне', weight: 250, unit: 'гр' },
			{ name: 'Сливки 33%', weight: 50, unit: 'гр' },
			{
				name: 'Желатиновая масса',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish41012',
			},
			{ name: 'Шоколад белый', weight: 40, unit: 'гр' },
			{ name: 'Кокосовое молоко Aroy-D', weight: 50, unit: 'гр' },
			{ name: 'Пюре кокос', weight: 10, unit: 'гр' },
			{ name: 'Сахарная пудра', weight: 5, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// Брауни тесто
	dish41011: {
		id: 'dish41011',
		name: 'Брауни тесто',
		image: '',
		ingredients: [
			{ name: 'Мука пшеничная', weight: 150, unit: 'гр' },
			{ name: 'Матча', weight: 20, unit: 'гр' },
			{ name: 'Вода канген', weight: 75, unit: 'гр' },
			{ name: 'Сахар', weight: 200, unit: 'гр' },
			{ name: 'Шоколад белый', weight: 160, unit: 'гр' },
			{ name: 'Масло сливочное', weight: 100, unit: 'гр' },
			{ name: 'Яйцо куриное', weight: 2, unit: 'шт' },
			{ name: 'Разрыхлитель', weight: 5, unit: 'гр' },
			{ name: 'Соль', weight: 3, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// Желатиновая масса
	dish41012: {
		id: 'dish41012',
		name: 'Желатиновая масса',
		image: '',
		ingredients: [
			{ name: 'Вода', weight: 60, unit: 'гр' },
			{ name: 'Желатин', weight: 10, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// Соус маракуйя на чизкейк
	dish41013: {
		id: 'dish41013',
		name: 'Соус маракуйя на чизкейк',
		image: '',
		ingredients: [
			{ name: 'Пюре маракуйя', weight: 140, unit: 'гр' },
			{ name: 'Сахар', weight: 20, unit: 'гр' },
			{ name: 'Крахмал кукурузный', weight: 3, unit: 'гр' },
		],
		preparation: '',
		station: 'station4',
	},

	// Френч-тост с пломбиром
	dish1001: {
		id: ' dish1001',
		name: 'Френч-тост с пломбиром',
		image: '',
		ingredients: [
			{
				name: 'Бриошь',
				weight: 70,
				unit: 'гр',
			},
			{
				name: 'Пропитка молочная',
				weight: 50,
				unit: 'гр',
				isDish: true,
				dishId: 'dish41002',
			},
			{
				name: 'Карамель',
				weight: 15,
				unit: 'гр',
				isDish: true,
				dishId: 'dish41001',
			},
			{
				name: 'Соус тамаринд',
				weight: 50,
				unit: 'гр',
			},
			{ name: 'Мороженое ассорти', weight: 50, unit: 'гр' },
		],
		preparation: '',
		station: 'station10',
	},

	// J пудинг
	dish1002: {
		id: 'dish1002',
		name: 'J пудинг',
		image: '',
		ingredients: [
			{
				name: 'Мусс крем карамель',
				weight: 120,
				unit: 'гр',
				isDish: true,
				dishId: 'dish41014',
			},
			{ name: 'Воздушный рис', weight: 10, unit: 'гр' },
			{
				name: 'Карамель',
				weight: 10,
				unit: 'гр',
				isDish: true,
				dishId: 'dish41001',
			},
		],
		preparation: '',
		station: 'station10',
	},

	// Жареное мороженое
	dish1003: {
		id: 'dish1003',
		name: 'Жареное мороженое',
		image: '',
		ingredients: [
			{ name: 'Мороженое ассорти', weight: 60, unit: 'гр' },
			{
				name: 'Сгущенка кокосовая',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish41004',
			},
			{ name: 'Мука пшеничная', weight: 50, unit: 'гр' },
			{ name: 'Кляр', weight: 30, unit: 'гр' },
			{ name: 'Сухари панировочные', weight: 20, unit: 'гр' },
			{ name: 'Рисовые шарики', weight: 3, unit: 'гр' },
		],
		preparation: '',
		station: 'station10',
	},

	// Тресс лечес
	dish1004: {
		id: 'dish1004',
		name: 'Тресс лечес',
		image: '',
		ingredients: [
			{
				name: 'Крамбл шоколадный',
				weight: 13,
				unit: 'гр',
				isDish: true,
				dishId: 'dish41015',
			},
			{
				name: 'Бисквит',
				weight: 35,
				unit: 'гр',
				isDish: true,
				dishId: 'dish41016',
			},
			{
				name: 'Пропитка кокосовая',
				weight: 65,
				unit: 'гр',
				isDish: true,
				dishId: 'dish41003',
			},
			{
				name: 'Эспума',
				weight: 20,
				unit: 'гр',
				isDish: true,
				dishId: 'dish41005',
			},
		],
		preparation: '',
		station: 'station10',
	},

	// Юэбин дубай
	dish1005: {
		id: 'dish1005',
		name: 'Юэбин дубай',
		image: '',
		ingredients: [
			{
				name: 'Тесто дубай',
				weight: 30,
				unit: 'гр',
				isDish: true,
				dishId: 'dish41006',
			},
			{
				name: 'Начинка дубай',
				weight: 35,
				unit: 'гр',
				isDish: true,
				dishId: 'dish41017',
			},
			{
				name: 'Хрустящая начинка',
				weight: 15,
				unit: 'гр',
				isDish: true,
				dishId: 'dish41018',
			},
			{ name: 'Пищевое золото', weight: 1, unit: 'гр' },
		],
		preparation: '',
		station: 'station10',
	},
}
