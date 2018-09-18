import React from 'react';
import MenuMaterial from './component/MenuMaterial';
import PageFlow from './component/PageFlow';
import './style/wofcc_master.css';
import Footer from "./component/Footer";

/**
 * TODO - Need to add the footer at the bottom of the App instead of at the bottom of each page.
 * I will also need to change how the footer is coded so that it reads from the redux store instead of working off props
 * @returns {*}
 * @constructor
 */
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
