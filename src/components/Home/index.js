import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { particlesCursor } from 'threejs-toys'

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
  let rect = canvas.getBoundingClientRect()
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  }
}

//function to get touch position and pass it to the particlesCursor
function getTouchPos(canvas, evt) {
  let rect = canvas.getBoundingClientRect()
  return {
    x: evt.touches[0].clientX - rect.left,
    y: evt.touches[0].clientY - rect.top,
  }
}

//connect mouse position to the particlesCursor
document.addEventListener(
  'mousemove',
  function (evt) {
    let mousePos = getMousePos(canvas, evt)
    pc.uniforms.uMouse.value.x = mousePos.x
    pc.uniforms.uMouse.value.y = mousePos.y
  },
  false
)

//connect touch position to the particlesCursor
document.addEventListener(
  'touchmove',
  function (evt) {
    let touchPos = getTouchPos(canvas, evt)
    pc.uniforms.uMouse.value.x = touchPos.x
    pc.uniforms.uMouse.value.y = touchPos.y
  },
  false
)

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'o', 'r', 'e', 'n', 't', 'i', 'n', 'a']
  const surnameArray = [' ', 'S', 'i', 'm', 'i', 'o', 'n']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setLetterClass('text-animate-hover');
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _12`}>,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _13`}>'</span>
            <span className={`${letterClass} _14`}>m</span>

            <span className={`${letterClass} _15`}></span>
            <span className={`${letterClass} _16 special`}>F</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={surnameArray}
              idx={1}
            />
            <br />
          </h1>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
              className="job"
            />
          </h2>
          <h3 className='aspirations'>
            Frontend Developer / JavaScript and React Enthusiast / Skilled Full-Stack Craftswoman
          </h3>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
