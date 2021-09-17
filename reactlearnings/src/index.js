import React from 'react';
import ReactDOM from 'react-dom';

function Greetings(){
  return <h4>My first Component!</h4>;
}


ReactDOM.render(
  <Greetings />,
  document.getElementById('root')
);

