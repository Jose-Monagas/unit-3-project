require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function () {
	await Category.deleteMany({});
	const categories = await Category.create([
		{ name: 'Cardiovascular', sortOrder: 10 },
		{ name: 'Core', sortOrder: 20 },
		{ name: 'Endurance', sortOrder: 30 },
		{ name: 'Functional Training', sortOrder: 40 },
		{ name: 'Lower Body', sortOrder: 50 },
		{ name: 'Stretching', sortOrder: 60 },
		{ name: 'Upper Body', sortOrder: 70 }
	]);

	await Item.deleteMany({});
	const items = await Item.create([
		{
			name: 'Cycling',
			emoji: '🍔',
			category: categories[0],
			price: 10,
			imageLink:
				'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp'
		},
		{
			name: 'Running',
			emoji: '🥪',
			category: categories[0],
			price: 6.95
		},
		{ name: 'Rowing', emoji: '🌭', category: categories[0], price: 3.95 },
		{
			name: 'Jumping Rope',
			emoji: '🦀',
			category: categories[0],
			price: 14.95
		},
		{
			name: 'Jumping Rope',
			emoji: '🦀',
			category: categories[0],
			price: 14.95
		},
		{
			name: 'Plank',
			emoji: '🍤',
			category: categories[1],
			price: 13.95
		},
		{
			name: 'Crunches',
			emoji: '🦞',
			category: categories[1],
			price: 25.95
		},
		{
			name: 'Russian Twists',
			emoji: '🦞',
			category: categories[1],
			price: 25.95
		},
		{
			name: 'Flutter Kicks',
			emoji: '🦞',
			category: categories[1],
			price: 25.95
		},
		{
			name: 'Superman',
			emoji: '🦞',
			category: categories[1],
			price: 25.95
		},
		{
			name: 'Bird-Dog',
			emoji: '🦞',
			category: categories[1],
			price: 25.95
		},
		{ name: 'HIIT', emoji: '🌮', category: categories[2], price: 1.95 },
		{
			name: 'Continuous Jumping Jacks',
			emoji: '🌯',
			category: categories[2],
			price: 4.95
		},
		{ name: 'Crossfit', emoji: '🌯', category: categories[2], price: 4.95 },
		{
			name: 'Mountain Climbers',
			emoji: '🌯',
			category: categories[2],
			price: 4.95
		},
		{ name: 'Bear Crawls', emoji: '🍕', category: categories[3], price: 3.95 },
		{
			name: 'Kettebell Swings',
			emoji: '🍝',
			category: categories[3],
			price: 7.95
		},
		{
			name: "Farmer's walk",
			emoji: '🍞',
			category: categories[3],
			price: 1.95
		},
		{
			name: 'Medicine Ball Slams',
			emoji: '🍞',
			category: categories[3],
			price: 1.95
		},
		{
			name: 'TRX Suspension',
			emoji: '🍞',
			category: categories[3],
			price: 1.95
		},
		{ name: 'Squats', emoji: '🍟', category: categories[4], price: 2.95 },
		{ name: 'Leg Press', emoji: '🥗', category: categories[4], price: 3.95 },
		{
			name: 'Bulgarian Split Squats',
			emoji: '🥗',
			category: categories[4],
			price: 3.95
		},
		{ name: 'Hack Squats', emoji: '🥗', category: categories[4], price: 3.95 },
		{
			name: 'Glute Bridges',
			emoji: '🥗',
			category: categories[4],
			price: 3.95
		},
		{ name: 'Hip Thrusts', emoji: '🥗', category: categories[4], price: 3.95 },
		{ name: 'Deadlifts', emoji: '🍨', category: categories[4], price: 1.95 },
		{ name: "Child's Pose", emoji: '🧁', category: categories[5], price: 0.95 },
		{ name: 'Pigeon Pose', emoji: '🍮', category: categories[5], price: 2.95 },
		{
			name: 'Cat-Cow Strech',
			emoji: '🍮',
			category: categories[5],
			price: 2.95
		},
		{
			name: 'Foam Roller Back Stretch',
			emoji: '🍮',
			category: categories[5],
			price: 2.95
		},
		{ name: 'Cobra Strech', emoji: '🍮', category: categories[5], price: 2.95 },
		{
			name: 'Hamstring Strech',
			emoji: '🍰',
			category: categories[5],
			price: 3.95
		},
		{ name: 'Bench Press', emoji: '🥛', category: categories[6], price: 0.95 },
		{ name: 'Chest Flyes', emoji: '☕', category: categories[6], price: 0.95 },
		{
			name: 'Bent-Over Rows',
			emoji: '🍹',
			category: categories[6],
			price: 8.95
		},
		{
			name: 'Lat Pulldowns',
			emoji: '🍺',
			category: categories[6],
			price: 3.95
		},
		{
			name: 'Shoulder Press',
			emoji: '🍷',
			category: categories[6],
			price: 7.95
		},
		{
			name: 'Rear Delt Flyes',
			emoji: '🍷',
			category: categories[6],
			price: 7.95
		},
		{ name: 'Hammer Curls', emoji: '🍷', category: categories[6], price: 7.95 },
		{
			name: 'Preacher Curls',
			emoji: '🍷',
			category: categories[6],
			price: 7.95
		},
		{
			name: 'Tricep Pushdowns',
			emoji: '🍷',
			category: categories[6],
			price: 7.95
		},
		{
			name: 'Skull Crushers',
			emoji: '🍷',
			category: categories[6],
			price: 7.95
		},
		{
			name: 'Concentration Curls',
			emoji: '🍷',
			category: categories[6],
			price: 7.95
		}
	]);

	console.log(items);

	process.exit();
})();
