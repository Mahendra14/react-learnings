import React, { useEffect, useRef } from 'react';



// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputRef.current);
    console.log(inputRef.current.value);
    inputRef.current.value = '';
  }
  // In this case we dont need a dependecy array as we just wanted to focus on it while it reloads and a note is that there is no useState to trigger reload for every change. 
  useEffect(() => {
    inputRef.current.focus();

  })
  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input type="text" ref={inputRef}/>
        <button className="btn">Submit</button>

      </form>
    </div>
  );
};

export default UseRefBasics;
