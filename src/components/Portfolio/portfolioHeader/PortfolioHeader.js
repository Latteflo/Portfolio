import React from 'react';
import AnimatedLetters from '../../AnimatedLetters';
import './PortfolioHeader.scss';

const PortfolioHeader = ({ letterClass }) => {
  return (
    <div className="content-header">
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
          my skills and experience in various areas of design and development.
        </p>
      </div>
    </div>
  );
};

export default PortfolioHeader;
