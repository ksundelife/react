import React from 'react';
import styles from './Users.module.css';
import { Link } from 'react-router-dom';
import { getChatLink } from '../../../../../../routes';
import { removeChatAction } from '../../../../../../store/chats';
import { useDispatch } from 'react-redux';

export const Users = ({ chatId, userName}) => {
    const textAttr = {'data-text': userName};
    const dispatch = useDispatch();
    const removeChat = () => dispatch(removeChatAction(chatId));
    return (
        <>
            <Link to={getChatLink(chatId)} className={styles.panel__link_mui} {...textAttr}><i className={['fas','fa-user-secret'].join(' ')}></i></Link>
            <button onClick={removeChat} className={styles.remove__btn}>X</button>
        </>
    );
}