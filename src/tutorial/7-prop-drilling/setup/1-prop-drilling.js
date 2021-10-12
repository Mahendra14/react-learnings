import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

//demonstration that props that are sent over to diff components to pass through ones that doesnt use them its hecka work its just a demonstration to make our life simpler we use fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people,setPeople] = useState(data)

 const removePerson = (id) => {
   return setPeople((people) => people.filter((per) => per.id !== id));
 } 
  return (<section>
  <h3>prop drilling</h3>
  <List people = {people} removePerson = {removePerson} />
  </section>);
};

const List = ({people,removePerson}) => {
return (
  <>
  
  </>
  );
}

export default PropDrilling;
