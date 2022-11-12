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
      component="div"
      sx={{
        p: '60px',
        mt: '20px',
        borderColor: 'primary.main',
        borderRadius: '16px',
        bgcolor: 'info.main',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box component="div" sx={{ width: '39%' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 400, mb: '20px', textAlign: 'center' }}
        >
          Phonebook
        </Typography>
        <ContactForm onSubmit={onAddContact} />
      </Box>
      <Box
        component="div"
        sx={{ boxShadow: 3, width: '58%', borderRadius: '16px', p: '10px' }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 400, mb: '20px', textAlign: 'center' }}
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
      </Box>
    </Box>
  );
}
