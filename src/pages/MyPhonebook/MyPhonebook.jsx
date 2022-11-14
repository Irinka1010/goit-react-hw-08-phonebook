import Phonebook from 'components/Phonebook/Phonebook';
import Container from '@mui/material/Container';

export default function MyPhonebook() {
  return (
    <Container sx={{ mt: '1rem', maxWidth: '1000px' }}>
      <Phonebook />
    </Container>
  );
}
