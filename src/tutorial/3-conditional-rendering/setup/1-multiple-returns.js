import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [user,setUser] = useState('default user');
  const [isErr,setIsErr] = useState(false);
  const[isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    
  },[]);



  if(isLoading){
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if(isErr){
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
