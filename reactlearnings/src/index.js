import React from "react";
import ReactDOM from "react-dom";

function Booklist() {
  return (
  <>
  <Book />
  <Book />
  </>
  );
}

const Book = () => {return(<> 
   <Image />
  <Title />
  <Author /> 
  </> );
}

const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg" alt="Héctor García " />;
const Title = () => <h3>Ikigai: The Japanese secret to a long and happy life</h3>;
const Author = () => <h3>Héctor García </h3>;

ReactDOM.render(<Booklist />, document.getElementById("root"));
