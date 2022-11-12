import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Imge from '../../imges/picture.png';

export default function NotFoundPage() {
  return (
    <Container sx={{ mt: '1rem' }}>
      <CardMedia
        component="img"
        sx={{ height: '100%' }}
        image={Imge}
        alt="phonebook.jpg"
      />
      <Link to="/"></Link>
    </Container>
  );
}
