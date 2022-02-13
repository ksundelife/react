import React from 'react';
import { List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Users } from './components';
import { useSelector } from 'react-redux';
import { getChatList } from '../../../../store/chats';

const CustomList = styled(List)
`
    & .MuiListItem-root {
        flex-direction: column;
    }
`;

export const UsersList = () => {
    const chatList = useSelector(getChatList);

    return (
        <CustomList>
            {chatList?.map((item) => ( 
                <ListItem
                    key={item.id}
                    disablePadding={true}
                >
                    <Users chatId={item.id} userName={item.name} key={item.id}/>
                </ListItem>
            ))}
        </CustomList>
    );
};
