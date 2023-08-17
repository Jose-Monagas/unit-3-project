require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Exercise = require('../models/exercise');

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

	await Exercise.deleteMany({});
	const exercises = await Exercise.create([
		{
			name: 'Cycling',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[0],
			sets: 10
		},
		{
			name: 'Running',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[0],
			sets: 6.95
		},
		{
			name: 'Rowing',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[0],
			sets: 3.95
		},
		{
			name: 'Jumping Rope',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[0],
			sets: 14.95
		},
		{
			name: 'Jumping Rope',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[0],
			sets: 14.95
		},
		{
			name: 'Plank',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[1],
			sets: 13.95
		},
		{
			name: 'Crunches',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[1],
			sets: 25.95
		},
		{
			name: 'Russian Twists',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[1],
			sets: 25.95
		},
		{
			name: 'Flutter Kicks',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[1],
			sets: 25.95
		},
		{
			name: 'Superman',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[1],
			sets: 25.95
		},
		{
			name: 'Bird-Dog',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[1],
			sets: 25.95
		},
		{
			name: 'HIIT',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[2],
			sets: 1.95
		},
		{
			name: 'Continuous Jumping Jacks',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[2],
			sets: 4.95
		},
		{
			name: 'Crossfit',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[2],
			sets: 4.95
		},
		{
			name: 'Mountain Climbers',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[2],
			sets: 4.95
		},
		{
			name: 'Bear Crawls',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[3],
			sets: 3.95
		},
		{
			name: 'Kettebell Swings',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[3],
			sets: 7.95
		},
		{
			name: "Farmer's walk",
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[3],
			sets: 1.95
		},
		{
			name: 'Medicine Ball Slams',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[3],
			sets: 1.95
		},
		{
			name: 'TRX Suspension',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[3],
			sets: 1.95
		},
		{
			name: 'Squats',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[4],
			sets: 2.95
		},
		{
			name: 'Leg Press',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[4],
			sets: 3.95
		},
		{
			name: 'Bulgarian Split Squats',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[4],
			sets: 3.95
		},
		{
			name: 'Hack Squats',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[4],
			sets: 3.95
		},
		{
			name: 'Glute Bridges',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[4],
			sets: 3.95
		},
		{
			name: 'Hip Thrusts',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[4],
			sets: 3.95
		},
		{
			name: 'Deadlifts',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[4],
			sets: 1.95
		},
		{
			name: "Child's Pose",
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[5],
			sets: 0.95
		},
		{
			name: 'Pigeon Pose',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[5],
			sets: 2.95
		},
		{
			name: 'Cat-Cow Strech',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[5],
			sets: 2.95
		},
		{
			name: 'Foam Roller Back Stretch',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[5],
			sets: 2.95
		},
		{
			name: 'Cobra Strech',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[5],
			sets: 2.95
		},
		{
			name: 'Hamstring Strech',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[5],
			sets: 3.95
		},
		{
			name: 'Bench Press',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[6],
			sets: 0.95
		},
		{
			name: 'Chest Flyes',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[6],
			sets: 0.95
		},
		{
			name: 'Bent-Over Rows',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[6],
			sets: 8.95
		},
		{
			name: 'Lat Pulldowns',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[6],
			sets: 3.95
		},
		{
			name: 'Shoulder Press',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[6],
			sets: 7.95
		},
		{
			name: 'Rear Delt Flyes',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[6],
			sets: 7.95
		},
		{
			name: 'Hammer Curls',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[6],
			sets: 7.95
		},
		{
			name: 'Preacher Curls',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[6],
			sets: 7.95
		},
		{
			name: 'Tricep Pushdowns',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[6],
			sets: 7.95
		},
		{
			name: 'Skull Crushers',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[6],
			sets: 7.95
		},
		{
			name: 'Concentration Curls',
			url: 'https://i.postimg.cc/7LSJC2KS/664caa986ef2d369faad2e68a4f30e565f-schwinn-bike.webp',
			category: categories[6],
			sets: 7.95
		}
	]);

	console.log(exercises);

	process.exit();
})();
