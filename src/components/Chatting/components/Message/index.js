import React from 'react';
import styles from './Message.module.css';

export const Message = ({messageList}) => {
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
					messageList?.map((message) => <li key={message.id}>
						<span>{ message.author }: { message.message }</span>
					</li>)
				}
			</ul>
        </div>
    );
}