import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './UsersCard.module.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useDispatch} from "react-redux";
import {getUsersWithThunk} from "../../store/users";

export const UsersCard = ({data}) => {
    
    const dispatch = useDispatch();

  return (
    < div className = { styles.card__container}>
    {
      data?.data?.map((user) => (
        <Card key={user.id} sx={{ width: 200, marginBottom: 2, height: 180 }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100"
                    width="100"
                    image={user.avatar}
                    alt="green iguana"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.first_name} {user.last_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {user.email}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>))
    }

    <ButtonGroup variant="text" color="success" aria-label="text button group success">
    {
        Array.from({length: data?.total_pages})
        .map((_, index) => (
            <Button
                color = "success"
                onClick={() => {
                    dispatch(getUsersWithThunk(index + 1));
                }}
            >
              {index + 1}
            </Button>)
        )
    }
      </ButtonGroup>
    </div>
  );
}