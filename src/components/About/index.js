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
              I am a front end developer based in Belgium, looking for an IT
              company where I can work with the latest technologies on diverse
              projects. With a background in aviation, I have gained
              problem-solving skills and the ability to think outside the box.
              My attention to detail is also an asset when working on web
              projects.
            </p>
            <p>
              I am quietly confident, naturally curious, and a team-player who
              is continuously improving my skills. I started learning to code in
              May 2022 and have been dedicated to growing as a developer. I am a
              fast learner and always up for new challenges.{' '}
            </p>
            <p>
              I am excited to bring my passion for technology and my desire to
              learn and grow to a new company. I believe that with my
              combination of technical skills and soft skills, I can make a
              positive contribution to any team and project. I am eager to find
              a role where I can use my skills to make an impact and continue to
              develop as a professional.
            </p>
          </div>
          <div className="bottom-zone">
            <div className="reach">
              <a
                href="https://drive.google.com/file/d/10APRQA5lvVN_A5G9fyO_Mr05fSw9kFzH/view?usp=share_link"
                download
                className="flat-button"
                rel='noreferrer'
                target="_blank"
              >
                My Resume <FontAwesomeIcon icon={faDownload} />
              </a>
              <span className="social-links-about">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/florentina-simion-a97bba73/"
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
