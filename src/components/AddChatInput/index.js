import { useState, useCallback} from 'react';
import styles from './AddChatInput.module.css';
import { useDispatch } from 'react-redux';
import { addChatAction } from '../../store/chats';

export const AddChatInput = () => {
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState("");

    const dispatch = useDispatch();

    const handleClose = () => setVisible(false);
    const handleOpen = () => setVisible(true);
    
    const handleChange = useCallback((event) => {
        setNewChatName(event.target.value);
    }, []);

    const onAddChat = useCallback((event) => {
        event.preventDefault();
        dispatch(addChatAction(newChatName));
        setNewChatName("");
        handleClose();
    }, [newChatName]);

    return (
        <>
            <div>
                <button onClick={handleOpen} className={styles.submit} style={{ display: visible ? "none" : "block" }}>Add chat</button>
            </div>
            <form style={{ display: visible ? "flex" : "none" }} onClose={handleClose} className={[styles.input_form, 'padding'].join(' ')}>
                <div className={styles.chat_input_div}>
                    <label>Enter the user name</label>
                    <input
                        value={newChatName}
                        onChange={handleChange}
                        name="text" 
                        className={styles.chat_input}
                    />
                </div>
                <div className={styles.buttons__container}>
                    <button onClose={handleClose} className={styles.submit}>Cancel</button>
                    <button onClick={onAddChat} disabled={!newChatName} type="submit" className={styles.submit}>Add</button>
                </div>
		    </form>
        </>
    );
};