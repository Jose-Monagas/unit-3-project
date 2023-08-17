import styles from './WorkoutItem.module.scss';

export default function WorkoutItem({ workoutItem, isPaid, handleChangeQty }) {
	console.log(workoutItem);
	return (
		<div className={styles.WorkoutItem}>
			<div>{workoutItem.exercise.name}</div>
			<button
				className="btn-xs"
				onClick={() => handleChangeQty(workoutItem.id, workoutItem.sets - 1)}
			>
				−
			</button>
			<div>Sets: {workoutItem.sets}</div>
			<button
				className="btn-xs"
				onClick={() => handleChangeQty(workoutItem.id, workoutItem.sets + 1)}
			>
				+
			</button>
			<div>Reps: {workoutItem.reps}</div>
		</div>
	);
}
