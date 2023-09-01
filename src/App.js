import React, { useEffect, useState } from 'react';
import './App.css';
import { Model } from './Model';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useProgress } from '@react-three/drei';
import Loading from './Loading';

function App() {
  const [cameraPosition, setCameraPosition] = useState([0.2, 1.94, 5.2]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setCameraPosition([-3, 3.7, 4]);
      } else {
        setCameraPosition([0.35, 2.4, 5.2]);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="canvas-container">
      <Canvas>
        <CanvasContent cameraPosition={cameraPosition} />
      </Canvas>
      <p className="smoothed">
        <a href="mailto:everything@lifeworld.co">everything@lifeworld.co</a>
      </p>
    </div>
  );
}

function CanvasContent({ cameraPosition }) {
  const { active, progress, total } = useProgress();
  const [modelScale, setModelScale] = useState([5, 5, 5]);
  const [modelPosition, setModelPosition] = useState([0, 0, 0]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setModelScale([2.7, 2.7, 2.7]);
        setModelPosition([3.8, -1.5, 0.3]);
      } else {
        setModelScale([4.4, 4.4, 4.4]);
        setModelPosition([-0.2, -0.14, 0.8]);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <SetupCamera position={cameraPosition} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      {active && progress !== total ? <Loading /> : <Model scale={modelScale} position={modelPosition} />}
      <OrbitControls />
    </>
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
