import { useState, useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { addChatAction } from '../store/chats';

export const useAddChatInput = () => {
    const [visibleInputChatAdd, setVisibleInputChatAdd] = useState(false);
    const [newChatName, setNewChatName] = useState("");
    const dispatch = useDispatch();

    const handleCloseInputChatAdd = () => setVisibleInputChatAdd(false);
    const handleOpenInputChatAdd = () => setVisibleInputChatAdd(true);
    
    const handleChangeNewChatName = useCallback((event) => {
        setNewChatName(event.target.value);
    }, []);

    const onAddChat = useCallback((event) => {
        event.preventDefault();
        dispatch(addChatAction(newChatName));
        setNewChatName("");
        handleCloseInputChatAdd();
    }, [newChatName, dispatch]);

    return {
        newChatName,
        visibleInputChatAdd,
        handleCloseInputChatAdd,
        handleOpenInputChatAdd,
        handleChangeNewChatName,
        onAddChat
    }
};