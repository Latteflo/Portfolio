import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
  const form = useRef()
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLetterClass('text-animate-hover');
  }, []);

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
            <h2 className='title'>
              <span className={`${letterClass} _14 special`}>C</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h2>
            <span className="socials">
            <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href={`tel:${process.env.REACT_APP_PHONE}`}>
                <FontAwesomeIcon icon={faPhone} />
              </a>

              <a href={`https://www.linkedin.com/in/${process.env.REACT_APP_LINKEDIN_URL}`}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href={process.env.REACT_APP_GITHUB_URL}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </span>
          </div>
          <div className="text-zone">
            <p>I am interested in new opportunities.</p>
            <p>
              If you have other request or question, don't hesitate to contact
              me!
            </p>
          </div>
          <div className="contact-form-map">
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
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
