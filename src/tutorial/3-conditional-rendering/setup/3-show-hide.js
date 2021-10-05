import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [isShow,setIsShow] = useState(false);

  //functions
  const showHideBtnFunct = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      <button className="btn" onClick={showHideBtnFunct}>
        show/hide
      </button>
      {isShow && <Text />}
    </div>
  );
};

const Text = () => {
  const [size,setSize] = useState(window.innerWidth);

  //function 
  const changeSize = () => {
    setSize(window.innerWidth);
  }

  //useEffect for the handling of change of size
  useEffect(() => {
     window.addEventListener('resize',changeSize);
    return () => {
      window.removeEventListener('resize',changeSize);
    }
  },[]);
  return(
    <div style = {{ marginTop : '2rem'}}>
      <h1>Window Size</h1>
      <h2>{size} px</h2>
    </div>
  );
}

export default ShowHide;
