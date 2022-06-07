import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000);
      }, []);

    return(
        <div className="container about-page">
            <div className="text-zone">
                <h1><AnimatedLetters
                letterClass={letterClass}
                    strArray={['A','b','o','u','t', ' ','m','e']}
                    idx={15}/>
                    </h1>

                    <br />
        <p> I am an ambitious front end developer based in the Belgium, currently looking for a role in an IT company with the opportunity to work with the latest technologies on diverse projects. </p>
        <p>I'm quietly confident, naturally curious and perpetually working on improving my skills.</p>
        <p>I'm a fast learner and I'm always looking for new challenges and opportunities to grow as a developer.</p>
        </div>
    </div>
    )
}

export default About