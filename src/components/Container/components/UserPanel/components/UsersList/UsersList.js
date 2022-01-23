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

export const UsersList = ({ usersList }) => {
    return (
        <CustomList>
                {[1, 2, 3, 4].map((value, index) => ( 
                    <ListItem
                        key={value}
                        disablePadding={true}
                    >
                        <Users usersList = {usersList[index].name} key={usersList[index].id}/>
                    </ListItem>
                ))}
        </CustomList>
    );
};
