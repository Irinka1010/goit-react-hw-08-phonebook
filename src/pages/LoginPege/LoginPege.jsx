import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { login } from 'redux/auth/authOperetion';

export const commonStyles = {
  boxShadow: 3,
  maxWidth: '280px',
  mx: 'auto',
  my: 5,
  p: 5,
  border: 1,
};

export default function LoginPege() {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <Container sx={{ mt: '1rem', maxWidth: '1000px' }}>
      <Box sx={{ ...commonStyles, borderRadius: '16px' }}>
        <LoginForm onSubmit={onLogin} />
      </Box>
    </Container>
  );
}
