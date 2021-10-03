import React, { useState, useEffect } from 'react';
// by default runs after every re-render - point based on the useEffect
// cleanup function - it can return a function which will be looking after that hence used normally for the sake of clean up process;
// second parameter - to implicitly specify when to be executed the array can be given or by defaut every re-render 
const UseEffectBasics = () => {
  const [value,setValue] = useState(0);

  // here one important thing to note is that we can write a useEffect inside if conditional or any othre where as we can write those conditionals inside the useEffect as belows
  //we can also ommit this value in teh rendering array as every time the value changes anyway its rerendered
  useEffect(() => {
    if(value >= 1)
    {document.title = `New message(${value})`}
  },[value]);

  //to increase the value of the useState after every button click
  const buttonHandler = () => {
    setValue(value+1);
  }

  return (
    <>
    <h1>{value}</h1>
    <button className="btn" onClick={buttonHandler}>click me</button>
    </>
  );
};

export default UseEffectBasics;
