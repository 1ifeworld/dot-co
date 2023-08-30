import React, { useEffect } from 'react';
import './App.css';
import { Model } from './Model';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="canvas-container">
      <Canvas>
        <SetupCamera />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Model scale={[7,7,7]} />
        <OrbitControls />
      </Canvas>
      <p className="smoothed">
        <a href="mailto:everything@lifeworld.co">everything@lifeworld.co</a>
      </p>
    </div>
  );
}

function SetupCamera() {
  const { camera, set } = useThree();

  useEffect(() => {
    camera.position.set(0.2, 2.5, 5.2);
    set({ camera });
  }, [camera, set]);

  return null;
}

export default App;
