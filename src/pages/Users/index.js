import React, {useEffect} from 'react';
import styles from './Users.module.css';
import { Error, Loader, UsersCard } from '../../components';
import {useDispatch, useSelector} from "react-redux";
import {getUsersWithThunk} from "../../store/users";
import {getError, getLoading, getUsers} from "../../store/users";


export const Users = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(getLoading);
	const error = useSelector(getError);
	const data = useSelector(getUsers);

	useEffect(() => {
		dispatch(getUsersWithThunk())
	}, [dispatch]);

	return (
		<main className = {'padding'}>
			<div className={[
					styles.container,
					styles.background,
					'padding'
				].join(' ')}>
				{
					error && <Error reload = { () => { dispatch(getUsersWithThunk()) }} />
				}
				<UsersCard data={data}/>

				{
					isLoading && <Loader/>
				}
				
			</div>
		</main>
	);
}