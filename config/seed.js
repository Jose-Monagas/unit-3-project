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
			url: 'https://i.postimg.cc/597STnnj/running-workout-intr-420x420-0-93f2e969e6c5427d84d390aed29094ac.jpg',
			category: categories[0],
			sets: 6.95
		},
		{
			name: 'Rowing',
			url: 'https://i.postimg.cc/50FBtwmB/103547838627870.jpg',
			category: categories[0],
			sets: 3.95
		},
		{
			name: 'Jumping Rope',
			url: 'https://i.postimg.cc/tJpGSg16/IMG-6058-1024x1024.jpg',
			category: categories[0],
			sets: 14.95
		},
		{
			name: 'Plank',
			url: 'https://i.postimg.cc/BQD0QqMK/low-plank-leg-lift-69d7f80e4f9d47d18d82cedb61ed879e.jpg',
			category: categories[1],
			sets: 13.95
		},
		{
			name: 'Crunches',
			url: 'https://i.postimg.cc/JhzcKzFD/800-exercise-twist-crunch.webp',
			category: categories[1],
			sets: 25.95
		},
		{
			name: 'Russian Twists',
			url: 'https://i.postimg.cc/SxkNB2ks/zw1zlt0d-720.jpg',
			category: categories[1],
			sets: 25.95
		},
		{
			name: 'Flutter Kicks',
			url: 'https://i.postimg.cc/RVP0KCwb/skimble-workout-trainer-exercise-flutter-kicks-3-iphone.jpg',
			category: categories[1],
			sets: 25.95
		},
		{
			name: 'Superman',
			url: 'https://i.postimg.cc/7YVdsf6w/Superman-core0.webp',
			category: categories[1],
			sets: 25.95
		},
		{
			name: 'Bird-Dog',
			url: 'https://i.postimg.cc/t4HBdyyW/bird-dog.jpg',
			category: categories[1],
			sets: 25.95
		},
		{
			name: 'HIIT',
			url: 'https://i.postimg.cc/HxtLzRS6/Battle-Ropes-HIIT.webp',
			category: categories[2],
			sets: 1.95
		},
		{
			name: 'Continuous Jumping Jacks',
			url: 'https://i.postimg.cc/Zn3TWQGb/DSC02401.webp',
			category: categories[2],
			sets: 4.95
		},
		{
			name: 'Crossfit',
			url: 'https://i.postimg.cc/kG8fLNbY/photo-1601422407692-ec4eeec1d9b3-640w.webp',
			category: categories[2],
			sets: 4.95
		},
		{
			name: 'Mountain Climbers',
			url: 'https://i.postimg.cc/GmBJfxnF/JDdef-Ey-TSFj9kt5-Qvj-Zqt-B-1200-80.jpg',
			category: categories[2],
			sets: 4.95
		},
		{
			name: 'Bear Crawls',
			url: 'https://i.postimg.cc/Jnwhdy2p/bear-crawl-6-jpg-400x330-q95-crop-filters-detail.jpg',
			category: categories[3],
			sets: 3.95
		},
		{
			name: 'Kettebell Swings',
			url: 'https://i.postimg.cc/cLTrD4R3/kettlebell-swing-form.jpg',
			category: categories[3],
			sets: 7.95
		},
		{
			name: "Farmer's walk",
			url: 'https://i.postimg.cc/3N89mwYw/5-Moves-Core-Ab-Dumbell-Farmers-Walk0.webp',
			category: categories[3],
			sets: 1.95
		},
		{
			name: 'Medicine Ball Slams',
			url: 'https://i.postimg.cc/431CS9c1/1-8edc8c93-6b37-433a-a1e8-243c4de27ea2.webp',
			category: categories[3],
			sets: 1.95
		},
		{
			name: 'TRX Suspension',
			url: 'https://i.postimg.cc/gcqXwDx4/suspension-exercise-royalty-free-image-625859782-1542746842.jpg',
			category: categories[3],
			sets: 1.95
		},
		{
			name: 'Squats',
			url: 'https://i.postimg.cc/7Z1cR9NC/main-qimg-7f50813449cf3f5d65e99d8a505ff246.webp',
			category: categories[4],
			sets: 2.95
		},
		{
			name: 'Leg Press',
			url: 'https://i.postimg.cc/FRCYmjhm/leg-press-variations.jpg',
			category: categories[4],
			sets: 3.95
		},
		{
			name: 'Bulgarian Split Squats',
			url: 'https://i.postimg.cc/44LsyL6z/Bulgarian-Split-Squat.jpg',
			category: categories[4],
			sets: 3.95
		},
		{
			name: 'Hack Squats',
			url: 'https://i.postimg.cc/nhzkZ14S/thats-how-you-train-legs-calves-royalty-free-image-530946347-1561127472.jpg',
			category: categories[4],
			sets: 3.95
		},
		{
			name: 'Glute Bridges',
			url: 'https://i.postimg.cc/tTfkmnZv/Adobe-Stock-252862844.jpg',
			category: categories[4],
			sets: 3.95
		},
		{
			name: 'Hip Thrusts',
			url: 'https://i.postimg.cc/HW0nsD3j/hip-thrust-11090.webp',
			category: categories[4],
			sets: 3.95
		},
		{
			name: 'Deadlifts',
			url: 'https://i.postimg.cc/JzBpZn91/Deadlifts-Should-You-Train-Them-With-Back-Or-Legs-graphics-2-700xh.jpg',
			category: categories[4],
			sets: 1.95
		},
		{
			name: "Child's Pose",
			url: 'https://i.postimg.cc/fTwyrzmD/child-pose-stretch.jpg',
			category: categories[5],
			sets: 0.95
		},
		{
			name: 'Pigeon Pose',
			url: 'https://i.postimg.cc/ryYyQ1VC/variation-of-half-pigeon-pose-34dc127c903f9050e34084069308035a.jpg',
			category: categories[5],
			sets: 2.95
		},
		{
			name: 'Cat-Cow Strech',
			url: 'https://i.postimg.cc/yx4c2MBc/Adobe-Stock-275104849.jpg',
			category: categories[5],
			sets: 2.95
		},
		{
			name: 'Cobra Strech',
			url: 'https://i.postimg.cc/RZLjbm15/Upward-Facing-Dog-Mod-1-Andrew-Clark-e1670972827524.webp',
			category: categories[5],
			sets: 2.95
		},
		{
			name: 'Hamstring Strech',
			url: 'https://i.postimg.cc/D0fWLncv/ASMY-Website15.jpg',
			category: categories[5],
			sets: 3.95
		},
		{
			name: 'Bench Press',
			url: 'https://i.postimg.cc/1R2m3VHM/Bench-press-woman-By-4-PM-production-scaled.jpg',
			category: categories[6],
			sets: 0.95
		},
		{
			name: 'Chest Flyes',
			url: 'https://i.postimg.cc/ncqX81Jq/dumbbell-fly-on-incline-bench-steps-162974795-99bf05fa00e14abf8c240b41ed567fcd.jpg',
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
			name: 'Shoulder Press',
			url: 'https://i.postimg.cc/GhbC2PDF/image4-d0fe4791-92f4-4154-8a6a-edc63905eef3-1024x1024.webp',
			category: categories[6],
			sets: 7.95
		},
		{
			name: 'Hammer Curls',
			url: 'https://i.postimg.cc/7L5D4x2j/hammer-curls-1581441441.jpg',
			category: categories[6],
			sets: 7.95
		},
		{
			name: 'Tricep Pushdowns',
			url: 'https://i.postimg.cc/pdWhJ53z/shutterstock-507146491-1000x.webp',
			category: categories[6],
			sets: 7.95
		},
		{
			name: 'Concentration Curls',
			url: 'https://i.postimg.cc/PJsdKBN9/seated-concentration-curl.webp',
			category: categories[6],
			sets: 7.95
		}
	]);

	console.log(exercises);

	process.exit();
})();
