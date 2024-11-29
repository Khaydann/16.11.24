import React, { useEffect, useState } from 'react';
import './Onload.scss';

const Onload = () => {
  const [rotate, setRotate] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((prev) => prev + 10); // Hər 100 ms-də 10 dərəcə artır
    }, 100);

    // 5 saniyə sonra animasiyanı gizləyirik
    const timeout = setTimeout(() => {
      setShowAnimation(false); // 5 saniyə sonra animasiyanı gizlədirik
    }, 5000); // 5000 ms = 5 saniyə

    return () => {
      clearInterval(interval);  // Təmizləyirik
      clearTimeout(timeout);     // Təmizləyirik
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
