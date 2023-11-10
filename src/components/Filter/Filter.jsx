import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice';
import { RiMenuSearchLine } from 'react-icons/ri';
import { TextField } from '@mui/material';
import { FormContainer } from 'style-components/styledContainer';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = e => {
    const filterText = e.target.value;
    dispatch(filter(filterText));
  };

  return (
    <FormContainer>
      <TextField
        size="medium"
        label={<RiMenuSearchLine />}
        title="Fast find your`s contact :)"
        placeholder="... searching ..."
        variant="outlined"
        type="text"
        onChange={handleChange}
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
            color: 'green',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'green',
            borderRadius: '10px',
          },
          '&:hover,:focus': {
            scale: '1.1',
            backgroundColor: 'beige',
            borderRadius: '10px',
          },
        }}
      />
    </FormContainer>
  );
}
