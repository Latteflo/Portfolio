import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../../data/portfolio.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  const toggle = (e) => {
    e.currentTarget.classList.toggle('active')
  }

  const renderPortfolio = (portfolio) => {
    return (
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {portfolio.map((port, idx) => {
          return (
            <SwiperSlide key={`portfolio-${port.id}-${idx}`}>
              <div className="portfolio-item" onClick={toggle}>
                <img
                  src={port.cover}
                  className="portfolio-image"
                  alt="portfolio"
                />
                <div className="content">
                  <p className="title"> {port.title} </p>
                  <p className="technologies">
                    <span>Build with:</span> {port.technologies}{' '}
                  </p>
                  <h4 className="description"> {port.description} </h4>
                  <button className="btn" onClick={() => window.open(port.url)}>
                    View
                  </button>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    )
  }

  return (
    <>
      <div className="portfolio-page">
        <div className="content">
          <div className="text-zone">
            <h1 className="page-title">
              <span className={`${letterClass} _14 special`}>P</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                idx={15}
              />
            </h1>
            <p className="page-description">
              Here you will find a selection of my recent projects that showcase
              my skills and experience in various areas of design and
              development.
              <br />
              Click on any project to see more details.
            </p>
          </div>
          <div className="portfolio-data ">
            {renderPortfolio(portfolioData.portfolio)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
