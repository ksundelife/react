export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessageAction = (chatId, author, message) => ({
    type: ADD_MESSAGE,
    chatId,
    author,
    message,
});