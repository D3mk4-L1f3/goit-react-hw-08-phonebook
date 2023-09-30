import React, { useState } from 'react';
import { Button, IconButton, TextField } from '@mui/material';
import { Container, FormContainer } from 'style-components/styledContainer';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';
import { BsHouseAdd } from 'react-icons/bs';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => setShowPassword(show => !show);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const newUser = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(newUser));
    form.reset();
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
              >
                {showPassword ? (
                  <MdOutlineVisibilityOff
                    style={{
                      width: '23',
                      height: '23',
                      padding: '11',
                    }}
                  />
                ) : (
                  <MdOutlineVisibility
                    style={{
                      width: '23',
                      height: '23',
                      padding: '11',
                    }}
                  />
                )}
              </IconButton>
            ),
          }}
        />
        <Button
          type="submit"
          variant="contained"
          title="Register your account :)"
          endIcon={<BsHouseAdd style={{ color: 'green' }} />}
        >
          Register
        </Button>
      </FormContainer>
    </Container>
  );
}
