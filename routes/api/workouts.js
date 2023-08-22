const express = require('express');
const router = express.Router();
const workoutCntrl = require('../../controllers/api/workouts');

// GET /api/workouts/cart
router.get('/cart', workoutCntrl.cart);
// GET /api/workouts/history
router.get('/history', workoutCntrl.history);
// POST /api/workouts/exercises/:id
router.post('/exercises/:id', workoutCntrl.addToWorkout);
// DELETE /api/workouts/exercises/:id
router.delete('/exercises/:id', workoutCntrl.deleteFromWorkout);
// POST /api/workouts/cart/checkout
router.post('/cart/checkout', workoutCntrl.checkout);
// POST /api/workouts/cart/qty
router.put('/cart/qty', workoutCntrl.setItemQtyInCart);
// POST /api/workouts/cart/qty
router.put('/workout-item/reps', workoutCntrl.setRepCount);

module.exports = router;
