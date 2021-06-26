import { Canvas } from '@react-three/fiber';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <Canvas shadows gl={{ alpha: false }} camera={{ position: [-1, 12, 15], fov: 45 }}>
    <App />
  </Canvas>,
  document.getElementById('root')
);
