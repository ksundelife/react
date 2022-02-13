export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const REMOVE_CHAT = 'CHATS::REMOVE_CHAT';


export const addChatAction = (name) => ({
    type: ADD_CHAT,
    name,
});

export const removeChatAction = (chatID) => ({
    type: REMOVE_CHAT,
    payload: chatID
})