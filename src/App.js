import { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Header, Container } from './components';
import { InputForm } from "./examples/hooks";


function App() {

	const [messages, setMessages] = useState([]);

	const loadComoutedMessage = useCallback(() => {
		if (messages[(messages.length - 1)].author === 'Ksusha' && messages.length !== 0) {
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
		<div className = "App">
			<Header/>
			<Container messages={ messages }>
			</Container>
			
			<InputForm 
				handleSubmit={(formState) => {
					setMessages([...messages, formState])
				}}
			/>

		</div>
	);
}

export default App;