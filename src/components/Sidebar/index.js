import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav className="nav-content">
        <span className="logo">
          <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
          </Link>{' '}
        </span>
        <span className="links-main">
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>{' '}
        </span>
        <span className="social-links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/florentina-simion-a97bba73/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Latteflo"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/Simi_Flo/"
          >
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/latteflo"
          >
            <FontAwesomeIcon icon={faCodepen} color="#4d4d4e" />
          </a>
        </span>
      </nav>
    </div>
  )
}

export default Sidebar
