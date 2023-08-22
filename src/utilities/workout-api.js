import sendRequest from './send-request';

const BASE_URL = '/api/workouts';

// Retrieve an unpaid workout for the logged in user
export function getCart() {
	return sendRequest(`${BASE_URL}/cart`);
}

// Add an exercise to the workout
export function addExerciseToWorkout(exerciseId) {
	return sendRequest(`${BASE_URL}/exercises/${exerciseId}`, 'POST');
}

// Delete exercise from workout
export function deleteExerciseFromWorkout(exerciseId) {
	console.log('test');
	return sendRequest(`${BASE_URL}/exercises/${exerciseId}`, 'DELETE');
}

// Update the item's qty in the cart
// Will add the item to the workout if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setItemQtyInCart(itemId, newQty) {
	return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

// Update the item's qty in the cart
// Will add the item to the workout if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setRepCount(workoutItemId, newQty) {
	console.log(workoutItemId, 'setRepCount');
	return sendRequest(`${BASE_URL}/workout-item/reps/`, 'PUT', {
		workoutItemId,
		newQty
	});
}

// Updates the workout's (cart's) isPaid property to true
export function checkout() {
	// Changing data on the server, so make it a POST request
	return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

// Return all paid workouts for the logged in user
export function getWorkoutHistory() {
	return sendRequest(`${BASE_URL}/history`);
}
