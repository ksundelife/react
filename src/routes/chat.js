import {getChatsLink} from './chats';
export const getChatLink = (chatId = ':chatId') => [getChatsLink(), chatId].join('/');