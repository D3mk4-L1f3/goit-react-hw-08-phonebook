import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  max-width: 800px;
  margin: 120px auto;
  padding: 0 10px;
`;

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column;
  
    label {
    display: flex;
    gap: 20px;
    }
    
    input {
    font-size: clamp(10px, 5vw, 20px);
    border: none;
    outline: transparent;
    background-color: beige;

    &:focus,:hover {
    scale: 1.01;
    cursor: pointer;
    }

    &::placeholder {
        text-align: center;
        font-size: clamp(5px, 5vw, 15px);
    }
  }

    button {
    display: flex;
    gap: 10px;
    font-size: clamp(12px, 2vw, 16px);
    background-color: beige;
    padding: 10px;
    cursor: pointer;
    color: black;
    border-radius: 3px;
    border: none;

    &:hover,:focus {
        scale: 1.1;
        font-weight: 700;
        background-color: beige;
    }
  } 
`;
