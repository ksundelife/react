import {
    getSendMessageTimerID
} from '../../store/messages';

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const REMOVE_MESSAGES_BY_CHAT_ID = 'MESSAGES::REMOVE_MESSAGES_BY_CHAT_ID';
export const SET_TIMER_ID = 'MESSAGES::SET_TIMER_ID';
export const REMOVE_TIMER_ID = 'MESSAGES::REMOVE_TIMER_ID';

export const addMessageAction = (chatId, author, message) => ({
    type: ADD_MESSAGE,
    chatId,
    author,
    message
});

export const removeMessagesByChatIDAction = (chatId) => ({
    type: REMOVE_MESSAGES_BY_CHAT_ID,
    payload: chatId
})

export const sendMessageTimerIDAction = (timerId) => ({
    type: SET_TIMER_ID,
    payload: timerId
})

export const removeMessageTimerIDAction = () => ({
    type: REMOVE_TIMER_ID
})

export const clearSendMessageTimerIDAction = (dispatch, getState) => {
    const prevTimerId = getState(getSendMessageTimerID);
    clearTimeout(prevTimerId);
    dispatch(removeMessageTimerIDAction());
}

