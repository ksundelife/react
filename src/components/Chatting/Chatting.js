import { useEffect, useCallback } from 'react';
import { InputForm } from "../../components";
import { Message } from './components';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { getChatMessages } from '../../store/messages';
import { addMessageAction } from '../../store/messages';
import {useParams} from "react-router";

export const Chatting = () => {
	const { chatId } = useParams();
	const messageList = useSelector(getChatMessages(chatId));
	const dispatch = useDispatch();

	const loadComoutedMessage = useCallback(() => {
		if (messageList && messageList?.length !== 0 && messageList[(messageList.length - 1)].author === 'Ksusha') {
			dispatch(addMessageAction(chatId, 'Computed','Привет! Я робот и не умею нормально отвечать!'));
		}
	}, [messageList, chatId, dispatch]);

	useEffect(() => {
		setTimeout(() => {
			loadComoutedMessage();
		}, 2000);
	}, [messageList, loadComoutedMessage]);

	return (
		<>
			<Message messageList={messageList} />
			<InputForm/>

		</>
	);
}