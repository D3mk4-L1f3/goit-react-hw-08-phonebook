import styled from 'styled-components';

export const transitionGroupStyle = {
  display: 'flex',
  flexDirection: 'column-reverse',
  textAlign: 'center',
  gap: 20,
};

export const ListStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  height: 45px;
  padding: 0 10px;
  background-color: rgba(50, 50, 50, 0.1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  
;

  button {
    font-size: clamp(10px, 2vw, 16px);
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    background-color: beige;

    &:hover,:focus {
        scale: 1.3;
        background-color: rgba(255, 0, 0, 0.1);
    }
  }
`;

export const ContactText = styled.p`
    padding: 10px;
    font-size: clamp(10px, 2vw, 20px);
    `;