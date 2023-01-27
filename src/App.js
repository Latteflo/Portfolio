import './App.scss'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './/components/Layouts'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/About/resume/resume'
import Loader from 'react-loaders'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="About/Resume" element={<Resume />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
          <Route
            path="*"
            element={<p>Oops, Page doesn't exists! Nothing Here</p>}
          />
        </Route>
      </Routes>
      <Loader type="semi-circle-spin" active />
    </>
  )
}

export default App
