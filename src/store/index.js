import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { profileReducer } from './profile';
import { chatsReducer } from './chats';
import { messagesReducer } from './messages';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage
    // : window.sessionStorage,
};

const rootReducer = 
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
