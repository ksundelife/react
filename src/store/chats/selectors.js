export const getChatListFromReducer = (state) => state.chats;

export const getChatList = (state) => getChatListFromReducer(state).chatList;

export const getChatById = (chatID) => (state) => state.chats.chatList[chatID];

export const hasChatSelector = (chatID) => (state) => getChatList(state).findIndex(({
    id
}) => id.toString() === chatID) !== -1;