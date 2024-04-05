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
import dotenv from 'dotenv'

dotenv.config()

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
            <div>
              <h2>Hey there! I'm Flo.</h2>
              <p>
                My journey started up in the air, literally, as a flight
                attendant. That job taught me a ton about adapting to new
                situations, working closely with all sorts of people, and the
                thrill of diving into new experiences. Now, I've traded in my
                wings for web development and cybersecurity, where I get to
                tackle different kinds of challenges but with the same
                excitement.
              </p>
              <p>
                These days, I'm sharpening my skills at BeCode, getting my hands
                dirty with both the design side of things and the nitty-gritty
                of back-end logic. It's all about making stuff that not only
                looks good but works well too.
              </p>
              <p>
                When I'm not coding, you might find me swimming, hunting down
                the best coffee spots or planning my next travel adventure. I love to
                keep learning, whether it's a new programming language or the
                latest in cyber security, to make sure I'm always bringing my
                A-game.
              </p>
              <p>
                I'm on the lookout for a cool IT company where I can put my
                skills to good use, work on projects that matter, and keep
                growing. I bring a mix of team spirit, a keen eye for detail,
                and a whole lot of enthusiasm to everything I do. Let's make
                something awesome together.
              </p>
            </div>
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
                  href={process.env.REACT_APP_LINKEDIN_URL}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={process.env.REACT_APP_GITHUB_URL}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={process.env.REACT_APP_TWITTER_URL}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={process.env.REACT_APP_CODEPEN_URL}
                >
                  <FontAwesomeIcon icon={faCodepen} />
                </a>
              </span>
            </div>
            <span class="wordcloud">
              <WordCloud />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
