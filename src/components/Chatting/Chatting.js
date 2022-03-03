import { InputFormContainer } from "../../components";
import { Message } from './components';
import { useSelector } from 'react-redux';
import { getChatMessages } from '../../store/messages';
import {useParams} from "react-router";

export const Chatting = () => {
	const { chatId } = useParams();
	const messageList = useSelector(getChatMessages(chatId));

	return (
		<>
			<Message messageList={messageList} />
			<InputFormContainer/>
		</>
	);
}