import React, { useState, useEffect } from 'react';
import './Loading.css';

function Loading() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (dots.length < 3) {
        setDots(dots + '.');
      } else {
        setDots('');
      }
    }, 500);

    return () => clearInterval(interval);
  }, [dots]);

  return (
    <div className="loading-container">
      <p className="loading-text">Loading{dots}</p>
    </div>
  );
}

export default Loading;
