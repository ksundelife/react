import React from 'react';
import styles from './Home.module.css';

export const Home = () => {

	return (
		<main className = {'padding'}>
			<div className={[
					styles.container,
					styles.background,
					'padding'
				].join(' ')}>
				<h2>HOME</h2>
			</div>
		</main>
	);
}