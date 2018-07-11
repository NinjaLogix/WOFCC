import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from '../pages/Landing';
//import Services from '../pages/Services';

const PageFlow = () => {
    return (
        <Router>
            <Route exact path='/' component={Landing}/>
            {/*<Route path='/services' component={Services}/>*/}
        </Router>
    );
};

export default PageFlow;