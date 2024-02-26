import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner';

export const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    const fetchData = async () => {
        setLoading(true);
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
      <div>
        {
          loading ? 
            <div className='min-h-screen w-full flex justify-center items-center'>
              <Circles
                height={'120'}
                width={'120'}
                color='rgb(127,29,29)'
                visible={true}
              />
            </div> : null
        }
      </div>
  )
}
