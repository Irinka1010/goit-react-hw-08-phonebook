import ContactForm from 'components/Phonebook/ContactForm/ContactForm';
import ContactsList from 'components/Phonebook/ContactsList/ContactsList';
import Filter from 'components/Phonebook/Filter/Filter';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
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
import { grid } from '@mui/system';

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
    <Box
      component="section"
      sx={{
        maxWidth: '800px',
        mx: 'auto',
        minHeight: '100vh',
        pt: '60px',
        borderColor: 'primary.main',
        borderRadius: '16px',
        bgcolor: 'info.main',
        textAlign: 'center',
      }}
    >
      <Box
        component="div"
        sx={{
          gridGap: '20px',
          display: grid,
          gridTemplateColumns: '70px, 1fr',
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 400, fontSize: '32px', pt: '16px' }}
        >
          Phonebook
        </Typography>
        <ContactForm onSubmit={onAddContact} />
      </Box>
      <Box component="div" sx={{ mx: 'auto', p: '30px' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 400, mb: '20px', textAlign: 'center' }}
        >
          Contacts
        </Typography>

        <Filter onChange={hendelChenge} value={filter} />

        {contacts.length > 0 && (
          <ContactsList items={contacts} removeContact={onRemoveContact} />
        )}
        {loading && <p>...loading</p>}
        {error && <p>oops, something went wrong</p>}
      </Box>
    </Box>
  );
}
