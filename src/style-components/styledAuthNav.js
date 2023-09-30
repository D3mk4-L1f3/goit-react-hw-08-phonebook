import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: red;
    font-weight: 700;
  }
`;

export const AuthNavContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  button {
    background-color: beige; 
    font-weight: 700;
    color: black; 
    border-radius: 10px;

    &:hover,:focus {
      background-color: beige;
      scale: 1.1;
    }
  }

a {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;