import React, { useEffect, useState } from 'react'
import portfolioData from '../../data/portfolio.json'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])

  const handleExpand = (idx) => {
    setExpanded(idx)
  }

  const handleClose = () => {
    setExpanded(null)
  }

  const renderPortfolio = (portfolio) => {
    return (
      <div className="portfolio-grid">
        {portfolio.map((port, idx) => {
          return (
            <div
              key={`portfolio-${port.id}-${idx}`}
              className={`portfolio-item ${expanded === idx ? 'expanded' : ''}`}
            >
              <div className="container">
                <div className="card" onClick={() => handleExpand(idx)}>
                  <img
                    src={port.cover}
                    className="portfolio-image"
                    alt="portfolio"
                  />
                  <p className="title"> {port.title} </p>
                </div>
                <div className="open-content">
                  <button onClick={handleClose} className="close-content">
                    <span>X</span>
                  </button>
                  <div className="open-content-body">
                    <div className="open-content-image">
                      <img src={port.cover} alt="open-page " />
                    </div>
                    <div className="open-content-text">
                      <h2>{port.title}</h2>
                      <div className="content">
                        <p className="technologies">
                          <span>Build with:</span>
                          {port.technologies.map((tech) => (
                            <img
                              className="tech-icon"
                              key={tech.name}
                              src={tech.icon}
                              alt={tech.name}
                            />
                          ))}
                        </p>
                        <h4 className="description">{port.description}</h4>
                        <div className="links">
                          <button
                            className="btn"
                            onClick={() => window.open(port.url)}
                          >
                            Live
                          </button>
                          <button
                            className="btn"
                            onClick={() => window.open(port.urlGithub)}
                          >
                            Code
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{' '}
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <>
      <div className="portfolio-page">
        <div className="content">
          <div className="text-zone">
            <h2 className="page-title">
              <span className={`${letterClass} _14 special`}>P</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                idx={15}
              />
            </h2>
            <p className="page-description">
              Here you will find a selection of my recent projects that showcase
              my skills and experience in various areas of design and
              development.
            </p>
          </div>
          <div className="portfolio-data">
            {renderPortfolio(portfolioData.portfolio)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
