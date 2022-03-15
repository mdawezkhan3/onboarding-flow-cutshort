import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';

const useStylesReddit = makeStyles((theme) => ({
  root: {
    '& .MuiFilledInput-root': {
      background: 'white',
      marginTop: '-10px',
      marginBottom: '6px'
    },
    '& .MuiFilledInput-input': {
      padding: '13px 10px',
      fontWeight: 500,
      lineHeight: '24px',
      fontSize: '18px',
      borderRadius: '0px'
    },
    width: '300px !important',
    border: '2px solid #EFF0F6',
    overflow: 'hidden',
    borderRadius: '0.5rem',
    backgroundColor: '#FFFFFF',
    font: '16px',
    '&:hover': {
      backgroundColor: '#EFF0F6',
    },
    '&$focused': {
      backgroundColor: '#FCFCFC',
      borderColor: '#000000',
    },
  },
  focused: {},
  input: {
    fontSize: 18,
  },
}));

const CustomTextField = ({ endAdornment, ...rest }) => {
  const classes = useStylesReddit();

  return (
    <TextField
      {...rest}
      InputProps={{
        classes,
        disableUnderline: true,
        inputProps: {
          ...rest.inputProps,
          min: 0
        },
        endAdornment
      }}
    />
  );
};

export default CustomTextField;
