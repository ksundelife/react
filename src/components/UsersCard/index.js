import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './UsersCard.module.css';
import {useDispatch} from "react-redux";
import {getUsersWithThunk} from "../../store/users";
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import { getUserLink } from '../../routes';

export const UsersCard = ({data}) => {

    const dispatch = useDispatch();

  return (
    <>
        <div className = { styles.card__container}>
            {
            data?.data?.map((user) => (
                <Card 
                    key={user.id}
                    sx={{ width: 200, height: 180,zIndex: 1 }}
                >
                    <Link to={getUserLink(user.id)}>
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
                    </Link>
                </Card>))
            }
        </div>
        <div>
            <Pagination 
                count={data?.total_pages}
                sx={{ marginBottom: 2}}
                variant="outlined"
                color="success"
                hideNextButton = { true }
                hidePrevButton = { true }
                onClick={(event) => {
                    dispatch(getUsersWithThunk(event.target.outerText));
                }}
            />
        </div>
    </>
  );
}