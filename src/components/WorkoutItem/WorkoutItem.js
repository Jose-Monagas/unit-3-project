import styles from './WorkoutItem.module.scss';
import * as workoutsAPI from '../../utilities/workout-api';
import { is } from 'immutable';

export default function WorkoutItem({
	workoutItem,
	setWorkoutItems,
	isFinished,
	handleChangeQty,
	handleChangeReps
}) {
	async function handleDelete(e) {
		const updatedWorkout = await workoutsAPI.deleteExerciseFromWorkout(
			workoutItem.id
		);
		console.log('updated workout: ', updatedWorkout);
		setWorkoutItems(updatedWorkout.workoutItems);
	}
	return (
		<div className={styles.WorkoutItem}>
			<div>{workoutItem.exercise.name}</div>
			<div className={styles.counterRow}>
				<div className={styles.counterButtons}>
					{isFinished ? null : (
						<button
							className="btn-xs"
							onClick={() =>
								handleChangeQty(workoutItem.id, workoutItem.sets - 1)
							}
						>
							−
						</button>
					)}
					<div className={styles.textSm}>Sets: {workoutItem.sets}</div>
					{isFinished ? null : (
						<button
							className="btn-xs"
							onClick={() =>
								handleChangeQty(workoutItem.id, workoutItem.sets + 1)
							}
						>
							+
						</button>
					)}
				</div>
				<div className={styles.counterButtons}>
					{isFinished ? null : (
						<button
							className="btn-xs"
							onClick={() =>
								handleChangeReps(workoutItem.id, workoutItem.reps - 1)
							}
						>
							−
						</button>
					)}
					<div className={styles.textSm}>Reps: {workoutItem.reps}</div>
					{isFinished ? null : (
						<button
							className="btn-xs"
							onClick={() =>
								handleChangeReps(workoutItem.id, workoutItem.reps + 1)
							}
						>
							+
						</button>
					)}
				</div>
				<button
					disabled={isFinished}
					className="btn-xs"
					onClick={(e) => handleDelete(e)}
				>
					x
				</button>
			</div>
		</div>
	);
}
