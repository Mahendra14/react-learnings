import React from 'react';
import defImage from "../../../assets/default-image.jpeg"

const Product = ({name,image,price}) => {
  // const imgSource = image.url || defimage;
  return (
  <article className='product'>
    {/* <img src={imgSource} alt={name}/> */}
    <h2>{name}</h2>
    {/* making use of || operator to handle the case where price is missing */}

    <p>${price || "3.99"}</p>

  </article>);
};

export default Product;
