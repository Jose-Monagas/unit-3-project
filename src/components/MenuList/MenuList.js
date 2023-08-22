import styles from './MenuList.module.scss';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ menuItems, handleAddToWorkout }) {
	const items = menuItems.map((item) => (
		<MenuListItem
			key={item._id}
			handleAddToWorkout={handleAddToWorkout}
			menuItem={item}
		/>
	));
	return (
		<main className={styles.MenuList}>
			<h3>Exercises</h3>
			{items}
		</main>
	);
}
