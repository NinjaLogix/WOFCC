import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import history from './history/history';
import {Landing, Services, Directions, ContactUs, AboutUs, Ministries, RecentEvents} from './pages';
import {GalleryView} from './component/gallery';
import styled from 'styled-components';

const AppStyle = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100% ! important;
`;

const App = () => {
    return (
        <AppStyle>
            <Router history={history}>
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
            </Router>
        </AppStyle>
    );
};

export default App;
