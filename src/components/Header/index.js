import React from 'react';
import styles from './Header.module.css';

export const Header = () => {

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
				<a href="/#" className={styles.logo_text}> net <span><i className={[styles.logo,'fas','fa-strikethrough'].join(' ')}></i></span> peacking</a>
			</div>
		</header>
	);
}