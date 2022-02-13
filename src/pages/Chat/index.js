import React from 'react';
import styles from './Chat.module.css';
import { UserPanel, Chatting } from '../../components';
import { useParams, Navigate } from 'react-router-dom';
import {getChatsLink} from '../../routes';
export const Chat = ({usersList}) => {
	const { chatId } = useParams();
    let chatsId = usersList?.find(({id}) => String(id) === chatId);

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
            {
                chatsId ?
                <Chatting/> :
                <Navigate to={getChatsLink()} replace />
            }
		</div>
	);
};