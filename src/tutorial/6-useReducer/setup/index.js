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
  if(action.type === 'ADD_ITEM'){
    const newPeople = [...state.people,action.payload];

    // here it is only as a precaution using ...state as future use as in this case all three are changed
    return {
    ...state,
    people: newPeople,
    isModalOpen: true,
    modalContent: 'item Added'
    };
  }
  if(action.type === 'NO_VALUE'){
    return{ ...state,isModalOpen: true, modalContent: 'please enter a value'};
  }
  if(action.type === 'CLOSE_MODAL'){
    return {...state,isModalOpen: false};
  }
  if(action.type === 'REMOVE_ITEM'){
    const newPeople = state.people.filter((person) => person.id !== action.payload);
    return {...state, people: newPeople};
  }
  throw new Error('no matching action type declared');
}

const Index = () => {

  //useState for the name
  const [name,setName] = useState('');

  //useReducer one
  const[state,dispatch] = useReducer(reducer,defaultState)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      const newItem = {id: new Date().getTime().toString(),name};
      dispatch({type: 'ADD_ITEM',payload: newItem});
      setName('');
    }
    else{
      dispatch({type: 'NO_VALUE'});
    }
  }


  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }

  return (
    <>
    {state.isModalOpen && (
      <Modal modalContent={state.modalContent} closeModal={closeModal}/>
    )}
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
          <button onClick = {() => dispatch({type: 'REMOVE_ITEM', payload: person.id})}>Remove</button>
        </div>
      );
    })}
    </>
  );
};

export default Index;
