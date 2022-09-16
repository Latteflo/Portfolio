import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
//import LogoTitle from '../../assets/images/logo-f.png'


import './index.scss'


const Home =()=>{
const [letterClass, setLetterClass]= useState('text-animate')
const nameArray=['l','o', 'r','e', 'n', 't', 'i', 'n', 'a', ]
const surnameArray=[' ','S', 'i', 'm', 'i', 'o', 'n']
const jobArray=['W', 'e', 'b',' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r','.']

useEffect(() => {
  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000);
}, []);

return (
  <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _12`}>,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _13`}>'</span>
          <span className={`${letterClass} _14`}>m</span>
         
          <span className={`${letterClass} _14`}></span>
          <span className={`${letterClass} _14 special`}>F</span>

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />   

          <AnimatedLetters
            letterClass={letterClass}
            strArray={surnameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer  / JavaScript Enthusiast / FullStack Aspirer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div className="three-container">
      </div>
    </div>

    <Loader type="packman"/>
  </>
)
}

export default Home