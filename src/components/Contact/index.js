import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
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
        'TLiQpez9SH3JdqU5d'
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
              <a href="mailto:sf.simion.f@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="tel:+40729784503">
                <FontAwesomeIcon icon={faPhone} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=+40729784503">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>

              <a href="https://www.linkedin.com/in/flori-simion-a97bba73/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/Latteflo">
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
            <div className="map-wrap">
              <MapContainer center={[50.8466, 4.3528]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[50.8466, 4.3528]}></Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
