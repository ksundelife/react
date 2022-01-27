import React from 'react';
import styles from './UserPanel.module.css';
import { UsersList } from './components';

export const UserPanel = () => {
	const usersList = [
		{
			id: Date.now() + 1,
			name: "user-1"
		},
		{
			id: Date.now() + 2,
			name: "user-2"
		},
		{
			id: Date.now() + 3,
			name: "user-3"
		},
		{
			id: Date.now() + 4,
			name: "user-4"
		}
	];

	return (
		<div className={[
				styles.container__left,
				styles.background
			].join(' ')}
		>
			<div className={styles.panel}>
				<div className={styles.panel__heading}>
					<span className={styles.logo__mini}><i className={[styles.logo,'fas','fa-strikethrough'].join(' ')}></i></span>
					<p className={styles.content__left_heading}>chats</p>
				</div>
				<div className={styles.panel__list}>
					<UsersList usersList={ usersList }/>
				</div>
			</div>
		</div>
	);
};