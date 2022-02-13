import { useRef, useCallback, useState, useEffect} from 'react';
import {useParams} from "react-router";
import { useDispatch} from 'react-redux';
import { addMessageAction } from '../../store/messages';
import styles from './InputForm.module.css';

export const InputForm = () => {
	const { chatId } = useParams();
	const dispatch = useDispatch();
	const inputRef = useRef(null);

	const [messageText, setMessageText] = useState("");

	const onChangeMessageText = useCallback((event) => {
		setMessageText(event.target.value);
	}, []);

	const resetForm = useCallback((event) => {
		event.preventDefault();
		setMessageText("");
		inputRef.current?.focus();
	}, []);

	const onSubmit = useCallback((event) => {
		event.preventDefault();
		if (messageText !== "") {
			dispatch(addMessageAction(chatId, 'Ksusha', messageText));
		}
		setMessageText("");
		inputRef.current?.focus();
	}, [chatId, messageText, dispatch, setMessageText]);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);


	return (<form className={[styles.input_form, 'padding'].join(' ')}>
			<div className={styles.chat_input_div}>
				<input
					ref={inputRef}
					onChange = { onChangeMessageText }
					value={ messageText }
					name="text" 
					className={styles.chat_input}
				/>

				<button onClick = { resetForm } type="reset" className={styles.reset}>X</button>
			</div>
			
			<button onClick = { onSubmit } type="submit" className={styles.submit}>Send</button>
		</form>);
}