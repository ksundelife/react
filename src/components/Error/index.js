import React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

export const Error = ({ reload }) => {
  return (
      <Alert severity="error">This is an error alert — check it out!
        <Button onClick = { reload }>
          Reload
        </Button>
      </Alert>
  );
}