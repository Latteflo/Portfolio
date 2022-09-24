import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHtml5,
    faJs,
    faCss3,
    faReact,
    faGithub,
    faBootstrap,
    faSass,

  } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
  return (
    <>
    <div className="slider">
	<div className="slide-track">
		<div className="slide">
        <FontAwesomeIcon  icon={faHtml5} color="#ffd700"  />
		</div>
		<div className="slide">
        <FontAwesomeIcon icon={faJs} color="#ffd700" />
		</div>
		<div className="slide">
        <FontAwesomeIcon icon={faCss3} color="#ffd700" />
		</div>
		<div className="slide">
        <FontAwesomeIcon icon={faReact} color="#ffd700"/>
		</div>
		<div className="slide">
		<FontAwesomeIcon icon={faGithub} color="#ffd700" />
		</div>
		<div className="slide">
		<FontAwesomeIcon icon={faBootstrap} color="#ffd700" />
		</div>
		<div className="slide">
        <FontAwesomeIcon icon={faSass} color="#ffd700"/>
		</div>  
	</div>
</div>
    </>
  )
}

export default Skills