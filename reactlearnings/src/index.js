import React from 'react';
import ReactDOM from 'react-dom';

// function Greetings(){
//   return <h4>My first Component!</h4>;
// }

const Greeting = () => {
  return React.createElement('h1',{},'Hello mahendra!');
}


ReactDOM.render(
  <Greeting />,
  document.getElementById('root')
);

