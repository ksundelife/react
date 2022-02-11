import React from 'react';
import styles from './UserPanel.module.css';
import { UsersList } from './components';

export const UserPanel = () => {
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
						<UsersList/>
					</div>
				</div>
			</div>
	);
};