import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import useForm from 'shared/hooks/useForm';
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
    <form onSubmit={handleSubmit}>
      <label htmlFor={emailId}>User email</label>
      <input
        id={emailId}
        name="email"
        type="email"
        value={email}
        onChange={handleChange}
      />
      <label htmlFor={emailId}>User password</label>
      <input
        id={passwordId}
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button>Register</button>
    </form>
  );
}
