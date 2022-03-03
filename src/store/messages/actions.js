export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const REMOVE_MESSAGES_BY_CHAT_ID = 'MESSAGES::REMOVE_MESSAGES_BY_CHAT_ID';

export const addMessageAction = (chatId, author, message) => ({
    type: ADD_MESSAGE,
    chatId,
    author,
    message
});