import React, { useState } from 'react';

const UseStateObject = () => {
  //its completely fine to use three diff useState instead of objects
  const [person,setPerson] = useState({
    name: 'Mahendra',
    age: 21,
    msg: 'I am from useState'
  })

  //defining the button handler 
  const buttonHandler = () => {
    setPerson({...person,msg:'Sorry Message is changed!'})
  }
  return (<>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.msg}</h3>
  <button className='btn' onClick={buttonHandler}>change message</button>
  </>);
};

export default UseStateObject;
