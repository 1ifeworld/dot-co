import React, { useState, useEffect } from 'react';
import './Loading.css';

function Loading() {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prevCount) => (prevCount === 3 ? 1 : prevCount + 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <p className="loading-text">
        loading
        <span style={{ opacity: dotCount >= 1 ? 1 : 0 }}>.</span>
        <span style={{ opacity: dotCount >= 2 ? 1 : 0 }}>.</span>
        <span style={{ opacity: dotCount >= 3 ? 1 : 0 }}>.</span>
      </p>
    </div>
  );
}

export default Loading;