const Workout = require('../../models/workout');

module.exports = {
	cart,
	addToWorkout,
	setItemQtyInCart,
	checkout,
	history
};

// A cart is the unpaid workout for a user
async function cart(req, res) {
	try {
		const workout = await Workout.createWorkout(req.user._id);
		res.status(200).json(workout);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

// Add an item to the cart
async function addToWorkout(req, res) {
	try {
		const workout = await Workout.createWorkout(req.user._id);
		await workout.addExerciseToWorkout(req.params.id);
		res.status(200).json(workout);
	} catch (e) {
		console.log(e);
		res.status(400).json({ msg: e.message });
	}
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
	try {
		const cart = await Workout.getCart(req.user._id);
		await cart.setItemQty(req.body.itemId, req.body.newQty);
		res.status(200).json(cart);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
	try {
		const cart = await Workout.getCart(req.user._id);
		cart.isPaid = true;
		await cart.save();
		res.status(200).json(cart);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

// Return the logged in user's paid workout history
async function history(req, res) {
	// Sort most recent workouts first
	try {
		const workouts = await Workout.find({ user: req.user._id, isPaid: true })
			.sort('-updatedAt')
			.exec();
		res.status(200).json(workouts);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}
