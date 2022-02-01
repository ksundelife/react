import React from 'react';
import { List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Users } from './components';

const CustomList = styled(List)
`
    & .MuiListItem-root {
        flex-direction: column;
    }
`;

export const UsersList = ({usersList}) => {
    return (
        <CustomList>
            {usersList?.map((value, index) => ( 
                <ListItem
                    key={Date.now() + index}
                    disablePadding={true}
                >
                    <Users usersList={usersList} chatParamId={usersList[index].id} usersListName={usersList[index].name} key={usersList[index].id}/>
                </ListItem>
            ))}
        </CustomList>
    );
};
