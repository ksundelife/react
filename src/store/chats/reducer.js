import { ADD_CHAT, REMOVE_CHAT } from "./actions";

const initialState = {
    chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
    switch (action?.type) {
        case ADD_CHAT: {
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: Date.now(),
                        name: action.name,
                    },
                ],
            }
        }
        case REMOVE_CHAT: {
            return {
                ...state,
                chatList: state.chatList.filter((item) => item.id !== action.payload),
            }
        }
        default:
            return state;
    }
};
