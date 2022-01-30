import React from 'react';
import styles from './Chats.module.css';
import { UserPanel, NoChatting } from '../../components';

export const Chats = ({usersList}) => {

	return (
		<div
                className = {
                    [
                        styles.container,
                        'padding'
                    ].join(' ')
                }
        >
            <UserPanel usersList={usersList}/>
            <NoChatting/>
		</div>
	);
};