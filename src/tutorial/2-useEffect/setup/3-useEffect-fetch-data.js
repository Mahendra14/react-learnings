import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [people,setPeople] = useState([]);

  //using useEffect to fetch data from the api link. fetch api inbuilt
  useEffect(() => {

  },[]);
  return (
    <>
    <h3>github users</h3>
    </>
  );
};

export default UseEffectFetchData;
