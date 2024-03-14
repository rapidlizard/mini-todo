import { FormEvent, useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { registerUser } from '../services/AuthClient';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

export default function Register() {
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

  async function handleRegister() {
    const user = await registerUser(email, password);

    setUser(user);

    navigate('/');
  }

  return (
    <>
      <BackButton />
      <Input label="Email:" value={email} onChange={handleEmailChange} />
      <Input
        label="Password:"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button onClick={handleRegister}>Register</Button>
    </>
  );
}
