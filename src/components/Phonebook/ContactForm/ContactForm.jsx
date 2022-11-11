import { nanoid } from 'nanoid';

import { useMemo } from 'react';
import useForm from 'shared/hooks/useForm';
import { Input } from './ContactForm.styled';

import Button from '@mui/material/Button';

import AccountCircle from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';

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
    <form onSubmit={handleSubmit}>
      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
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
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#778089' }}
          type="submit"
        >
          Add contact
        </Button>
      </Stack>
    </form>
  );
}
