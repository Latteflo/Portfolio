import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts';
import Home from './components/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />

      </Routes>
      </>
  );
}

export default App;
