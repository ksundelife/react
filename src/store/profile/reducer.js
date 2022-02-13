import { TOGGLE_SHOW_NAME } from './actions';

const initialState = {
    status: false,
    name: null
};

export const profileReducer = (state = initialState, action) => {
    switch (action?.type) {
        case TOGGLE_SHOW_NAME: {
            return {
                ...state,
                status: !state.status,
                name: action.payload.name
            }
        }
        default: {
            return state;
        }
    }
}