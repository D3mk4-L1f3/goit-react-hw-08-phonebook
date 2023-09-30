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
      />
    </FormContainer>
  );
}
