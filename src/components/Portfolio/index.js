import React, { useState, useEffect } from 'react'
import PortfolioData from '../../data/portfolio.json'
import PortfolioHeader from './portfolioHeader/PortfolioHeader'
import PortfolioGrid from './portfolioGrid/PortfolioGrid'
import PortfolioModal from './portfolioModal/PortfolioModal'
import './Portfolio.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [expanded, setExpanded] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleExpand = (idx) => {
    setExpanded(idx)
    setShowModal(true)
  }

  const handleClose = () => {
    setExpanded(null)
    setShowModal(false)
  }
  
  const reversedPortfolioData = [...PortfolioData.portfolio].reverse()

  return (
    <>
      <div className="portfolio-page">
        <PortfolioHeader letterClass={letterClass} />
        
        <div className="portfolio-separator"></div>
        
        <div className="portfolio-data">
          <PortfolioGrid
            portfolioData={reversedPortfolioData}
            expanded={expanded}
            handleExpand={handleExpand}
            handleClose={handleClose}
            showModal={showModal}
          />
        </div>
        
        {showModal && expanded != null && (
          <PortfolioModal
            port={reversedPortfolioData[expanded]}
            handleClose={handleClose}
          />
        )}
      </div>
    </>
  )
}

export default Portfolio
