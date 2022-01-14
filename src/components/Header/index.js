import React from 'react';
import styles from './Header.module.css';

export const Header = (props) => {
	return (
		<header>
			<h1 
				className = {
					[
						styles.alignment,
						styles.characterization
					].join(' ')
				}
			>
				Hello! My name is {props.name}!
			</h1>
		</header>
	)
}