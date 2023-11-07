import React from 'react'
import './PortfolioItem.scss'
import Modal from '../portfolioModal/PortfolioModal'

const PortfolioItem = ({
  port,
  idx,
  expanded,
  handleExpand,
  handleClose,
  showModal,
}) => (
  <div
    className={`portfolio-item ${expanded === idx ? 'expanded' : ''}`}
    onClick={() => handleExpand(idx)}
  >
    <div className="container-portfolio-item">
      <img src={port.cover} className="portfolio-image" alt={port.title} />
      {showModal && expanded === idx && (
        <Modal
          displayModal={showModal}
          closeModal={(e) => {
            e.stopPropagation()
            handleClose()
          }}
          port={port}
        />
      )}
    </div>
  </div>
)

export default PortfolioItem
