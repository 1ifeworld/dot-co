import React, { useEffect, useState } from 'react';
import './App.css';
import { Model } from './Model';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  const [modelScale, setModelScale] = useState([5, 5, 5]);
  const [cameraPosition, setCameraPosition] = useState([0.2, 1.94, 5.2]);
  const [modelPosition, setModelPosition] = useState([0, 0, 0]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setModelScale([0.9, 0.9, 0.9]);
        setCameraPosition([-3.15, 3.7, 4]);
        setModelPosition([-0.7, 2.3, 2.8]);
      } else {
        setModelScale([5, 5, 5]);
        setCameraPosition([0.2, 1.94, 5.2]);
        setModelPosition([0, 0, 0]);
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
        <ambientLight intensity={1} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Model scale={modelScale} position={modelPosition} />
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
