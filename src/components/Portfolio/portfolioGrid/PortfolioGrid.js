import React from 'react'
import './PortfolioGrid.scss'
import PortfolioItem from '../portfolioItem/PortfolioItem'

const PortfolioGrid = ({ portfolioData, handleExpand }) => (
  <div className="portfolio-grid">
    {portfolioData.map((port, idx) => (
      <PortfolioItem
        key={`${port.title}-${idx}`}
        port={port}
        idx={idx}
        handleExpand={handleExpand}
      />
    ))}
  </div>
)

export default PortfolioGrid
