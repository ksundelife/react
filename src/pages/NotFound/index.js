import React from 'react';
import styles from './NotFound.module.css';

export const NotFound = () => {
	return (
		<main className = {'padding'}>
			<div className={[
					styles.container,
					styles.background,
					'padding'
				].join(' ')}>
				<h2>Page not found!</h2>
			</div>
		</main>
	);
};