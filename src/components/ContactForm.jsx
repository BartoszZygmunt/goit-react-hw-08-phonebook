import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';

import Button from '@mui/material/Button';
import { Card, CardContent, TextField } from '@mui/material';
import { Box } from '@mui/system';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContact({ name: contact.name, number: contact.number }));

    setContact(prev => ({ ...INITIAL_STATE }));
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card variant="outlined">
        <CardContent>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
            }}
          >
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              required
              value={contact.name}
              onChange={handleChange}
              inputProps={{
                pattern:
                  "[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*",
              }}
            />
            <TextField
              id="number"
              name="number"
              label="Number"
              variant="outlined"
              required
              value={contact.number}
              onChange={handleChange}
              inputProps={{
                pattern:
                  '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
              }}
            />
            <Button variant="contained" type="submit">
              Add contact
            </Button>
          </Box>
        </CardContent>
      </Card>
    </form>
  );
};

export default ContactForm;
