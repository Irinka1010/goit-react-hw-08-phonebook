import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

export default function NotFoundPage() {
  return (
    <Container sx={{ mt: '1rem' }}>
      <div>
        <img
          alt="phonebook.jpg"
          src="https://cdn.dribbble.com/users/892648/screenshots/6795161/phonebook.jpg"
        />
      </div>
      <Link to="/"></Link>
    </Container>
  );
}
