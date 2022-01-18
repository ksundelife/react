import React from 'react';
import styles from './Container.module.css';

import {UserList} from './components/UserList';
import {Message}  from './components/Message';

export const Container = ({messages}) => {
    return (
        <div
            className = {
                [
                    styles.container,
                    'padding'
                ].join(' ')
            }
        >
            <UserList/>
            <Message messages={messages} />
        </div>
    )
}
