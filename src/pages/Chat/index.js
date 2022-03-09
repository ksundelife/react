import React from 'react';
import styles from './Chat.module.css';
import { UserPanel, Chatting } from '../../components';
import { useParams, Navigate } from 'react-router-dom';
import { getChatsLink } from '../../routes';
import { useSelector } from 'react-redux';
import { getChatList } from '../../store/chats';

export const Chat = () => {
	const { chatId } = useParams();
    const chatList = useSelector(getChatList);
    let chatsId = chatList?.find(({id}) => String(id) === chatId);

	return (
		<div
            className = {
                [
                    styles.container,
                    'padding'
                ].join(' ')
            }
        >
            <UserPanel/>
            {
                chatsId ?
                <Chatting/> :
                <Navigate to={getChatsLink()} replace />
            }
            
		</div>
	);
};