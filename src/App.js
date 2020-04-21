import React from 'react';
import './styles/styles.css';
import { Element } from 'react-scroll'
import Header from './components/header_footer/Header';
import Feature from './components/featured/index';
import Info from './components/info/index';
import Highlight from './components/highlightDetails/index';
import Price from './components/price/index'
import Location from './components/location/index';
import Footer from './components/header_footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Element name="sliders">
        <Feature />
      </Element>
      <Element name="info">
        <Info />
      </Element>
      <Element name="hightlights">
        <Highlight />
      </Element>
      <Element name="prices">
        <Price />
      </Element>
      <Element name="location">
        <Location />
      </Element>
        <Footer />
    </div>
  );
}

export default App;
