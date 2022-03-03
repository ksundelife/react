import styles from './InputForm.module.css';

export const InputForm = ({ inputRef, onChangeMessageText, messageText, resetMessageAddForm, onSubmitMessageAdd }) => {

	return (<form className={[styles.input_form, 'padding'].join(' ')}>
			<div className={styles.chat_input_div}>
				<input
					ref = { inputRef }
					onChange = { onChangeMessageText }
					value={ messageText }
					name="text" 
					className={styles.chat_input}
				/>

				<button onClick = { resetMessageAddForm } type="reset" className={styles.reset}>X</button>
			</div>
			
			<button onClick = { onSubmitMessageAdd } type="submit" className={styles.submit}>Send</button>
		</form>);
}