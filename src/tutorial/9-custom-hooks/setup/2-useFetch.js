import { useState, useEffect, useCallback } from "react";

export const useFetch = ({ url }) => {
  //here to make use of other hooks in a custom one we need to name is as starting with use
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  //useCallback hook is given def:
  //The useCallback hook is used when you have a component in which the child is rerendering again and again without need. Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  return { loading, products };
};
