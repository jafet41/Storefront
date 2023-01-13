import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleTire from './pages/SingleTire';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='tire/:id' element={<SingleTire />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
