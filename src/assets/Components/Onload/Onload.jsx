import React, { useEffect, useState } from 'react';
import './Onload.scss';

const Onload = () => {
  const [rotate, setRotate] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((prev) => prev + 10); 
    }, 100);

   
    const timeout = setTimeout(() => {
      setShowAnimation(false); 
    }, 5000);

    return () => {
      clearInterval(interval); 
      clearTimeout(timeout);     
    };
  }, []);

  return (
    <>
      {showAnimation && (
        <div className="onload-container">
          <div className="image-container" style={{ transform: `rotate(${rotate}deg)` }}>
            <img src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-1-logo-png-transparent.png" alt="Rotating" />
          </div>
        </div>
      )}
    </>
  );
};

export default Onload;
