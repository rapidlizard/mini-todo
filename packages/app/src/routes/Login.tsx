import { FormEvent, useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/AuthClient';
import Input from '../components/Input';

export default function Login() {
  const { setUser } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handlePasswordChange(event: FormEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value);
  }

  function handleEmailChange(event: FormEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }

  async function handleLogin() {
    const user = await loginUser(email, password);

    setUser(user);

    navigate('/');
  }

  return (
    <>
      <Input label="Email:" value={email} changeHandler={handleEmailChange} />
      <Input
        label="Password:"
        value={password}
        changeHandler={handlePasswordChange}
      />
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </>
  );
}
