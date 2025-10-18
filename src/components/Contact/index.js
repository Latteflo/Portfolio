import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const form = useRef()
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail-sf',
        'template_webpage',
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          alert('Message successfully sent!')
          form.current.reset()
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">
          <span className={`${letterClass} _14 special`}>C</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>

        <p className="contact-description">
          I'm interested in freelance opportunities - especially ambitious or large projects.
          However, if you have any other requests or questions, don't hesitate to contact me!
        </p>

        <div className="social-links">
          <a 
            href={`mailto:${process.env.REACT_APP_EMAIL}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a 
            href={`tel:${process.env.REACT_APP_PHONE}`}
            aria-label="Phone"
          >
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a 
            href={process.env.REACT_APP_LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a 
            href={process.env.REACT_APP_GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a 
            href={process.env.REACT_APP_TWITTER_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a 
            href={process.env.REACT_APP_CODEPEN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="CodePen"
          >
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
          />

          <button type="submit" className="send-button">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
