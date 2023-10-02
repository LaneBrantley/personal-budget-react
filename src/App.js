import React from 'react';
import './App.css';
import  Menu  from './Menu/Menu';
import  Hero  from './Hero/Hero';
import  HomePage  from './HomePage/HomePage';
import  Footer  from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Menu></Menu>
      <Hero></Hero>
      <div className="mainContainer">
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/login' element={<LoginPage/>} />

        </Routes>
      
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
