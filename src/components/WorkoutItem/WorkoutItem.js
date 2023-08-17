import styles from './WorkoutItem.module.scss';

export default function WorkoutItem({ workoutItem, isPaid, handleChangeQty }) {
	return (
		<div className={styles.WorkoutItem}>
			<div className="flex-ctr-ctr">{workoutItem.item.emoji}</div>
			<div className="flex-ctr-ctr flex-col">
				<span className="align-ctr">{workoutItem.item.name}</span>
				<span>{workoutItem.item.price.toFixed(2)}</span>
			</div>
			<div
				className={styles.qty}
				style={{ justifyContent: isPaid && 'center' }}
			>
				{!isPaid && (
					<button
						className="btn-xs"
						onClick={() =>
							handleChangeQty(workoutItem.item._id, workoutItem.qty - 1)
						}
					>
						−
					</button>
				)}
				<span>{workoutItem.qty}</span>
				{!isPaid && (
					<button
						className="btn-xs"
						onClick={() =>
							handleChangeQty(workoutItem.item._id, workoutItem.qty + 1)
						}
					>
						+
					</button>
				)}
			</div>
			<div className={styles.extPrice}>${workoutItem.extPrice.toFixed(2)}</div>
		</div>
	);
}
