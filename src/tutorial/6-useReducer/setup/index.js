import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
//its tempting to say its just an extension but it isnt and it is very helpful in many ways
//In this we can handle a lot of states with the kind of names and its very productive and good to see.


//formal defn for useReducer:
//useReducer is used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second.
//we need to have a definitive state for it to start so lets start with the default one as global to be accessible.
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
};

//defining reducer in index itself afte code it will be shifted to new file
const reducer = (state,action) => {
  return state;
}

const Index = () => {

  //useState for the name
  const [name,setName] = useState('');

  //useReducer one
  const[state,dispatch] = useReducer(reducer,defaultState)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entered here");
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input type="text" value={name}
        onChange={(e) => setName(e.target.value)} />
      </div>
      <button className="btn" type="submit">Add Item</button>
    </form>
    {state.people.map((person) => {
      return(
        <div key={person.id} className="item">
          <h4>{person.name}</h4>
          <button onClick = {() => {}}>Remove</button>
        </div>
      );
    })}
    </>
  );
};

export default Index;
