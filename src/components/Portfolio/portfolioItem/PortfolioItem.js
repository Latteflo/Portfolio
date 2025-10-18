import React from 'react'
import './PortfolioItem.scss'

const PortfolioItem = ({ port, idx, handleExpand }) => {
  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23181818" width="400" height="300"/%3E%3Ctext fill="%2313ffe0" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-size="20"%3E' + encodeURIComponent(port.title) + '%3C/text%3E%3C/svg%3E'
  }

  return (
    <div
      className="portfolio-item"
      onClick={() => handleExpand(idx)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleExpand(idx)
        }
      }}
      aria-label={`View details for ${port.title}`}
    >
      <div className="container-portfolio-item">
        <img 
          src={port.cover} 
          className="portfolio-image" 
          alt={port.title}
          onError={handleImageError}
          loading="lazy"
        />
        <div className="portfolio-overlay">
          <h3>{port.title}</h3>
          <p>Click to view details</p>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
