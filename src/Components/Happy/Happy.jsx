import React, { useEffect, useState } from 'react';
import './Happy.css';

function Happy() {
  const [complete, setComplete] = useState(0);
  const [client, setClient] = useState(0);
  const [award, setAward] = useState(0);
  const [coffee, setCoffee] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setComplete(prevComplete => {
        if (prevComplete < 85) {
          return prevComplete + 1;
        }
        return prevComplete;
      });

      setClient(prevClient => {
        if (prevClient < 127) {
          return prevClient + 1;
        }
        return prevClient;
      });

      setAward(prevAward => {
        if (prevAward < 36) {
          return prevAward + 1;
        }
        return prevAward;
      });

      setCoffee(prevCoffee => {
        if (prevCoffee < 74) {
          return prevCoffee + 1;
        }
        return prevCoffee;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []); // Run once when the component mounts

  return (
    <div className='Happy1'>
      <div className='Happy11'><h1>{complete}</h1>  <h2>PROJECTS
      COMPLETED</h2> </div>
      <div className='Happy11'> <h1>{client}</h1>  <h2>HAPPY
      CLIENTS</h2> </div>
      <div className='Happy11'> <h1>{award}</h1>  <h2>AWARDS
      RECEIVED</h2> </div>
      <div className='Happy11'> <h1>{coffee}</h1>  <h2>CUPS OF
      COFFEE</h2></div>
    </div>
  );
}

export default Happy;
