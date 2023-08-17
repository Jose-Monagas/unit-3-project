import styles from './WorkoutDetail.module.scss';
import WorkoutItem from '../WorkoutItem/WorkoutItem';

// Used to display the details of any workout, including the cart (unpaid workout)
export default function WorkoutDetail({
	workout,
	handleChangeQty,
	handleCheckout
}) {
	if (!workout) return null;

	const workoutItems = workout.workoutItems.map((item) => (
		<WorkoutItem
			workoutItem={item}
			isPaid={workout.isPaid}
			handleChangeQty={handleChangeQty}
			key={item._id}
		/>
	));

	return (
		<div className={styles.WorkoutDetail}>
			<div className={styles.sectionHeading}>
				{workout.isPaid ? (
					<span>
						ORDER <span className="smaller">{workout.workoutId}</span>
					</span>
				) : (
					<span>NEW ORDER</span>
				)}
				<span>{new Date(workout.updatedAt).toLocaleDateString()}</span>
			</div>
			<div
				className={`${styles.workoutItemContainer} flex-ctr-ctr flex-col scroll-y`}
			>
				{workoutItems.length ? (
					<>
						{workoutItems}
						<section className={styles.total}>
							{workout.isPaid ? (
								<span className={styles.right}>TOTAL&nbsp;&nbsp;</span>
							) : (
								<button
									className="btn-sm"
									onClick={handleCheckout}
									disabled={!workoutItems.length}
								>
									CHECKOUT
								</button>
							)}
							<span>{workout.totalQty}</span>
							<span className={styles.right}>
								${workout.workoutTotal.toFixed(2)}
							</span>
						</section>
					</>
				) : (
					<div className={styles.hungry}>Hungry?</div>
				)}
			</div>
		</div>
	);
}
