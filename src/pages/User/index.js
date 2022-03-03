import React from 'react';
import styles from './User.module.css';
import { UserCard } from '../../components';
import { useParams, Navigate } from 'react-router-dom';
import { getUsersLink } from '../../routes';
import { useSelector } from 'react-redux';
import { getUsers } from '../../store/users';

export const User = () => {
	const { userId } = useParams();
    const userList = useSelector(getUsers);
    let getUserID = userList?.data?.find(user => String(user.id) === userId);
    let userID = String(userList?.data?.find(user => String(user.id) === userId).id) === userId;

	return (
        <main className = {'padding'}>
			<div className={[
					styles.container,
					styles.background,
					'padding'
				].join(' ')}>
				{
                userID ?
                <UserCard data={getUserID}/> :
                <Navigate to={getUsersLink()} replace />
            }
			</div>
		</main>
	);
};