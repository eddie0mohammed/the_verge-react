import React from 'react';
import './resources/styles.css';
import Header from './components/Header_Footer/Header';
import Features from './components/Features/Features';
import VenueInfo from './components/VenueInfo/VenueInfo';
import Highlights from './components/Highlights/Highlights';
import Pricing from './components/Pricing/Pricing';
import Location from './components/Location/Location';
import Footer from './components/Header_Footer/Footer';
import {Element} from 'react-scroll';


function App() {
  return (
    <div className="App" style={{height: '1500px', background: 'pink'}}>
      <Element name="header"><Header /></Element>
      <Element name="features"><Features /></Element>
      <Element name="venueInfo"><VenueInfo /></Element>
      <Element name="highlights"><Highlights /></Element>
      <Element name="pricing" > <Pricing /></Element>
      <Element name="location"><Location /></Element>
      <Footer />
    
    
      
     
      
      
     
      
      
    </div>
  );
}

export default App;
