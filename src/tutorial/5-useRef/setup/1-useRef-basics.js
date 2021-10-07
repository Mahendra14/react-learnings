import React, { useEffect, useRef } from 'react';



// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputRef.current);
  }

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
