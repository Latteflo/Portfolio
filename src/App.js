import './App.scss'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './/components/Layouts'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/About/resume/resume'
import Certificates from './components/About/certificates/certificates'
import Loader from 'react-loaders'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="About/Resume" element={<Resume />} />
          <Route path="About/Certificates" element={<Certificates />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
          <Route
            path="*"
            element={<p>Oops, Page doesn't exists! Nothing Here</p>}
          />
        </Route>
      </Routes>
      <Loader type="ball-pulse" active />
    </>
  )
}

export default App
