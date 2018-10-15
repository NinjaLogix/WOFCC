import React from 'react';
import MenuMaterial from './component/MenuMaterial';
import PageFlow from './component/PageFlow';
import './style/wofcc_master.css';
import Footer from "./component/Footer";

const App = () => {
    return (
      <div className={'app-container'}>
          <MenuMaterial/>
          <PageFlow/>
          <Footer/>
      </div>
    );
};

export default App;
