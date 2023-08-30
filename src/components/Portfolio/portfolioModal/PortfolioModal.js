import React, { useEffect, useRef } from 'react';
import './PortfolioModal.scss';

const PortfolioModal = ({ port, handleClose }) => {
  const modalContentRef = useRef(null);

  useEffect(() => {
    const content = modalContentRef.current;
    if (content) {
      let scrollDistance = 0;
      const maxScrollDistance = 50;
      const scrollStep = 2;
      const scrollSpeed = 20; // Lower value for faster speed

      // Function to handle scroll down and up
      const handleScroll = (direction) => {
        const interval = setInterval(() => {
          scrollDistance += direction === 'down' ? scrollStep : -scrollStep;
          content.scrollTop = scrollDistance;

          if (direction === 'down' && scrollDistance >= maxScrollDistance) {
            clearInterval(interval);
            handleScroll('up');
          } else if (direction === 'up' && scrollDistance <= 0) {
            clearInterval(interval);
          }
        }, scrollSpeed);
      };

      // Start scrolling down after 300ms
      setTimeout(() => {
        handleScroll('down');
      }, 300);
    }
  }, []);

  return (
    <div className="modal show-modal">
      <button className="close-button" onClick={(e) => { e.stopPropagation(); handleClose(); }}>
        ×
      </button>
      <div className="modal-content" ref={modalContentRef}>
        <h2>{port.title}</h2>
        <img src={port.cover} alt={port.title} />
        <p>{port.description}</p>
        <div className="links">
          <button onClick={() => window.open(port.url)}>Live</button>
          <button onClick={() => window.open(port.urlGithub)}>Code</button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
