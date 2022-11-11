import ContactForm from 'components/Phonebook/ContactForm/ContactForm';
import ContactsList from 'components/Phonebook/ContactsList/ContactsList';
import Filter from 'components/Phonebook/Filter/Filter';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';

import {
  getFilteredContacts,
  getFilter,
  getState,
} from 'redux/Contacts/selectors';

import {
  fetchContacts,
  addContact,
  removeContact,
} from 'redux/Contacts/contactsOperation';
import { setFilter } from 'redux/Contacts/filterSlice';
import { useEffect } from 'react';

export default function Phonebook() {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const { loading, error } = useSelector(getState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const hendelChenge = ev => {
    const { value } = ev.target;
    dispatch(setFilter(value));
  };

  const onAddContact = contact => {
    const action = addContact(contact);
    dispatch(action);
  };
  const onRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        p: '60px',
        mt: '20px',
        borderColor: 'primary.main',
        borderRadius: '16px',
        bgcolor: 'info.main',
      }}
    >
      <Grid item xs>
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: '40px', fontWeight: 400 }}
        >
          Phonebook
        </Typography>
        <ContactForm onSubmit={onAddContact} />
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: '40px', fontWeight: 400 }}
        >
          Contacts
        </Typography>

        <Filter onChange={hendelChenge} value={filter} />
        <Typography
          variant="h5"
          component="h3"
          sx={{ mb: '10px', fontWeight: 400 }}
        >
          Phone book project:
        </Typography>
        {contacts.length > 0 && (
          <ContactsList items={contacts} removeContact={onRemoveContact} />
        )}
        {loading && <p>...loading</p>}
        {error && <p>oops, something went wrong</p>}
      </Grid>
    </Grid>
  );
}
