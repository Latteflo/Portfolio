import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import WordCloud from '../WordCloud'
//import BustImg from '../../assets/images/bust.svg'

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
          <div className="img"></div>
            <div className="text-zone">
                <h1>
                <span className={`${letterClass} _14 special`}>A</span>
                  <AnimatedLetters
                letterClass={letterClass}
                    strArray={['b','o','u','t', ' ','m','e']}
                    idx={15}/>
                    </h1>
           <br/>
        <p> I am an ambitious front end developer based in Belgium, currently looking for a role in an IT company with the opportunity to work with the latest technologies on diverse projects. </p>
        <p>I'm quietly confident, naturally curious and perpetually working on improving my skills.</p>
        <p>With a background in aviation, my experience has given me the ability to problem solve and think outside the box, which has come in handy in my career as a developer. I have also found that my attention to detail is an asset when working on web projects.</p>
        <p>I'm a fast learner and I'm always looking for new challenges and opportunities to grow as a developer.</p>
        </div>
        <WordCloud/>
    </div>  
    {/*<div className='image-container'>
      <img src={BustImg} alt="female bust smiling"/>
    </div>*/}

    <Loader type="ball-triangle-path" />
    </>
    )
}

export default About