import React, { useState } from 'react';
import { Button, IconButton, TextField } from '@mui/material';
import { Container, FormContainer } from 'style-components/styledContainer';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';
import { BsHouseAdd } from 'react-icons/bs';
import { toast } from 'react-toastify';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => setShowPassword(show => !show);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const password = form.elements.password.value;

    switch (true) {
      case password.length < 7:
        toast.error('Create new password more then 7 symbols');
        break;
      case password.length > 9:
        toast.error('Create new password it`s too long (max 9 symbols)');
        break;
      default:
        const newUser = {
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: password,
        };

        dispatch(register(newUser));
        form.reset();
        break;
    }
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <TextField
          size="medium"
          label="Name"
          variant="outlined"
          name="name"
          type="text"
          title="Your name :)"
          placeholder="...John Snow..."
          required
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
            },
          }}
        />
        <TextField
          size="medium"
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          title="Your email :)"
          placeholder="example@email.com"
          required
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
            },
          }}
        />
        <TextField
          size="medium"
          label="Password"
          variant="outlined"
          name="password"
          title="Create your password for phonebook :)"
          placeholder="password: min 7 sumbols"
          required
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                onClick={togglePasswordVisibility}
                title="to see secret password :)"
                edge="end"
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
              padding: '0',
            },
            '&:hover,:focus': {
              scale: '1.1',
              backgroundColor: 'beige',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          title="Register your account :)"
          endIcon={<BsHouseAdd style={{ color: 'green' }} />}
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
          Register
        </Button>
      </FormContainer>
    </Container>
  );
}
