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
              {' '}
              Based in Belgium, I am a full-stack developer with a special focus
              on front-end technologies. Currently honing my skills at BeCode, I
              am eager to work with cutting-edge technologies across diverse
              projects. With a unique background in aviation, I offer
              unparalleled problem-solving abilities and creative thinking,
              skills that I have further refined in the tech world.
            </p>
            <p>
              I am quietly confident, naturally curious, and a team-player who
              is continuously improving my skills. I have been deeply committed
              to continuous learning and skill improvement. I began my coding
              journey in May 2022 and have since expanded my expertise to
              include both front-end and back-end development..
            </p>
            <p>
              Passionate about technology, I am looking to join a dynamic IT
              company where I can contribute to innovative projects and grow
              professionally. With a balanced blend of technical and soft
              skills, I am ready and eager to make a meaningful impact in an
              agile, innovation-driven environment.
            </p>
          </div>
          <div className="bottom-zone">
            <div className="reach">
              <a
                href="https://drive.google.com/file/d/1WnIGHtUzQMJQcnCNBp1Wx5kPFCWiNtEm/view?usp=sharing"
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
