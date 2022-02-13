import './App.css';
import { Routes, Route } from 'react-router-dom';
import {getHomeLink, getChatsLink, getProfileLink, getChatLink} from "./routes";
import { Layout, Profile, Home, Chat, Chats, NotFound } from './pages';


function App() {

	return (
		<div className = "App">
			<Routes>
				<Route path={getHomeLink()} element={<Layout/>}>
					<Route path={getHomeLink()} element={<Home/>} />
					<Route path = {getChatsLink()} element = {<Chats/>} />
					<Route path={getChatLink()} element={<Chat/>} />
					<Route path={getProfileLink()} element={<Profile/>} />
					<Route path='*' element={<NotFound/>} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;