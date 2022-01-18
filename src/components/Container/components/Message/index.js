import React from 'react';
import styles from './Message.module.css';

export const Message = ({messages}) => {
    return (
        <div
            className = {
                [
                    styles.container__right,
                    styles.background
                ].join(' ')
            }
        >
            <ul className={styles.messages_list}>
				{
					messages.map((message, id) => <li key={id}>
						<span>{ message.author }: { message.text }</span>
					</li>)
				}
			</ul>
        </div>
    )
}