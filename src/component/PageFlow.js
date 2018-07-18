import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Services from '../pages/Services';
import Directions from '../pages/Directions';
import ContactUs from '../pages/ContactUs';

class PageFlow extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route path='/services' component={Services}/>
                <Route path={'/directions'} component={Directions}/>
                <Route path={'/contact-us'} component={ContactUs}/>
            </Switch>
        );
    }
}

export default PageFlow;