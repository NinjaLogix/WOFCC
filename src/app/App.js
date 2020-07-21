import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history/history';
import {
  Landing,
  Services,
  Directions,
  ContactUs,
  AboutUs,
  Ministries,
  Events,
  Credits,
} from '../pages';
import { AppStyle } from './style/AppStyle';
import { Gallery } from '../component/gallery/Gallery';
import { WofccProvider } from '../component/context/WofccContext';

export const App = () => {
  return (
    <WofccProvider>
      <AppStyle>
        <Router history={history}>
          <Switch>
            <Route exact path={'/'} component={Landing} />
            <Route path={'/services'} component={Services} />
            <Route path={'/directions'} component={Directions} />
            <Route path={'/contact-us'} component={ContactUs} />
            <Route path={'/about-us'} component={AboutUs} />
            <Route path={'/ministries'} component={Ministries} />
            <Route path={'/events'} component={Events} />
            <Route path={'/credits'} component={Credits} />
            <Route path={'/gallery/:id'} component={Gallery} />
          </Switch>
        </Router>

        {/*todo -> footer*/}
      </AppStyle>
    </WofccProvider>
  );
};
