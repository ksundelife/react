import React from 'react';
import styles from './Header.module.css';
import { Link } from "react-router-dom";
import {
    getHomeLink,
    getChatsLink,
    getProfileLink,
    getUsersLink
} from "../../routes";

export const Header = () => {
	const navMenu = [{
	        id: Date.now(),
	        path: getHomeLink(),
	        title: 'Home',
	    },
        {
            id: Date.now(),
            path: getUsersLink(),
            title: 'Users',
        },
	    {
	        id: Date.now(),
	        path: getChatsLink(),
	        title: 'Chats',
	    },
	    {
	        id: Date.now(),
	        path: getProfileLink(),
	        title: 'Profile',
	    }
	];

	return (
            <header 
                className = {
                    [
                        styles.header,
                        'padding'
                    ].join(' ')
                }
            >
                <div className={[
                        styles.header_block,
                        styles.background
                    ].join(' ')}>
                        <Link to={navMenu[0].path} className={styles.logo_text}> net <span><i className={[styles.logo,'fas','fa-strikethrough'].join(' ')}></i></span> peacking</Link>
                        <div className={styles.nav_text}>
                            {
                                navMenu?.map((value, index) => (
                                    <Link to={navMenu[index].path} className={styles.nav_text} key={navMenu[index].id + index}>{navMenu[index].title}</Link>
                                ))
                            }
                        </div>
                    
                </div>
            </header>
	);
}