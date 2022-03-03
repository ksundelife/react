import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const UserCard = ({data}) => {

console.log(data);
  return (
        <div>
            <CardMedia
                component="img"
                height="250"
                image={data.avatar}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.first_name} {data.last_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.email}
                </Typography>
            </CardContent>
        </div>
  );
}