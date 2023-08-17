import WorkoutListItem from '../WorkoutListItem/WorkoutListItem';
import styles from './WorkoutList.module.scss';

export default function WorkoutList({
	workouts,
	activeWorkout,
	handleSelectWorkout
}) {
	const workoutItems = workouts.map((o) => (
		<WorkoutListItem
			workout={o}
			isSelected={o === activeWorkout}
			handleSelectWorkout={handleSelectWorkout}
			key={o._id}
		/>
	));

	return (
		<main className={styles.WorkoutList}>
			{workoutItems.length ? (
				workoutItems
			) : (
				<span className={styles.noWorkouts}>No Previous Workouts</span>
			)}
		</main>
	);
}
