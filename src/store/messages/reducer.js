import {
    ADD_MESSAGE,
    REMOVE_MESSAGES_BY_CHAT_ID,
    SET_TIMER_ID,
    REMOVE_TIMER_ID
} from "./actions";

const initialState = {
    // to be stored like this {[chatId]: [{id, text, author}]}
    messageList: {},
    sendMessageTimerID: null,
};

export const messagesReducer = (state = initialState, action) => {
    switch (action?.type) {
        case ADD_MESSAGE: {
            const currentList = state.messageList[action.chatId] || [];

            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            id: Date.now(),
                            author: action.author,
                            message: action.message
                        }
                    ],
                },
            };
        }

        case REMOVE_MESSAGES_BY_CHAT_ID: {
            if (!state.messageList.hasOwnProperty(action.payload)) {
                return state;
            }
            const newMessage = { ...state.messageList };
            delete newMessage[action.payload];

            return {
                messageList: newMessage,
                sendMessageTimerID: null
            }
        }

        case SET_TIMER_ID: {
            return {
                ...state,
                sendMessageTimerID: action.payload
            }
        }

        case REMOVE_TIMER_ID: {
            return {
                ...state,
                sendMessageTimerID: null
            }
        }

        default: {
            return state;
        }
    }
};