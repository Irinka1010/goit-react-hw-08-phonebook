import Phonebook from 'components/Phonebook/Phonebook';
import Container from '@mui/material/Container';

export default function MyPhonebook() {
  return (
    <Container sx={{ mt: '1rem' }}>
      <h1>RegisterPege</h1>
      <Phonebook />
    </Container>
  );
}
