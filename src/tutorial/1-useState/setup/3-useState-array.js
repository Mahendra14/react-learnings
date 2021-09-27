import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople] = React.useState(data);
  const [buttonName, setButtonName] = React.useState('clear members');
  const removeItem = (id) => {
    const newPeople = people.filter((item) => item.id !== id )
    setPeople(newPeople);
  }

  React.useEffect(() => {
    console.log("hello");
    console.log(people);
    if(people.length !== 0){
      setButtonName('clear members');
    }
    else{
      setButtonName('add members');
    }
  }, [people])

  const toggleData = () => {
    if(people.length !== 0){
    setPeople([]);
    return ;
    }
    else{
      setPeople(data);
    }
  }

  return (
    <>
    {
        people.map((person) => {
        const  { id, name } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            {/*So here we are just trying to only call the function when clicked by passing id */}
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })
    }
    <button className="btn" onClick = {toggleData}>{buttonName}</button>
    </>
  );
};

export default UseStateArray;
