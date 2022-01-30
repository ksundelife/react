import React from 'react';
import styles from './NoChatting.module.css';

export const NoChatting = () => {
	return (
			<div className={[
					styles.container__left,
					styles.background
				].join(' ')}
			>
                <h2>Select a chat and start communicating!</h2>
			</div>
	);
};