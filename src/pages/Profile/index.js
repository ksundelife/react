import React, { useCallback } from 'react';
import styles from './Profile.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addProfileStatusShowNameAction } from '../../store/profile';
import { getProfileStatusShowNameFromReducer } from '../../store/profile';

export const Profile = () => {
	const { status, name } = useSelector(getProfileStatusShowNameFromReducer);
	const dispatch = useDispatch();

	const setShowName = useCallback(() => {
    	dispatch(addProfileStatusShowNameAction(status));
  	}, [dispatch, status]);
	return (
		<main className = {'padding'}>
			<div className={[
					styles.container,
					styles.background
				].join(' ')}>
				<h2>Profile</h2>
				<input
					type="checkbox"
					checked={status}
					onChange={setShowName}
					className = {styles.center}
				/>
				{status ? <div>Hello, {name}</div> : <div>Hello, log in!</div> }
			</div>
		</main>
	);
}