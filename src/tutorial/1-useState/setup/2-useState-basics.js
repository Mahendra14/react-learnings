import React, { useState } from 'react';

const UseStateBasics = () => {
  const [value,setValue] = useState('random value');
  const handleButton = () => {
    if(value === "random value"){
    setValue("hello world");
    }
    else{
      setValue("random value");
    }
  }
  return (<> 
  <h3>{value}</h3>
  <button className="btn" onClick={handleButton}>change value</button>
  
  </>);
};

export default UseStateBasics;
