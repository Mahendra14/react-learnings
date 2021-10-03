import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [people,setPeople] = useState([]);

  const getUsers = async () =>{
    const response = await fetch(url);
    const users = await response.json();
    setPeople(users);
  }

  //using useEffect to fetch data from the api link. fetch api inbuilt
  //must be only during initial rendering other wise its just a loop and crashed for every change.
  useEffect(() => {
    getUsers();
  },[]);
  return (
    <>
    <h3>github users</h3>
    <ul className='users'>    {people.map((user) => {
       const { id, login, avatar_url, html_url } = user;
      return (
        <li key={id}>
        <img src={avatar_url} alt={login} />
        <div>
          <h4>{login}</h4>
          <a href={html_url}>profile</a>
        </div>
        </li>
      );
    })}
    </ul>

    </>
  );
};

export default UseEffectFetchData;
