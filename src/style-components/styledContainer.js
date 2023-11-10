import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  max-width: 800px;
  margin: 120px auto;
  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
    padding-right: 0;
  }
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
`;
