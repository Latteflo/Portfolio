import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Layout from './/components/Layouts';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Ociliator from './3d animation/Oscillator';
import { particlesCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const pc = particlesCursor({
  canvas: document.querySelector("canvas"),
  gpgpuSize: 512,
  colors: [0x00ff00, 0x0000ff],
  color: 0xff0000,
  coordScale: 0.1,
  noiseIntensity: 0.002,
  noiseTimeCoef: 0.0001,
  pointSize: 5,
  pointDecay: 0.0025,
  sleepRadiusX: 250,
  sleepRadiusY: 250,
  sleepTimeCoefX: 0.001,
  sleepTimeCoefY: 0.002
});

document.body.addEventListener("click", () => {
  pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
  pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
  pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
  pc.uniforms.uPointSize.value = 1 + Math.random() * 10;
});


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={< Layout />} >
      <Route index element={< Home />} />
      <Route path="about" element={< About />} />     
      <Route path="portfolio" element={< Portfolio />} />
      <Route path="contact" element={< Contact />} />
      <Route path="Ociliator" element={< Ociliator />} />
      </Route>
      </Routes>
      </>
  );
}

export default App;
