import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import history from '../history/history';
import {Landing, Services, Directions, ContactUs, AboutUs, Ministries, Events, Credits} from '../pages';
import {GalleryView} from '../component/gallery';
import {AppStyle} from './AppStyle';

const App = () => (
    <AppStyle>
        <Router history={history}>
            <Switch>
                <Route exact path={'/'} component={Landing}/>
                <Route path={'/services'} component={Services}/>
                <Route path={'/directions'} component={Directions}/>
                <Route path={'/contact-us'} component={ContactUs}/>
                <Route path={'/about-us'} component={AboutUs}/>
                <Route path={'/ministries'} component={Ministries}/>
                <Route path={'/events'} component={Events}/>
                <Route path={'/credits'} component={Credits}/>
                <Route path={'/gallery-view'} component={GalleryView}/>
            </Switch>
        </Router>
    </AppStyle>
)

export default App;