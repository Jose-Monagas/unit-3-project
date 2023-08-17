import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as workoutsAPI from '../../utilities/workout-api';
import styles from './NewWorkoutPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import WorkoutDetail from '../../components/WorkoutDetail/WorkoutDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewWorkoutPage({ user, setUser }) {
	const [menuItems, setMenuItems] = useState([]);
	const [activeCat, setActiveCat] = useState('');
	const [cart, setCart] = useState(null);
	const categoriesRef = useRef([]);
	const navigate = useNavigate();

	useEffect(function () {
		async function getItems() {
			const items = await itemsAPI.getAll();
			categoriesRef.current = items.reduce((cats, item) => {
				const cat = item.category.name;
				return cats.includes(cat) ? cats : [...cats, cat];
			}, []);
			setMenuItems(items);
			setActiveCat(categoriesRef.current[0]);
		}
		getItems();
		async function getCart() {
			const cart = await workoutsAPI.getCart();
			setCart(cart);
		}
		getCart();
	}, []);
	// Providing an empty 'dependency array'
	// results in the effect running after
	// the FIRST render only

	/*-- Event Handlers --*/
	async function handleAddToWorkout(exerciseId) {
		const updatedWorkout = await workoutsAPI.addExerciseToWorkout(exerciseId);
		setCart(updatedWorkout);
	}

	async function handleChangeQty(itemId, newQty) {
		const updatedCart = await workoutsAPI.setItemQtyInCart(itemId, newQty);
		setCart(updatedCart);
	}

	async function handleCheckout() {
		await workoutsAPI.checkout();
		navigate('/workouts');
	}

	return (
		<main className={styles.NewWorkoutPage}>
			<aside>
				<Logo />
				<CategoryList
					categories={categoriesRef.current}
					cart={setCart}
					setActiveCat={setActiveCat}
				/>
				<Link to="/workouts" className="button btn-sm">
					PREVIOUS ORDERS
				</Link>
				<UserLogOut user={user} setUser={setUser} />
			</aside>
			<MenuList
				menuItems={menuItems.filter((item) => item.category.name === activeCat)}
				handleAddToWorkout={handleAddToWorkout}
			/>
			<WorkoutDetail
				workout={cart}
				handleChangeQty={handleChangeQty}
				handleCheckout={handleCheckout}
			/>
		</main>
	);
}
