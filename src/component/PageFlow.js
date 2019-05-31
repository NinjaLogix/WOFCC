import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Services from '../pages/Services';
import Directions from '../pages/Directions';
import ContactUs from '../pages/ContactUs';
import AboutUs from "../pages/AboutUs";
import Ministries from '../pages/Ministries';
import RecentEvents from '../pages/RecentEvents';
import GalleryView from "./GalleryView";

class PageFlow extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path={'/'} component={Landing}/>
                <Route path={'/services'} component={Services}/>
                <Route path={'/directions'} component={Directions}/>
                <Route path={'/contact-us'} component={ContactUs}/>
                <Route path={'/about-us'} component={AboutUs}/>
                <Route path={'/ministries'} component={Ministries}/>
                <Route path={'/events'} component={RecentEvents}/>
                <Route path={'/gallery-view'} component={GalleryView}/>
            </Switch>
        );
    }
}

export default PageFlow;
