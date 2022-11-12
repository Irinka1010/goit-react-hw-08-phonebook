import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

export default function NotFoundPage() {
  return (
    <Container sx={{ mt: '1rem' }}>
      <h1>Project your phone book</h1>
      <Link to="/"></Link>
    </Container>
  );
}
