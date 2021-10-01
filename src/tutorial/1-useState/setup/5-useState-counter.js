import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] = useState(0);

  const reset = () => {
    setValue(0);
  }

  const complexIncrease = () => {
    //here when we use setinterval it is being repeasted every two second
    // setInterval(() => {
    //   // setValue(value+1); it is simliar to the one below
    //   setValue((prevState) => {return prevState+1});
    // },2000);

    //where as to just make it show after a certain time and just stop executing again try this.
    setTimeout(()=>{
      setValue((prevValue) => {return prevValue+1});
    },2000)
  }

 return (<>
  <section style={{margin: '4rem 0'}}>
    <h2>regular counter</h2>
    <h1>{value}</h1>
    <button className="btn" onClick = {() => setValue(value-1)}>Decrease</button>
    <button className="btn" onClick = {reset}>reset</button>
    <button className="btn" onClick={() => setValue(value+1)}>increase</button>
  </section>
  <section style={{margin: '4rem 0'}}>
    <h2>Complex Increase Counter</h2>
    <h1>{value}</h1>
    <button className="btn" onClick = {complexIncrease}>Complex Increase</button>
    <button className="btn" onClick = {reset}>reset</button>
 
  </section>
  </>);
};

export default UseStateCounter;
