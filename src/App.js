import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import history from './history/history';
import {Landing} from "./pages/landing";
// import Services from "./pages/Services";
// import Directions from "./pages/Directions";
// import ContactUs from "./pages/ContactUs";
// import AboutUs from "./pages/AboutUs";
// import Ministries from "./pages/Ministries";
// import RecentEvents from "./pages/RecentEvents";
// import GalleryView from "./component/GalleryView";
import './style/wofcc_master.css';

const App = () => {
    return (
        <div className={'app-container'}>
            <Router history={history}>
                <Switch>
                    <Route exact path={'/'} component={Landing}/>
                    {/* <Route path={'/services'} component={Services}/>
                    <Route path={'/directions'} component={Directions}/>
                    <Route path={'/contact-us'} component={ContactUs}/>
                    <Route path={'/about-us'} component={AboutUs}/>
                    <Route path={'/ministries'} component={Ministries}/>
                    <Route path={'/events'} component={RecentEvents}/>
                    <Route path={'/gallery-view'} component={GalleryView}/> */}
                </Switch>
            </Router>
        </div>
    );
};

export default App;
