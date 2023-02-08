import React, { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('A password is required');
  const [icon, setIcon] = useState('fa-solid fa-xmark');

  const handlePasswordChange = (e) => {
    const noError = '';
    const regexSpecialChars = /[!@#$%^&*()?]/g;
    const regexCapitalChars = /[A-Z]/g;
    const regexDigits = /[0-9]/g;

    setPassword(e.target.value);

    switch (true) {
      case (password.length === 0):
        setErrorMessage('A password is required');
        setIcon('fa-solid fa-xmark');
        e.preventDefault();
        break;

      case (password.length < 7):
        setErrorMessage('Your password is too short.');
        setIcon('fa-solid fa-xmark');
        e.preventDefault();
        break;

      case !(regexSpecialChars.test(e.target.value)):
        setErrorMessage('Password requires at least one special character.');
        setIcon('fa-solid fa-xmark');
        e.preventDefault();
        break;

      case !(regexCapitalChars.test(e.target.value)):
        setErrorMessage('Password requires at least 1 capital letter.');
        setIcon('fa-solid fa-xmark');
        e.preventDefault();
        break;

      case !(regexDigits.test(e.target.value)):
        setErrorMessage('Password needs at least 1 digit.');
        setIcon('fa-solid fa-xmark');
        e.preventDefault();
        break;

      default:
        setErrorMessage(noError);
        setIcon('fa-solid fa-check');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Password:
          <div>
            <input
              name='password'
              type='password'
              value={password}
              onChange={handlePasswordChange}
            />
            <i className={icon}/>
          </div>
        </label>
        <p>{errorMessage}</p>
      </form>
    </>
  );
}
