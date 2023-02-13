/* eslint-disable no-unused-vars -- Remove this line. */
import React, { useState, useEffect } from 'react';
import UserList from './user-list';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [hasError, setHasError] = useState(false);

  /* your code here (hint: useEffect) */
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setHasError(true);
      });
  }, []);

  return isLoading
    ? <p>Loading...</p>
    : hasError
      ? <h1>Something went wrong coach!</h1>
      : <UserList users={users}/>;
}
