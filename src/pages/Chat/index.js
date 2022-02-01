import React from 'react';
import styles from './Chat.module.css';
import { UserPanel, Chatting } from '../../components';
import { useParams, Navigate } from 'react-router-dom';
import {getChatsLink} from '../../routes';
export const Chat = ({usersList}) => {
	const { chatId } = useParams();
    let chatsId = usersList?.map(item => String(item.id));
	let chackingChatId = chatsId?.indexOf(chatId) !== -1;

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
                chackingChatId ?
                <Chatting/> :
                <Navigate to={getChatsLink()} replace />
            }
		</div>
	);
};