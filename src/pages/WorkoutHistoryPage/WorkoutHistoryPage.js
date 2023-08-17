import styles from './WorkoutHistoryPage.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as workoutsAPI from '../../utilities/workout-api';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import WorkoutDetail from '../../components/WorkoutDetail/WorkoutDetail';

export default function WorkoutHistoryPage({ user, setUser }) {
	/*--- State --- */
	const [workouts, setWorkouts] = useState([]);
	const [activeWorkout, setActiveWorkout] = useState(null);

	/*--- Side Effects --- */
	useEffect(function () {
		// Load previous workouts (paid)
		async function fetchWorkoutHistory() {
			const workouts = await workoutsAPI.getWorkoutHistory();
			setWorkouts(workouts);
			// If no workouts, activeWorkout will be set to null below
			setActiveWorkout(workouts[0] || null);
		}
		fetchWorkoutHistory();
	}, []);

	/*--- Event Handlers --- */
	function handleSelectWorkout(workout) {
		setActiveWorkout(workout);
	}

	/*--- Rendered UI --- */
	return (
		<main className={styles.WorkoutHistoryPage}>
			<aside className={styles.aside}>
				<Logo />
				<Link to="/workouts/new" className="button btn-sm">
					NEW ORDER
				</Link>
				<UserLogOut user={user} setUser={setUser} />
			</aside>
			<WorkoutList
				workouts={workouts}
				activeWorkout={activeWorkout}
				handleSelectWorkout={handleSelectWorkout}
			/>
			<WorkoutDetail workout={activeWorkout} />
		</main>
	);
}
