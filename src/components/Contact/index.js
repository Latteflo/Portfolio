import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'

const SOCIAL_LINKS = {
  linkedin: process.env.REACT_APP_LINKEDIN_URL,
  github: process.env.REACT_APP_GITHUB_URL,
  twitter: process.env.REACT_APP_TWITTER_URL,
  codepen: process.env.REACT_APP_CODEPEN_URL
}

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="contact-page">
        <div className="contact-content">
          <div className="intro">
            <h1>
              <span className="special">C</span>ontact me
            </h1>
            <div className="socials">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href={SOCIAL_LINKS.codepen} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCodepen} />
              </a>
            </div>
          </div>
          <div className="text-zone">
            <p>
              I am interested in freelance opportunities - especially ambitious or
              large projects. However, if you have other request or question,
              don't hesitate to contact me using below form either.
            </p>
          </div>
          <div className="contact-form-map">
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>
                  <li className="half">
                    <input placeholder="Email" type="email" name="email" required />
                  </li>
                  <li>
                    <input placeholder="Subject" type="text" name="subject" required />
                  </li>
                  <li>
                    <textarea placeholder="Message" name="message" required></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
