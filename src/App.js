import './App.css';
import { Model } from './Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="centered" className="canvas-container">
      <h1>Lifeworld</h1>
      <Canvas>
        <perspectiveCamera position={[0, 15, 25]} />
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

export default App;
