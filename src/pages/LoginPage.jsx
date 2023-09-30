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
        <Button type="submit" variant="contained">
          Enter
          <GiBurningRoundShot style={{ color: 'red' }} />
        </Button>
      </FormContainer>
    </Container>
  );
}
