import React from 'react';
import { Outlet } from "react-router-dom";
import { Header } from '../../components';
import styles from './Layout.module.css';

export const Layout = () => {

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