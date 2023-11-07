import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import WordCloud from '../WordCloud'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])

  return (
    <>
      <div className="about-page">
        <div className="about">
          <div className="text-zone">
            <h2>
              <span className={`${letterClass} _14 special`}>A</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h2>
            <p>
              In the heart of Belgium's tech community, I'm building a bridge
              between the structured world of aviation and the innovative space
              of full-stack development. My background in flying has taught me
              precision and adaptability, traits I now apply to coding. Whether
              it's front-end design or back-end logic, I bring the same
              attention to detail. Currently active in the collaborative &
              immersive learning environment of BeCode, I am sharpening my skill
              set to embrace the challenges and opportunities of the
              ever-evolving digital landscape.
            </p>
            <p>
              I am quietly confident, naturally curious, and a team-player who
              is continuously improving my skills.
            </p>
            <p>
              I have found my passion for crafting user-centric solutions, and
              now I am looking to join a dynamic IT company where I can
              contribute to innovative projects and grow professionally. With a
              balanced blend of technical and soft skills, I am ready and eager
              to make a meaningful impact in an agile, innovation-driven
              environment.
            </p>
          </div>
          <div className="bottom-zone">
            <div className="reach">
              <a
                href="https://drive.google.com/file/d/1nGWorHLkJXewLHx7MuSScAuNpFfbGQkE/view?usp=sharing"
                download
                className="flat-button"
                rel="noreferrer"
                target="_blank"
              >
                My Resume <FontAwesomeIcon icon={faDownload} />
              </a>
              <span className="social-links-about">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/florentina-s-a97bba73/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Latteflo"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/Simi_Flo/"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://codepen.io/latteflo"
                >
                  <FontAwesomeIcon icon={faCodepen} />
                </a>
              </span>
            </div>
            <span class="wordcloud">
              {' '}
              <WordCloud />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
