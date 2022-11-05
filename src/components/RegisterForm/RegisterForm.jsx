import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import useForm from 'shared/hooks/useForm';
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
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameId}>User name</label>
      <input
        id={nameId}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
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
