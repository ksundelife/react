export const getMessagesFromReducer = (state) => state.messages;

export const getChatMessages = (chatId) => (state) => getMessagesFromReducer(state).messageList[chatId];