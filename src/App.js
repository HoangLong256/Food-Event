import React from 'react';
import Header from './components/header_footer/Header';
import styles from './styles/styles.css';
import Feature from './components/featured/index';
import Info from './components/info/index'
function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <Info/>
    </div>
  );
}

export default App;
