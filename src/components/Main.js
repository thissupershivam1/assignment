
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Main = () => {

    const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        // console.log(result);
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

    


  return (
    <div className='text-lg font-bold'>

    <Card  data={data}/>
    
    </div>
  )
}

export default Main