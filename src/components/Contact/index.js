import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const form = useRef()
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000);
    }, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail-sf','template_webpage', form.current,'TLiQpez9SH3JdqU5d')
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
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="page-fill">
          <div className="text-zone">
                  <p>
            I am interested in new opportunities.</p>
            <p>
            If you have other request or question,
            don't hesitate to contact me!
             </p>
          <br/>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
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
        <div className="map-wrap">
          <MapContainer center={[50.8466,4.3528]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[50.8466,4.3528]}>
              <Popup> Hi! </Popup>
            </Marker>
          </MapContainer>
      </div>
      </div>
      </div>
      <Loader type="ball-triangle-path"  />
    </>
  )
}

export default Contact
