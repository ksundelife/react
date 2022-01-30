import { useState, useEffect, useCallback } from 'react';
import { InputForm } from "../../examples/hooks";
import { Message } from './components';
// import { Switch, Route } from "react-router-dom";
// import {ChildrenAndRenderProps, Home, Chats, Profile} from "./routes";
// import {Chat} from "./routes/Chat";

export const Chatting = () => {

	const [messages, setMessages] = useState([]);

	const loadComoutedMessage = useCallback(() => {
		if (messages.length !== 0 && messages[(messages.length - 1)].author === 'Ksusha') {
			setMessages(prevState => [...prevState, {
				id: Date.now(),
				author: 'Computed',
				text: 'Привет! Я робот и не умею нормально отвечать'
			}]);
		}
	}, [messages]);

	useEffect(() => {
		setTimeout(() => {
			loadComoutedMessage();
		}, 2000);
	}, [messages, loadComoutedMessage]);

	return (
		<>
			<Message messages={ messages } />
			<InputForm 
				handleSubmit={(formState) => {
					setMessages([...messages, formState])
				}}
			/>

		</>
	);
}