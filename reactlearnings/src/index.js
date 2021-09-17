import React from 'react';
import ReactDOM from 'react-dom';

function Greetings(){
  return (
    <>
    <Person />
    <p>This is my message!</p>
    </>
  );
}

const Person = () => <h2>Mahendra Kumar,</h2>;



ReactDOM.render(
  <Greetings/>,
  document.getElementById('root')
);

