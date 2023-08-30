import React, { useEffect, useState } from 'react';
import './App.css';
import { Model } from './Model';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  const [modelScale, setModelScale] = useState([4.8, 4.8, 4.8]);
  const [cameraPosition, setCameraPosition] = useState([0.2, 2, 5.2]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setModelScale([2, 2, 2]);
        setCameraPosition([0.35, 2.85, 3.8]);
      } else {
        setModelScale([4.8, 4.8, 4.8]);
        setCameraPosition([0.2, 2, 5.2]);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="canvas-container">
      <Canvas>
        <SetupCamera position={cameraPosition} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Model scale={modelScale} />
        <OrbitControls />
      </Canvas>
      <p className="smoothed">
        <a href="mailto:everything@lifeworld.co">everything@lifeworld.co</a>
      </p>
    </div>
  );
}

function SetupCamera({ position }) {
  const { camera, set } = useThree();

  useEffect(() => {
    camera.position.set(...position);
    set({ camera });
  }, [camera, set, position]);

  return null;
}

export default App;
