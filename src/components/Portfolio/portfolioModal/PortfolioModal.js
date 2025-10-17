import React, { useEffect, useRef } from 'react'
import './PortfolioModal.scss'

// Security: Sanitize URLs to prevent XSS attacks
const sanitizeUrl = (url) => {
  if (!url || typeof url !== 'string') return null
  const trimmed = url.trim()
  
  // Only allow http and https protocols
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    // Block javascript:, data:, and other dangerous protocols
    const lowerUrl = trimmed.toLowerCase()
    if (lowerUrl.includes('javascript:') || 
        lowerUrl.includes('data:') ||
        lowerUrl.includes('vbscript:') ||
        lowerUrl.includes('file:')) {
      return null
    }
    return trimmed
  }
  return null
}

// Security: Sanitize text to prevent XSS
const sanitizeText = (text) => {
  if (!text || typeof text !== 'string') return ''
  return text.replace(/[<>]/g, '')
}

const PortfolioModal = ({ port, handleClose }) => {
  const modalContentRef = useRef(null)
  const modalRef = useRef(null)

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    
    // Focus management for accessibility
    if (modalRef.current) {
      modalRef.current.focus()
    }
    
    // Handle escape key to close modal
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscape)
    }
  }, [handleClose])

  // Security: validate port object exists
  if (!port) {
    return null
  }

  const safeUrl = sanitizeUrl(port.url)
  const safeGithubUrl = sanitizeUrl(port.urlGithub)
  const safeTitle = sanitizeText(port.title)
  const safeDescription = sanitizeText(port.description)

  const openUrl = (url) => {
    if (url) {
      // eslint-disable-next-line no-script-url
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <div 
      ref={modalRef}
      className="modal show-modal" 
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <button 
        className="close-button" 
        onClick={handleClose}
        aria-label="Close modal"
        type="button"
      >
        ×
      </button>
      <div className="modal-content" ref={modalContentRef}>
        <h2 id="modal-title">{safeTitle}</h2>
        <img 
          src={port.cover} 
          alt={safeTitle}
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
        <p>{safeDescription}</p>
        <div className="links">
          {safeUrl && (
            <button 
              onClick={() => openUrl(safeUrl)}
              type="button"
            >
              View Live Demo
            </button>
          )}
          {safeGithubUrl && (
            <button 
              onClick={() => openUrl(safeGithubUrl)}
              type="button"
            >
              View Source Code
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PortfolioModal
