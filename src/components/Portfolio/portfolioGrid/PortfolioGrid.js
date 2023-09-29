import React from 'react'
import './PortfolioGrid.scss'
import PortfolioItem from './portfolioItem/PortfolioItem'
const PortfolioGrid = ({
  portfolioData,
  expanded,
  handleExpand,
  handleClose,
  showModal,
}) => (
  <div className="portfolio-grid">
    {portfolioData.map((port, idx) => (
      <PortfolioItem
        key={idx}
        port={port}
        idx={idx}
        expanded={expanded}
        handleExpand={handleExpand}
        handleClose={handleClose}
        showModal={showModal}
      />
    ))}
  </div>
)

export default PortfolioGrid
