import React from 'react';
import styles from './Users.module.css';
import { Link } from 'react-router-dom';
import {getChatsLink} from '../../../../../../routes';

export const Users = ({ chatParamId, usersListName}) => {
    const textAttr = {'data-text': usersListName};
    return (
        <Link to={`${getChatsLink()}/${chatParamId}`} className={styles.panel__link_mui} {...textAttr}><i className={['fas','fa-user-secret'].join(' ')}></i></Link>
    );
}