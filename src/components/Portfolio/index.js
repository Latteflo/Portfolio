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
  console.log(portfolioData)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  const renderPortfolio = (portfolio) => {
    return (
      <Swiper
      slidesPerView={2}
      spaceBetween={20}
      slidesPerGroup={1}
      centeredSlides={true}
      loop={true}
      loopFillGroupWithBlank={true}
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
                <div className="portfolio-item">
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
                    <button
                      className="btn"
                      onClick={() => window.open(port.url)}
                    >
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
        <div className="text-zone">
          <h1 className="page-title">
            <span className={`${letterClass} _14 special`}>P</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
              idx={15}
            />
          </h1>
        </div>
        <div className="portfolio-data">
          {renderPortfolio(portfolioData.portfolio)}
        </div>
      </div>
    </>
  )
}

export default Portfolio