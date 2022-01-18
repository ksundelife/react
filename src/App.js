import './App.css';
import { Banner } from './components';
import { Header } from './components';
import { Message } from './components';

function App() {
	const name = "Ksusha";
	const message = "It is my first message from React!";

	return (
		<div className = "App">
			<Banner/>
			<Header name = { name }/>
			<Message message = { message }/>
		</div>
	);
}

export default App;