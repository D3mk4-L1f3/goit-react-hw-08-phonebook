import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FcFullTrash } from 'react-icons/fc';
import { ListItem, IconButton } from '@mui/material';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectContacts, selectFilteredName } from 'redux/selectors';
import {
  ListStyled,
  transitionGroupStyle,
  ContactText,
} from '../../style-components/styledContactList';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filteredText = useSelector(selectFilteredName);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formatName = name => name.replace(/\b\w/g, l => l.toUpperCase());

  const formatNumber = number => {
    if (!number) return '';
    return number.replace(/^(\d{3})(\d{2})(\d+)$/, '$1-$2-$3');
  };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredArray = contacts.filter(contact => {
    const contactInfo = `${contact.name} ${contact.number || ''}`
      .toLowerCase()
      .replace(/-/g, '');
    const filterTextLower = filteredText.toLowerCase().replace(/-/g, '');

    return contactInfo.includes(filterTextLower);
  });

  return (
    <TransitionGroup style={transitionGroupStyle}>
      {filteredArray.map(contact => (
        <CSSTransition key={contact.id} timeout={300} classNames="item">
          <ListStyled>
            <ListItem style={{ justifyContent: 'space-between' }}>
              <ContactText>
                <b>{formatName(contact.name)}</b>:{' '}
                {formatNumber(contact.number)}
              </ContactText>
              <IconButton
                variant="outlined"
                onClick={() => handleDelete(contact.id)}
                title="Remove your's contact :("
              >
                <FcFullTrash />
              </IconButton>
            </ListItem>
          </ListStyled>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
