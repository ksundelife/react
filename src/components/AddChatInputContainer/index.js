import { useAddChatInput } from '../../hooks';
import {AddChatInput} from '../../components';

export const AddChatInputContainer = () => {

	const {
		newChatName,
		visibleInputChatAdd,
		handleCloseInputChatAdd,
		handleOpenInputChatAdd,
		handleChangeNewChatName,
		onAddChat
	} = useAddChatInput();

	return ( <AddChatInput 
				newChatName={newChatName}
				visibleInputChatAdd={visibleInputChatAdd}
				handleCloseInputChatAdd={handleCloseInputChatAdd}
				handleOpenInputChatAdd = { handleOpenInputChatAdd }
				handleChangeNewChatName = { handleChangeNewChatName }
				onAddChat = { onAddChat}
			/> );
}