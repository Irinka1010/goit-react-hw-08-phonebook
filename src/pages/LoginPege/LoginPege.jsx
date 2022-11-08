import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { login } from 'redux/Auth/authOperetion';

export const commonStyles = {
  boxShadow: 3,
  bgcolor: theme => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
  color: theme => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
  mx: 'auto',
  my: 0.5,
  p: 5,
  border: 1,
  width: '20rem',
  height: '20rem',
};

export default function LoginPege() {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <Container sx={{ mt: '1rem' }}>
      <Box sx={{ ...commonStyles, borderRadius: '16px' }}>
        <LoginForm onSubmit={onLogin} />
      </Box>
    </Container>
  );
}
