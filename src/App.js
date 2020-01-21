import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import LocalInfo from './components/localinfo'
import FacteurInfo from './components/facteurInfo'
import ProductInfo from './components/produitInfo'
import PrixInfo from './components/prixInfo'
import Pdf from 'react-to-pdf'


const ref = React.createRef();

function App() {
  return (
    <div className="App" style={{width:'880px',padding:'5px', margin:'0 auto'}}>
    
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Print Pdf</button>}
      </Pdf>

      <div ref={ref} >
        <Header />
        <div className="info">
          <div className="Finfo"><FacteurInfo /></div>
          <div className="Linfo"><LocalInfo /></div>
        </div>
        <div><ProductInfo/></div>
        <br/>
        <div style={{width:'500px', margin:'0 auto'}}><PrixInfo /></div>
        <div><Footer /></div>
      </div>

    </div>
  );
}

export default App;
