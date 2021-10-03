import React, { useState, useEffect } from 'react';

// cleanup function
//in this we try to display the size of the window for every rerender that occurs.
// second argument

const UseEffectCleanup = () => {
  //we make use of already available window to grab the widht of the window
  const [value,setValue] = useState(window.innerWidth);
  //but this is constant and is not responsive as window changes the widht to that we need to add a listener.
  //to call every useEffect
  const changeValue = () => {
    setValue(window.innerWidth);
  }
  //the problem hereis an event listener is being added every time the window is resized to overcome this we can use one of two techniques: just call useeffect only during first render that is [] or write a clean up function to remove the event listentner (spoiler: second is most useful as times when we deal with larger projects it is most prominent and useful)
  useEffect(() => {
    window.addEventListener('resize',changeValue);
    //the below return function is called cleanup function
    return () => {
      window.removeEventListener('resize',changeValue);
    }
  },[value]);
  return (
    <>
    <h1>Windows</h1>
    <h2>{value}</h2>
    </>
  );
};

export default UseEffectCleanup;

//one more thing is we can also see all the event listeners added through inspect element that is in side accordance to style and all