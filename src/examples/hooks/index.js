import {  useCallback, useState } from 'react'
import styles from './InputForm.module.css';

const messageList = {
	author: '',
	text: ''
};

export const InputForm = ({ handleSubmit }) => {
	const [formState, setFormState] = useState(messageList);

	const resetForm = useCallback(() => {
		setFormState(messageList);
	}, []);

	const onSubmit = (event) => {
		event.preventDefault();

		if (formState.text !== "") {
			if (handleSubmit) {
				handleSubmit(formState);
			}
			resetForm();
		}
	};

	const onChangeMessageText = useCallback((event) => {
		setFormState((formState) => {
			return {
				...formState,
				author: 'Ksusha',
				text: event.target.value,
			}
		});	
	}, []);


	return <form onSubmit = { onSubmit } onReset = { resetForm } className={[styles.input_form, 'padding'].join(' ')}>
			<input onChange = { onChangeMessageText } value = { formState.text }
				type="text"
				name="text" 
				className={styles.chat_input}
			/>

			<button type="reset" className={styles.reset}>X</button>
			<button type="submit" className={styles.submit}>Отправить</button>
		</form>
}