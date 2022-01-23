import React from 'react';
import styles from './Users.module.css';

export const Users = ({usersList}) => {
    const textAttr = {'data-text': usersList};
    return (
        <a href="/#" className={styles.panel__link_mui} {...textAttr}><i className={['fas','fa-user-secret'].join(' ')}></i></a>
    );
}