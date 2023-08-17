const Exercise = require('../../models/exercise');

module.exports = {
	index,
	show
};

async function index(req, res) {
	try {
		const exercises = await Exercise.find({})
			.sort('name')
			.populate('category')
			.exec();
		// re-sort based upon the sortWorkout of the categories
		exercises.sort((a, b) => a.category.sortWorkout - b.category.sortWorkout);
		res.status(200).json(exercises);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

async function show(req, res) {
	try {
		const exercise = await Exercise.findById(req.params.id);
		res.status(200).json(exercise);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}
