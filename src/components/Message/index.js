import React from 'react';
import styles from './Message.module.css';

export const Message = (props) => {
	return (
	<p 
		className={[
			styles.alignment,
			styles.characterization
		].join(' ')}
	>
		{props.message}
	</p>
	)
}