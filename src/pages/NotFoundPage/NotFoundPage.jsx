import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Imge from '../../imges/picture.png';
import { Box } from '@mui/system';
export default function NotFoundPage() {
  return (
    <Container sx={{ mt: '1rem', maxWidth: '1000px' }}>
      <Box>
        <CardMedia
          component="img"
          sx={{ height: '100%' }}
          image={Imge}
          alt="phonebook.jpg"
        />
      </Box>
      <Link to="/"></Link>
    </Container>
  );
}
