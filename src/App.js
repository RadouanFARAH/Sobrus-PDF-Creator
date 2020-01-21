import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import LocalInfo from './components/localinfo'
import FacteurInfo from './components/facteurInfo'
import ProductInfo from './components/produitInfo'



function App() {
  return (
    <div className="App">
      <Header />
      <div className="info">
        <div className="Finfo"><FacteurInfo /></div>
        <div className="Linfo"><LocalInfo /></div>
      </div>
      <ProductInfo/>
      <Footer />
    </div>
  );
}

export default App;
