import styles from './WorkoutDetail.module.scss';
import WorkoutItem from '../WorkoutItem/WorkoutItem';
import { useState, useEffect } from 'react';

// Used to display the details of any workout, including the cart (unfinished workout)
export default function WorkoutDetail({
	workout,
	handleChangeQty,
	handleChangeReps,
	handleCheckout
}) {
	if (!workout) return null;
	console.log('workout in workoutdetail: ', workout);
	const [workoutItems, setWorkoutItems] = useState(workout.workoutItems);

	console.log('workoutitems in workoutdetail: ', workoutItems);

	useEffect(() => {
		setWorkoutItems(workout.workoutItems);
	}, [workout.workoutItems]);

	const workoutItemList = workoutItems.map((item) => (
		<WorkoutItem
			workoutItem={item}
			setWorkoutItems={setWorkoutItems}
			isFinished={workout.isFinished}
			handleChangeQty={handleChangeQty}
			handleChangeReps={handleChangeReps}
			key={item._id}
		/>
	));

	return (
		<div className={styles.WorkoutDetail}>
			<div className={styles.sectionHeading}>
				{workout.isFinished ? (
					<span>
						WORKOUT <span className="smaller">{workout.workoutId}</span>
					</span>
				) : (
					<span style={{ fontSize: '2rem' }}>Current Workout 💪</span>
				)}
				<span>{new Date(workout.updatedAt).toLocaleDateString()}</span>
			</div>
			<div
				className={`${styles.workoutItemContainer} flex-ctr-ctr flex-col scroll-y`}
			>
				{workoutItems.length ? (
					<>
						{workoutItemList}
						<span className={styles.right}>
							Total Exercises: {workout.workoutTotal}
						</span>
						<section className={styles.total}>
							{workout.isFinished ? null : (
								<button
									className="btn-sm"
									onClick={handleCheckout}
									disabled={!workoutItems.length}
								>
									SAVE WORKOUT
								</button>
							)}
						</section>
					</>
				) : (
					<div className={styles.hungry}>Ready to get Swole?</div>
				)}
			</div>
		</div>
	);
}
