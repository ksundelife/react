import {
    addMessageAction,
    sendMessageTimerIDAction,
    clearSendMessageTimerIDAction,
    getSendMessageTimerID
} from '../../store/messages';

// export const thunk = (store) => (next) => (action) => {
//     if (typeof action === 'function') {
//         return action(store.dispatch, store.getState);
//     }

//     return next(action);
// };

export const addMessageWithThunk = (chatId, author, message) => (dispatch, getState) => {
    dispatch(clearSendMessageTimerIDAction);
    dispatch(addMessageAction(chatId, author, message));

    const prevTimerId = getState(getSendMessageTimerID);
    console.log(prevTimerId === null);
    if (author === "Computed" && prevTimerId !== null) {
        return;
    }

    const timerId = setTimeout(() => {
        dispatch(addMessageAction(chatId, 'Computed', 'Привет! Я робот и не умею нормально отвечать!'));
    }, 1000);

    dispatch(sendMessageTimerIDAction(timerId));
}