import React, { useEffect, useState } from 'react'

export const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        if (data){
          setLoading(false);
          setProducts(data);
        }
    };
    fetchData();
  },[])




  return (
    <div>Home</div>
  )
}
