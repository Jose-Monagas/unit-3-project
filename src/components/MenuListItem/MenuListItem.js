import styles from './MenuListItem.module.scss';

export default function MenuListItem({ menuItem, handleAddToWorkout }) {
	return (
		<div className={styles.MenuListItem}>
			<img src={menuItem.url} height={'100px'} width={'100px'}></img>
			<div className={styles.name}>{menuItem.name}</div>
			<div className={styles.buy}>
				<button
					className="btn-sm"
					onClick={() => handleAddToWorkout(menuItem._id)}
				>
					ADD
				</button>
			</div>
		</div>
	);
}
