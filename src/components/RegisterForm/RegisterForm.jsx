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

export default function RegisterForm({ onSubmit }) {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const nameId = useMemo(() => nanoid(), []);
  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);
  const { name, email, password } = state;

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        id={nameId}
        type="text"
        name="name"
        label="Name"
        value={name}
        required
        sx={{ mb: '1.5rem', width: '100%' }}
        onChange={handleChange}
      />

      <TextField
        id={emailId}
        name="email"
        type="email"
        label="Email"
        value={email}
        required
        sx={{ mb: '1.5rem', width: '100%' }}
        onChange={handleChange}
      />

      <TextField
        id={passwordId}
        type="password"
        name="password"
        value={password}
        label="Password"
        required
        sx={{ mb: '1.5rem', width: '100%' }}
        onChange={handleChange}
      />
      <Stack direction="row" spacing={2}>
        <Button
          type="submit"
          variant="contained"
          sx={{ mx: 'auto' }}
          color="success"
        >
          Register
        </Button>
      </Stack>
    </Box>
  );
}
