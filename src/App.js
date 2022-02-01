import './App.css';
import { Routes, Route } from 'react-router-dom';
import {getHomeLink, getChatsLink, getProfileLink, getChatLink} from "./routes";
import { Layout, Profile, Home, Chat, Chats, NotFound } from './pages';


function App() {

	const usersList = [
		{
			id: Date.now() + 1,
			name: "user-1"
		},
		{
			id: Date.now() + 2,
			name: "user-2"
		},
		{
			id: Date.now() + 3,
			name: "user-3"
		},
		{
			id: Date.now() + 4,
			name: "user-4"
		}
	];

	return (
		<div className = "App">
			<Routes>
				<Route path={getHomeLink()} element={<Layout/>}>
					<Route path={getHomeLink()} element={<Home/>} />
					<Route path = {getChatsLink()} element = {<Chats usersList={usersList}/>} />
					<Route path={getChatLink()} element={<Chat usersList={usersList}/>} />
					<Route path={getProfileLink()} element={<Profile/>} />
					<Route path='*' element={<NotFound/>} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;