import React from 'react';
import styles from './Container.module.css';
import { UserPanel } from './components';
import { Message } from './components';


export const Container = ({ messages }) => {
    return (
        <div
            className = {
                [
                    styles.container,
                    'padding'
                ].join(' ')
            }
        >
            <UserPanel/>
            <Message messages={ messages } />
        </div>
    )
};
