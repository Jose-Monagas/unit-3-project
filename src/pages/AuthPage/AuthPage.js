import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
	const [showLogin, setShowLogin] = useState(true);

	return (
		<main className={styles.AuthPage}>
			<div className="background-video">
				<video autoPlay loop muted className="video">
					<source src="/img/workout-wise.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<div>
				<Logo />
				<h3 onClick={() => setShowLogin(!showLogin)}>
					{showLogin ? 'SIGN UP' : 'LOG IN'}
				</h3>
			</div>
			{showLogin ? (
				<LoginForm setUser={setUser} />
			) : (
				<SignUpForm setUser={setUser} />
			)}
		</main>
	);
}
