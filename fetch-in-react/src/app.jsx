/* eslint-disable no-unused-vars -- Remove this line. */
import React, { useState, useEffect } from 'react';
import UserList from './user-list';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

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
        alert('Something went wrong!');
      });
  }, []);

  return isLoading
    ? <p>Loading...</p>
    : <UserList users={users} />;
}
