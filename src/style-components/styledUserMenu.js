import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledUserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  p {
    font-size: clamp(10px, 2vw, 20px);
    color: beige;
    font-weight: 700;
  }

  button {
    background-color: beige;
    color: black;

    &:hover,:focus {
      background-color: beige;
      scale: 1.1;
      color: red;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 500;
  text-decoration: none
`;