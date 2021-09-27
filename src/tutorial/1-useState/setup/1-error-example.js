import React from 'react';

const ErrorExample = () => {
  let valueDisplay = "Random Value";
  const handleButton = () => {
    valueDisplay = "hello world";
    console.log(valueDisplay);
    //here we are changing the value of the variable because there is no rerendering its not reflected.
  }
  return(<>
  <h2>{valueDisplay}</h2>
  <button className="btn" onClick={handleButton}>change button</button>
   </>);
};

export default ErrorExample;
