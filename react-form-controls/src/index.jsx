import React, { useState } from 'react';
import * as ReactDOM from 'react-dom/client';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username submitted:', username);
    console.log('Password submitted:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:
        <input
        name='username'
        value={username}
        onChange={handleUsernameChange}
        />
      </label>
      <label>Password:
        <input
        name='password'
        type='password'
        value={password}
        onChange={handlePasswordChange}
        />
      </label>
      <button type='submit'>Sign Up</button>
    </form>
  );
}

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm />);
