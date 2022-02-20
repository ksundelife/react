import {useParams} from "react-router";
import { useInputMessageAddForm } from '../../hooks';
import {InputForm} from '../../components';

export const InputFormContainer = () => {
	const { chatId } = useParams();

	const {
		inputRef,
		onChangeMessageText,
		messageText,
		resetMessageAddForm,
		onSubmitMessageAdd
	} = useInputMessageAddForm({
		chatId
	});

	return ( <InputForm 
				inputRef={inputRef}
				onChangeMessageText={onChangeMessageText}
				messageText={messageText}
				resetMessageAddForm = { resetMessageAddForm }
				onSubmitMessageAdd = { onSubmitMessageAdd }
			/> );
}