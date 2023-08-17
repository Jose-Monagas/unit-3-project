const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseSchema = require('./exerciseSchema');

const workoutItemSchema = new Schema(
	// TODO: update to exerciseSchema
	{
		exercise: exerciseSchema,
		reps: { type: Number, default: 1 },
		sets: { type: Number, default: 1 }
	},
	{
		timestamps: true,
		toJSON: { virtuals: true }
	}
);

// workoutItemSchema.virtual('extPrice').get(function () {
// 	// 'this' is bound to the workoutItem subdoc
// 	return this.qty * this.item.price;
// });

const workoutSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User' },
		workoutItems: [workoutItemSchema],
		isFinished: { type: Boolean, default: false }
	},
	{
		timestamps: true,
		toJSON: { virtuals: true }
	}
);

workoutSchema.virtual('workoutTotal').get(function () {
	// return this.workoutItems.reduce((total, item) => total + item.extPrice, 0);
	// TODO: remove / replace
	return 10.0;
});

workoutSchema.virtual('totalQty').get(function () {
	// return this.workoutItems.reduce((total, item) => total + item.qty, 0);
	// TODO: remove / replace
	return 10.0;
});

workoutSchema.virtual('workoutId').get(function () {
	return this.id.slice(-6).toUpperCase();
});

workoutSchema.statics.createWorkout = function (userId) {
	// 'this' is the Workout model
	return this.findOneAndUpdate(
		// query
		{ user: userId, isFinished: false },
		// update
		{ user: userId },
		// upsert option will create the doc if it doesn't exist
		{ upsert: true, new: true }
	);
};

workoutSchema.methods.addExerciseToWorkout = async function (exerciseId) {
	const workout = this;
	const exercise = await mongoose.model('Exercise').findById(exerciseId);
	workout.workoutItems.push({ exercise });
	return workout.save();
};

// Instance method to set an item's qty in the cart (will add item if does not exist)
workoutSchema.methods.setItemQty = function (workoutItemId, newQty) {
	// 'this' keyword is bound to the cart (workout doc)
	const workout = this;
	console.log(workout.workoutItems[0]._id.toString() === workoutItemId);
	// Find the correct workoutItem in the workout
	const workoutItem = workout.workoutItems.find(
		(workoutItem) => workoutItem._id.toString() === workoutItemId
	);
	console.log(workoutItem);
	if (workoutItem && newQty <= 0) {
		// Calling remove, removes itself from the workout.workoutItems array
		workoutItem.remove();
	} else if (workoutItem) {
		// Set the new qty - positive value is assured thanks to prev if
		workoutItem.sets = newQty;
	}
	// return the save() method's promise
	return workout.save();
};

module.exports = mongoose.model('Workout', workoutSchema);
