import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  //empty string is falsy..
  const [text,setText] = useState('Mahi');

  //here if the text is true it returns text wheras if its false it will return teh second text(assuming second one is true)
  //this is helpful to return default value if something may be empty
  const firstValue = text || 'hello world';

  //here its false if its true...the below one will return hello world
  //here we are returning somehting if and only if the first one is true.
  const secondValue = text && 'hello world';

  return (<>
    {/* <h2>{firstValue}</h2>
    <h2>{secondValue}</h2> */}

    <h1>{text || 'John Doe'}</h1>
    <h1>{text && 'Mahendra'}</h1>
    <h2>{!text && 'Mahedra'}</h2>
    </>
  );
};

export default ShortCircuit;
