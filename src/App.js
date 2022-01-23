import { useState, useEffect } from 'react';
import './App.css';
import { Header, Container } from './components';
import {InputForm} from "./examples/hooks";


function App() {

	const [messages, getMessages] = useState([]);

	useEffect(() => {
		const loadComoutedMessage = () => {
			if (messages[(messages.length - 1)].author === 'Ksusha') {
				getMessages(prevState => [...prevState, {
					author: 'Computed',
					text: 'Привет! Я робот и не умею нормально отвечать'
				}]);
			}
		};
		setTimeout(() => {
			loadComoutedMessage();
		}, 2000);
		
	}, [messages]);

	

	return (
		<div className = "App">
			<Header/>
			<Container messages={messages}>
			</Container>
			
			<InputForm 
				handleSubmit={(formState) => {
					getMessages([...messages, formState])
				}}
			/>

		</div>
	);
}

export default App;