
// so as it has both count and a big list this makes useEffect to run wheneever there is change in count even though it doesnt effect any of the of big list  - because every time value changes this useState guy triggers a re render.

// - solution is to wrap our whole component with a memo method in react - this memoises hte prop value of a component only re renders if the value changes.. very useful. [also following the golden run // every time props or state changes, component re-renders]

//now the same thing with the fucntion if a functon call is made using prop drilling then every time the state changes that function is not dependent on then it re renders the whole thing cuz a state change re renders all the states and it indirectly effects the funciton -  sol is useCallback which makes sure to recreate or rerender only if the VALUE OF THE FUNCTION changes not the ones its not dependent on

//to memoise the function totally we use useMemo which takes out the time to call a single function if the dependent ones didnt change during the re render

//and later we modified the useFetch to make use of usecallback to get rid of errors i.e, to add getProducts in to the mix fo the dependency arrqy and not make it to fall into infinite loop by making it run only during the changes of dependent ones in the array given to useCallback

// fun fact as if console.log we also have console.count which increases and shows value for every call

// ATTENTION!!!!!!!!!!
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price
      if (price >= total) {
        total = price
      }
      return total
    }, 0) / 100
  )
}

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart,setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])

  const mostExpensive = useMemo(() => calculateMostExpensive(products), [
    products,
  ])

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart = {addToCart} />
    </>
  )
}

const BigList = React.memo(({ products , addToCart }) => {
  useEffect(() => {
    console.log("from big list");
  });
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} addToCart={addToCart}></SingleProduct>
      })}
    </section>
  )
});

const SingleProduct = React.memo(({ fields,addToCart }) => {
  useEffect(() => {
    console.count("from single product");
  });
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  )
});
export default Index
