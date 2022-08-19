import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Layout from './/components/Layouts';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Ociliator from './3d animation/Oscillator';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={< Layout />} >
      <Route index element={< Home />} />
      <Route path="about" element={< About />} />     
      <Route path="portfolio" element={< Portfolio />} />
      <Route path="contact" element={< Contact />} />
      <Route path="Ociliator" element={< Ociliator />} />
      </Route>
      </Routes>
      </>
  );
}

export default App;
