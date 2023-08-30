import React, { useState, useEffect } from 'react';
import PortfolioData from '../../data/portfolio.json';
import PortfolioHeader from './portfolioHeader/PortfolioHeader';
import PortfolioGrid from './portfolioGrid/PortfolioGrid';
import PortfolioModal from './portfolioModal/PortfolioModal';
import './Portfolio.scss';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [expanded, setExpanded] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLetterClass('text-animate-hover');
  }, []);

  const handleExpand = (idx) => {
    setExpanded(idx);
    setShowModal(true);
  };

  const handleClose = () => {
    setExpanded(null);
    setShowModal(false);
  };

  return (
    <>
      <div className="portfolio-page">
        <PortfolioHeader letterClass={letterClass} />
        <div className="portfolio-data">
          <PortfolioGrid
            portfolioData={PortfolioData.portfolio}
            expanded={expanded}
            handleExpand={handleExpand}
            handleClose={handleClose}
            showModal={showModal}
          />
        </div>
        {showModal && (
          <PortfolioModal
            port={PortfolioData.portfolio[expanded]}
            handleClose={handleClose}
          />
        )}
      </div>
    </>
  );
};

export default Portfolio;
