import React, { FormEvent, useState } from 'react';
import './App.scss';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePasswordChange (event: FormEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value)
  }

  function handleEmailChange (event: FormEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value)
  }

  function handleRegister () {
    // submit user
  }

  return (
    <div className='App'>
        <label htmlFor='email'>Email:</label>
        <input type='text' value={email} onChange={handleEmailChange}/>
        <label htmlFor='email'>Password:</label>
        <input type='text' value={password} onChange={handlePasswordChange}/>
        <button type='submit' onClick={handleRegister}>Register</button>
    </div>
  );
}

export default App;
