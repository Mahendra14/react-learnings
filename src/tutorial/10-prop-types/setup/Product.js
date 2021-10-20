import React from 'react';
import PropTypes from 'prop-types'
import defImage from "../../../assets/default-image.jpeg"

const Product = ({name,image,price}) => {
  // const imgSource = image.url || defimage;
  const imgSource = image && image.url;
  return (
  <article className='product'>
    <img src={imgSource || defImage} alt={name}/>
    <h4>{name}</h4>
    {/* making use of || operator to handle the case where price is missing */}

    <p>${price || "3.99"}</p>

  </article>);
};


//defining the proptype for the component Product
Product.protoTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

//similarly we can also add default values to the propTypes
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// };
export default Product;
