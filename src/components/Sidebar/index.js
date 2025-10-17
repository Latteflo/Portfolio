import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'

const SOCIAL_LINKS = {
  linkedin: process.env.REACT_APP_LINKEDIN_URL,
  github: process.env.REACT_APP_GITHUB_URL,
  twitter: process.env.REACT_APP_TWITTER_URL,
  codepen: process.env.REACT_APP_CODEPEN_URL
}

const Sidebar = () => (
  <div className="nav-bar">
    <nav>
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
      </Link>
      <div className="links-main">
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </div>
      <ul className="social-links">
        <li>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href={SOCIAL_LINKS.codepen} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCodepen} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
)

export default Sidebar
