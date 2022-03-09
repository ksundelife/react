import { useRef, useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMessageWithThunk } from '../store/messages';


export const useInputMessageAddForm = ({ chatId }) => {

    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const [messageText, setMessageText] = useState("");

    const onChangeMessageText = useCallback((event) => {
        setMessageText(event.target.value);
    }, []);

    const resetMessageAddForm = useCallback((event) => {
        event.preventDefault();
        setMessageText("");
        inputRef.current?.focus();
    }, []);

    const onSubmitMessageAdd = useCallback((event) => {
        event.preventDefault();
        if (messageText !== "") {
            dispatch(addMessageWithThunk(chatId, 'Ksusha', messageText));
        }
        setMessageText("");
        inputRef.current?.focus();
    }, [messageText, setMessageText, dispatch, chatId]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);


    return {
        inputRef,
        onChangeMessageText,
        messageText,
        resetMessageAddForm,
        onSubmitMessageAdd
    }
}