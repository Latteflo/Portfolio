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
          </Link>
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
            href={process.env.REACT_APP_LINKEDIN_URL}
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={process.env.REACT_APP_GITHUB_URL}
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={process.env.REACT_APP_TWITTER_URL}
          >
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={process.env.REACT_APP_CODEPEN_URL}
          >
            <FontAwesomeIcon icon={faCodepen} color="#4d4d4e" />
          </a>
        </span>
      </nav>
    </div>
  )
}

export default Sidebar
