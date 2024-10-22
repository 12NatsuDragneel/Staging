import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import OurProject from './Components/OurProject/OurProject';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';



function App() {
  return (
    <div className="app">
    <div className='main1'>
      <BrowserRouter>
        {/* <Header /> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Projects' element={<OurProject />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
