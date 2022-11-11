import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

export default function NotFoundPage() {
  return (
    <Container sx={{ mt: '1rem' }}>
      <Link to="/"></Link>
    </Container>
  );
}
