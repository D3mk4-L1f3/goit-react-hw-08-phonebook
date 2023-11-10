import React, { useState } from 'react';
import { Button, IconButton, TextField } from '@mui/material';
import { Container, FormContainer } from '../style-components/styledContainer';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import { GiBurningRoundShot } from 'react-icons/gi';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => setShowPassword(show => !show);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(logIn(user));
    form.reset();
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <TextField
          size="middle"
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          title="Your email :)"
          placeholder="example@email.com"
          required
          autoComplete="true"
          sx={{
            maxWidth: '100%',
            '& input': {
              backgroundColor: 'beige',
              color: 'black',
              fontSize: 'clamp(10px, 5vw, 20px)',
              '&::placeholder': {
                textAlign: 'center',
                fontSize: 'clamp(5px, 5vw, 15px)',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'red',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'green',
              borderRadius: '10px',
            },
            '&:hover,:focus': {
              scale: '1.1',
              backgroundColor: 'beige',
              borderRadius: '10px',
            },
          }}
        />

        <TextField
          size="middle"
          label="Password"
          variant="outlined"
          name="password"
          required
          title="Your password :)"
          placeholder="p_a_s_s_w_o_r_d"
          autoComplete="true"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                onClick={togglePasswordVisibility}
                edge="end"
                title="to see secret password :)"
                sx={{
                  position: 'absolute',
                  top: '10px',
                  right: '25px',
                  backgroundColor: 'transparent',
                }}
              >
                {showPassword ? (
                  <MdOutlineVisibilityOff />
                ) : (
                  <MdOutlineVisibility />
                )}
              </IconButton>
            ),
          }}
          sx={{
            maxWidth: '100%',
            paddingRight: '0',
            '& input': {
              backgroundColor: 'beige',
              color: 'black',
              fontSize: 'clamp(10px, 5vw, 20px)',
              paddingRight: '14px',
              '&::placeholder': {
                textAlign: 'center',
                fontSize: 'clamp(5px, 5vw, 15px)',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'red',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'green',
              borderRadius: '10px',
            },
            '&:hover,:focus': {
              scale: '1.1',
              backgroundColor: 'beige',
              borderRadius: '10px',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{
            display: 'flex',
            gap: '10px',
            fontSize: 'clamp(12px, 2vw, 16px)',
            padding: '10px',
            cursor: 'pointer',
            color: 'black',
            borderRadius: '10px',
            backgroundColor: 'beige',
            '&:hover': {
              scale: '1.1',
              fontWeight: '700',
              backgroundColor: 'beige',
            },
            '&:disabled': {
              backgroundColor: 'lightgray',
              color: 'gray',
            },
          }}
        >
          Enter
          <GiBurningRoundShot style={{ color: 'red' }} />
        </Button>
      </FormContainer>
    </Container>
  );
}
