import styles from './AddChatInput.module.css';

export const AddChatInput = ({
            newChatName,
            visibleInputChatAdd,
            handleCloseInputChatAdd,
            handleOpenInputChatAdd,
            handleChangeNewChatName,
            onAddChat }) => {
    return (
        <>
            <div>
                <button onClick={handleOpenInputChatAdd} className={styles.submit} style={{ display: visibleInputChatAdd ? "none" : "block" }}>Add chat</button>
            </div>
            <form style={{ display: visibleInputChatAdd ? "flex" : "none" }} onClose={handleCloseInputChatAdd} className={[styles.input_form, 'padding'].join(' ')}>
                <div className={styles.chat_input_div}>
                    <label>Enter the user name</label>
                    <input
                        value={newChatName}
                        onChange={handleChangeNewChatName}
                        name="text" 
                        className={styles.chat_input}
                    />
                </div>
                <div className={styles.buttons__container}>
                    <button onClose={handleCloseInputChatAdd} className={styles.submit}>Cancel</button>
                    <button onClick={onAddChat} disabled={!newChatName} type="submit" className={styles.submit}>Add</button>
                </div>
		    </form>
        </>
    );
};