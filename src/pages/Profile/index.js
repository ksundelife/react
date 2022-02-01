import React, { useCallback } from 'react';
import styles from './Profile.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_SHOW_NAME } from '../../store/profile/actions';

export const Profile = () => {
	const { status, name } = useSelector((state) => state);
	const dispatch = useDispatch();

	const setShowName = useCallback(() => {
    	dispatch({ type: TOGGLE_SHOW_NAME, payload: {status: status, name: 'Ksusha'} });
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