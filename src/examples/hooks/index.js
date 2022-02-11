import { useRef, useCallback, useState, useEffect} from 'react'
import styles from './InputForm.module.css';

const messageList = {
	author: '',
	text: ''
};

export const InputForm = ({ handleSubmit }) => {
	const inputRef = useRef(null);

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
		inputRef.current?.focus();
	};

	const onChangeMessageText = useCallback((event) => {
		setFormState((formState) => {
			return {
				...formState,
				id: Date.now(),
				author: 'Ksusha',
				text: event.target.value,
			}
		});	
	}, []);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);


	return (<form onSubmit = { onSubmit } onReset = { resetForm } className={[styles.input_form, 'padding'].join(' ')}>
			<div className={styles.chat_input_div}>
				<input
					ref={inputRef}
					onChange = { onChangeMessageText }
					value={ formState.text }
					type="text"
					name="text" 
					className={styles.chat_input}
				/>

				<button type="reset" className={styles.reset}>X</button>
			</div>
			
			<button type="submit" className={styles.submit}>Send</button>
		</form>);
}