import React from 'react';
import Header from './components/header_footer/Header';
import styles from './styles/styles.css';
import Feature from './components/featured/index';
import Info from './components/info/index';
import Highlight from './components/highlightDetails/index';
import Price from './components/price/index'
function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <Info/>
      <Highlight/>
      <Price/>
    </div>
  );
}

export default App;
