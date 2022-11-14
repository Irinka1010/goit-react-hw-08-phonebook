import { nanoid } from 'nanoid';

import { useMemo } from 'react';
import useForm from 'shared/hooks/useForm';
import { Input } from './ContactForm.styled';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { grid } from '@mui/system';

const initialState = {
  name: '',
  number: '',
};

export default function ContactForm({ onSubmit }) {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const nameId = useMemo(() => nanoid(), []);
  const numberId = useMemo(() => nanoid(), []);

  const { name, number } = state;
  return (
    <Box
      component="form"
      sx={{
        display: 'block',
      }}
      onSubmit={handleSubmit}
    >
      <Box
        px={{ xs: '5px', md: '40px' }}
        component="div"
        sx={{
          gridGap: '20px',
          alignItems: 'center',
          display: grid,
          gap: '20px',
          gridTemplateColumns: '70px ,1fr',
          mb: '15px',
        }}
      >
        <AccountCircle sx={{ color: 'action.active', mb: 0.5 }} />
        <Input
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
      </Box>
      <Box
        component="div"
        px={{ xs: '5px', md: '40px' }}
        sx={{
          gridGap: '20px',
          alignItems: 'center',
          display: grid,
          gap: '20px',
          gridTemplateColumns: '70px ,1fr',
          mb: '15px',
        }}
      >
        <Input
          id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Phone"
          value={number}
          onChange={handleChange}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#778089',
          width: '200px',
          height: '50px',
          mx: 'auto',
        }}
        type="submit"
      >
        Add contact
      </Button>
    </Box>
  );
}
