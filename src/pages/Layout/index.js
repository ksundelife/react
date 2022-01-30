import React from 'react';
import { Outlet } from "react-router-dom";
import { Header } from '../../components';
import styles from './Layout.module.css';
// import {getHomeLink, getChatsLink, getProfileLink} from "../../routes";

export const Layout = () => {
	// const navMenu = [{
	// 		id: Date.now(),
	// 		path: getHomeLink(),
	// 		title: 'Home',
	// 	},
	// 	{
	// 		id: Date.now(),
	// 		path: getChatsLink(),
	// 		title: 'Chats',
	// 	},
	// 	{
	// 		id: Date.now(),
	// 		path: getProfileLink(),
	// 		title: 'Profile',
	// 	},
	// ];

	return (
        <>
            <Header/>
			<div 
				className = {
					[
						styles.container,
						'padding'
					].join(' ')}
			>
				<Outlet/>
			</div>
        </>
	);
}