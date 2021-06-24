import { Canvas } from '@react-three/fiber';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cube from './Box';
import GizmoHelperComp from './GizmoHelper';
import './index.css';
import Plane from './Plane';

ReactDOM.render(
  <Canvas shadows gl={{ alpha: false }} camera={{ position: [-1, 2, 5], fov: 50 }}>
    <App />
  </Canvas>,
  document.getElementById('root')
);

