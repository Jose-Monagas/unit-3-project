import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from '../App/App.module.scss';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewWorkoutPage from '../NewWorkoutPage/NewWorkoutPage';
import WorkoutHistoryPage from '../WorkoutHistoryPage/WorkoutHistoryPage';

export default function App() {
	const [user, setUser] = useState(getUser());
	return (
		<main className={styles.App}>
			{user ? (
				<>
					<Routes>
						{/* client-side route that renders the component instance if the path matches the url in the address bar */}
						<Route
							path="/workouts/new"
							element={<NewWorkoutPage user={user} setUser={setUser} />}
						/>
						<Route
							path="/workouts"
							element={<WorkoutHistoryPage user={user} setUser={setUser} />}
						/>
						{/* redirect to /workouts/new if path in address bar hasn't matched a <Route> above */}
						<Route path="/*" element={<Navigate to="/workouts/new" />} />
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
