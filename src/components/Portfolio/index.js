import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from '../../data/portfolio.json';


const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(portfolioData);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }); 


    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover} 
                                className="portfolio-image"
                                alt="portfolio" />
                             
                                <div className="content">
                                    <p className="title"> {port.title} </p>  
                                    <p className="technologies">Build with: {port.technologies} </p>
                                    <h4 className="description"> {port.description} </h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <div className="text-zone">
                <h1 className="page-title">
                <span className={`${letterClass} _14 special`}>P</span>
                <AnimatedLetters
                 letterClass={letterClass}
                 strArray={['o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                 idx={15}
            />
                </h1>
                </div>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="ball-triangle-path" />
        </>
    );
}

export default Portfolio;