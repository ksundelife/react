import { addMessageAction } from '../../store/messages';

// export const thunk = (store) => (next) => (action) => {
//     if (typeof action === 'function') {
//         return action(store.dispatch, store.getState);
//     }

//     return next(action);
// };

export const addMessageWithThunk = (chatId, author, message) => (dispatch, getState) => {
    dispatch(addMessageAction(chatId, author, message));
    if (author !== "Computed") {
        setTimeout(() => dispatch(addMessageAction(chatId, 'Computed', 'Привет! Я робот и не умею нормально отвечать!')), 1000);
    }
}