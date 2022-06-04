import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-f.png'
import AnimatedLetters from '../AnimatedLetters'
import'./index.scss'


const Home =()=>{
const [letterClass, setLetterClass]= useState('text-animate')
const nameArray=['l','o', 'r','e', 'n', 't', 'i', 'n', 'a', ' ', 'S', 'i', 'm', 'i', 'o', 'n']
const jobArray=['W', 'e', 'b',' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r','.']

    return(
        <div className="container home-page">
            <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass}_12`}>i</span>
                <br/> 
                <span className={`${letterClass}_13`}>I</span>
                <span className={`${letterClass}_14`}>'m</span>
            <img src={LogoTitle} alt="developer"/>
            <AnimatedLetters letterClass={letterClass} 
            strArray={nameArray} 
            idx={15}/>
            <br/>
            <AnimatedLetters letterClass={letterClass} 
            strArray={jobArray} 
            idx={22}/>
            </h1>    
            <h2>Frontend Developer  / JavaScript Enthusiast / FullStack Aspirrer</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home