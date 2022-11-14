import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import useForm from 'shared/hooks/useForm';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export default function LoginForm({ onSubmit }) {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);
  const { email, password } = state;

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '270' }}>
      <TextField
        id={emailId}
        name="email"
        type="email"
        label="Email"
        value={email}
        required
        sx={{ mb: '1.5rem' }}
        onChange={handleChange}
      />
      <TextField
        id={passwordId}
        name="password"
        type="password"
        label="Password"
        value={password}
        required
        sx={{ mb: '1.5rem' }}
        onChange={handleChange}
      />
      <Stack direction="row" spacing={2}>
        <Button
          type="submit"
          variant="contained"
          sx={{ mx: 'auto' }}
          color="success"
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
}
