import React from 'react';
import styles from './NoChatting.module.css';
import { useSelector } from 'react-redux';
import { getChatList } from '../../store/chats';
import { AddChatInput } from '../AddChatInput';

export const NoChatting = () => {
	const chatList = useSelector(getChatList);
	return (
			<div className={[
					styles.container__left,
					styles.background
				].join(' ')}
			>
                {
					chatList.length > 0 ?
					<h2>Select a chat and start communicating!</h2> :
					<div>
						You don 't have chats yet.
						<AddChatInput/>
					</div>
					
				}
			</div>
	);
};