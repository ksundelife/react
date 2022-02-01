import React from 'react';
import styles from './Profile.module.css';

export const Profile = () => {

	return (
		<main className = {'padding'}>
			<div className={[
					styles.container,
					styles.background
				].join(' ')}>
				<h2>Profile</h2>
			</div>
		</main>
	);
}