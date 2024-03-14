import React, { FormEvent, useState } from 'react';
import './App.scss';
import { registerUser } from './services/AuthClient';
import { useAuthContext } from './context/AuthContext';


function App() {
  const {user, setUser} = useAuthContext()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePasswordChange (event: FormEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value)
  }

  function handleEmailChange (event: FormEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value)
  }

  async function handleRegister () {
    const user = await registerUser(email, password);

    setUser(user);
  }

  return (
    <div className='App'>
      <h2>{user?.email}</h2>
        <label htmlFor='email'>Email:</label>
        <input type='text' aria-label='email' value={email} onChange={handleEmailChange}/>
        <label htmlFor='email'>Password:</label>
        <input type='text' value={password} onChange={handlePasswordChange}/>
        <button type='submit' onClick={handleRegister}>Register</button>
    </div>
  );
}

export default App;
