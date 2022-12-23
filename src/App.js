import './App.scss'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './/components/Layouts'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import { particlesCursor } from 'threejs-toys'
import Resume from './components/About/resume/resume'
import Certificates from './components/About/certificates/certificates'

const pc = particlesCursor({
  canvas: document.querySelector('canvas'),
  gpgpuSize: 512,
  colors: [0x00ff00, 0x0000ff],
  color: 0xff0000,
  coordScale: 0.1,
  coordSpeed: 0.1,
  noiseIntensity: 0.002,
  noiseTimeCoef: 0.0001,
  noiseScale: 0.1,
  pointSize: 5,
  pointDecay: 0.0025,
  pointSpeed: 0.1,
  sleepRadiusX: 250,
  sleepRadiusY: 250,
  sleepRadiusZ: 250,
  sleepTimeCoefX: 0.001,
  sleepTimeCoefY: 0.002,
  sleepTimeCoefZ: 0.001,
  sleepTimeCoefW: 0.002,
  sleepTimeCoefNoise: 0.0001,
  sleepTimeCoefNoise2: 0.0001,
  sleepTimeCoefNoise3: 0.0001,
  sleepTimeCoefNoise4: 0.0001,
  sleepTimeCoefNoise5: 0.0001,
  sleepTimeCoefNoise6: 0.0001,
  sleepTimeCoefNoise7: 0.0001,
})

document.body.addEventListener('click', () => {
  pc.uniforms.uColor.value.set(Math.random() * 0xf1f1f5)
  pc.uniforms.uCoordScale.value = 0.006 + Math.random() * 2
  pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001
  pc.uniforms.uPointSize.value = 1 + Math.random() * 10
})

const canvas = document.querySelector('canvas')

//function to get mouse position and pass it to the particlesCursor 
function getMousePos(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

//function to get touch position and pass it to the particlesCursor
function getTouchPos(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.touches[0].clientX - rect.left,
    y: evt.touches[0].clientY - rect.top
  };
}

//connect mouse position to the particlesCursor
document.addEventListener('mousemove', function (evt) {
  let mousePos = getMousePos(canvas, evt);
  pc.uniforms.uMouse.value.x = mousePos.x
  pc.uniforms.uMouse.value.y = mousePos.y
}, false);

//connect touch position to the particlesCursor
document.addEventListener('touchmove', function (evt) {
  let touchPos = getTouchPos(canvas, evt);
  pc.uniforms.uMouse.value.x = touchPos.x
  pc.uniforms.uMouse.value.y = touchPos.y
}, false);


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="About/Resume" element={<Resume />} />
          <Route path="About/Certificates" element={<Certificates />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
          <Route
            path="*"
            element={<p>Oops, Page doesn't exists! Nothing Here</p>}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
