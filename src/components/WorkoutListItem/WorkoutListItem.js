import styles from './WorkoutListItem.module.scss';

export default function WorkoutListItem({
	workout,
	isSelected,
	handleSelectWorkout
}) {
	return (
		<div
			className={`${styles.WorkoutListItem} ${
				isSelected ? styles.selected : ''
			}`}
			onClick={() => handleSelectWorkout(workout)}
		>
			<div>
				<div>
					Workout Id: <span className="smaller">{workout.workoutId}</span>
				</div>
				<div className="smaller">
					{new Date(workout.updatedAt).toLocaleDateString()}
				</div>
			</div>
			<div className="align-rt">
				<div>${workout.workoutTotal.toFixed(2)}</div>
				<div className="smaller">
					{workout.totalQty} Item{workout.totalQty > 1 ? 's' : ''}
				</div>
			</div>
		</div>
	);
}
