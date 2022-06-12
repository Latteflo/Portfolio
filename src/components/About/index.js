import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faGithub, faReact, faHtml5, faCss3, faJsSquare, faSass } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000);
      }, []);

    return(
      <>
        <div className="container about-page">
            <div className="text-zone">
                <h1><AnimatedLetters
                letterClass={letterClass}
                    strArray={['A','b','o','u','t', ' ','m','e']}
                    idx={15}/>
                    </h1>
           <br/>

        <p> I am an ambitious front end developer based in the Belgium, currently looking for a role in an IT company with the opportunity to work with the latest technologies on diverse projects. </p>
        <p>I'm quietly confident, naturally curious and perpetually working on improving my skills.</p>
        <p>I'm a fast learner and I'm always looking for new challenges and opportunities to grow as a developer.</p>
        </div>
        <div className="stage-cube-cont">
          {/*<div className="cuberspinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact}  color="#80DEEA"/>
              </div>
               <div className="face2">
              <FontAwesomeIcon icon={faHtml5}  color="#FF6D00"/>
              </div>
              <div className="face3">
              <FontAwesomeIcon icon={faCss3}  color="#039BE5"/>
              </div>
              <div className="face4">
              <FontAwesomeIcon icon={faSass}  color="#F06292"/>
              </div>
              <div className="face5">
              <FontAwesomeIcon icon={faJsSquare}  color="#FFD600"/>
              </div>
              <div className="face6">
              <FontAwesomeIcon icon={faGithub}  color="#00BCD4"/>
              </div>
            </div>*/}
          </div>
    </div>  
    <Loader type="ball-grid-pulse" />
    </>
    )
}

export default About