import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

export default function NotFoundPage() {
  return (
    <Container sx={{ mt: '1rem' }}>
      <h1>Page not found</h1>
      <Link to="/">To home page</Link>
    </Container>
  );
}
