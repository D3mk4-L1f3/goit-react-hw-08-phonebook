import React, { useEffect, useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { MdMenu, MdLogin, MdAppRegistration } from 'react-icons/md';
import {
  AuthNavContainer,
  StyledLink,
} from '../../style-components/styledAuthNav';

export default function AuthNav() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const detectedSize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', detectedSize);
    return () => {
      window.removeEventListener('resize', detectedSize);
    };
  }, []);

  const mobileView = screenWidth <= 474;

  return (
    <AuthNavContainer>
      {mobileView ? (
        <>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MdMenu size={30} color="black" />
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>
              <StyledLink to="/login">Login</StyledLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <StyledLink to="/registration">Registration</StyledLink>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <Button
            children={
              <StyledLink to="/login">
                Login <MdLogin style={{ fill: 'currentColor' }} />
              </StyledLink>
            }
            title="If you've already registered :)"
            variant="contained"
          />
          <Button
            children={
              <StyledLink to="/registration">
                Registration{' '}
                <MdAppRegistration style={{ fill: 'currentColor' }} />
              </StyledLink>
            }
            variant="contained"
            title="If you haven't registered yet :("
          />
        </>
      )}
    </AuthNavContainer>
  );
}
