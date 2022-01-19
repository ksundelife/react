import React from 'react';
import styles from './UserList.module.css';

export const UserList = () => {
	const textAttr = {'data-text':'some user'};
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
				<a href="/#" className={styles.panel__link} {...textAttr}><i className={['fas','fa-user-secret'].join(' ')}></i></a>
				<a href="/#" className={styles.panel__link} {...textAttr}><i className={['fas','fa-user-secret'].join(' ')}></i></a>
				<a href="/#" className={styles.panel__link} {...textAttr}><i className={['fas','fa-user-secret'].join(' ')}></i></a>
				<a href="/#" className={styles.panel__link} {...textAttr}><i className={['fas','fa-user-secret'].join(' ')}></i></a>
			</div>
		</div>
	</div>
	)
}