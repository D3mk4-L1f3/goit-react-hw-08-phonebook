import styled from 'styled-components';

export const transitionGroupStyle = {
  display: 'flex',
  flexDirection: 'column-reverse',
  maxWidth: '900',
  margin: '0 auto',
  textAlign: 'center',
  padding: 20,
  gap: 10,
};

export const ListStyled = styled.div`
  display: flex;
    align-items: center;
    border-radius: 10px;
    height: 45px;
    justify-content: space-between;
    background-color: rgba(64, 64, 64, 0.1);
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
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    }
  }
`;

export const ContactText = styled.p`
    padding: 10px;
    font-size: clamp(10px, 2vw, 20px);
    `;