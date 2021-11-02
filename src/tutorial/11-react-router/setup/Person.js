import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// to access the id of the person we need the useParams hook 
const Person = () => {
  // as we get back an object i will destructure it right away to get my id
  const {id} = useParams();
  const [name,setName] = useState("Default Name");

  useEffect( () => {
    const user = data.find((p) => p.id === parseInt(id));
    setName(user.name);
  },[]);
   return (
    <div>
      <h2>{name}</h2>
      <Link to="/people" className="btn">Back to People</Link>
    </div>
  );
};

export default Person;
