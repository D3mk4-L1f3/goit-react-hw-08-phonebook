import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Button, TextField } from '@mui/material';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { FormContainer } from 'style-components/styledContainer';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [formData, setFormData] = useState({ name: '', number: '' });

  const isDuplicateContact = (name, number) =>
    contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.number === number
    );

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    const updatedFormData = {
      ...formData,
      [name]: name === 'number' ? value.replace(/[^\d]/g, '') : value,
    };
    setFormData(updatedFormData);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = formData.name;
    const number = formData.number;

    if (isDuplicateContact(name, number)) {
      toast.error('You have already added the same contact!');
    } else {
      dispatch(
        addContact({
          name: name,
          number: number,
        })
      );
      setFormData({ name: '', number: '' });
    }
    form.reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextField
        name="name"
        type="text"
        title="Add here your contact NAME :)"
        size="medium"
        label="Name"
        variant="outlined"
        placeholder="... or full name"
        value={formData.name}
        onChange={handleInputChange}
        required
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

      <TextField
        name="number"
        type="tel"
        title="Add here your contact NUMBER :)"
        size="medium"
        onChange={handleInputChange}
        label="Phone"
        variant="outlined"
        placeholder="... only numbers"
        value={formData.number}
        required
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

      <Button
        variant="contained"
        type="submit"
        style={{ gap: '10px', backgroundColor: 'beige' }}
        title="Push and add your's contact :)"
        sx={{
          display: 'flex',
          gap: '10px',
          fontSize: 'clamp(12px, 2vw, 16px)',
          padding: '10px',
          cursor: 'pointer',
          color: 'black',
          borderRadius: '10px',
          backgroundColor: 'beige',
          '&:hover': {
            scale: '1.1',
            fontWeight: '700',
            backgroundColor: 'beige',
          },
          '&:disabled': {
            backgroundColor: 'lightgray',
            color: 'gray',
          },
        }}
      >
        <MdPersonAddAlt1 style={{ width: '25', height: '25' }} /> Phonebook
      </Button>
    </FormContainer>
  );
}
