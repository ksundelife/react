import React from 'react';
import styles from './Chats.module.css';
import { UserPanel, NoChatting, AddChatInputContainer} from '../../components';
import { useSelector } from 'react-redux';
import { getChatList } from '../../store/chats';

export const Chats = () => {
    const chatList = useSelector(getChatList);
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
            <NoChatting/>

            {
                chatList?.length > 0 ?
                <AddChatInputContainer/> : 
                null
            }
		</div>
	);
};