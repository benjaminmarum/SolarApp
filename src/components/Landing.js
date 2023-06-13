import React, { useEffect, useState } from 'react';


function Landing() {
    const [newState, setState] = useState('You\'ve landed');

  useEffect(() => {
    fetchData();
  }, []);

  //--------> Init Fetch
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:6001/plants');
      const jsonData = await response.json();
      setPlants(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  

  //----------------------------------------------------------------------------------->
  //JSX
  return (
    <div>
      {newState}
    </div>
  );
}

export default Landing;
