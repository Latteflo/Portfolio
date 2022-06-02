import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import LogoSub from '../../assets/images/logo-sub.png'
import { faEnvelope, faHome , faUser } from '@fortawesome/free-solid-svg-icons';
//import {  } from '@fortawesome/free-brands-svg-icons';
import {
  faLinkedin,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
         <img src={LogoS} alt="logo"/>
         {/*<img src={LogoSub} className="sub-logo" alt="florentina"/>*/}
       </Link>
       <nav>
         <NavLink exact="true" activeclassname="active" to="/">
           <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
           </NavLink>
           <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
           <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
           </NavLink>
           <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
           <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
           </NavLink>
         </nav>
         <ul>
           <li>
             <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/florentina-simion-a97bba73/">
               <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
             </a>
           </li>
           <li>
             <a target="_blank" rel='noreferrer' href="https://github.com/Latteflo">
               <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
             </a>
           </li>
           <li>
             <a target="_blank" rel='noreferrer' href="https://twitter.com/Simi_Flo/">
               <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"/>
             </a>
           </li>
         </ul>
    </div>)
}

export default Sidebar;