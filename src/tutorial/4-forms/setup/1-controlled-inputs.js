import React, { useState } from 'react';
// JS way of handling forms
// const input = document.getElementById('myText');
// const inputValue = input.value
// React way of handling forms
// value, onChange in the input method

const ControlledInputs = () => {
  //useState for the inputs of the form
  const [firstName,setFirstName] = useState('');
  const [email,setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label forhtml="firstName">Name : </label>
        <input type="text" name="firstName" id="firstName" value={firstName} onChange = {(e) => setFirstName(e.target.value)}/>
      </div>
      <div className="form-control">
        <label forhtml="email">Email : </label>
        <input type="text" name="email" id="email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
      </div>
      <button className="btn">add person</button>

    </form>

    </>
  );
};

export default ControlledInputs;
