import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history/history';
import { _routes } from "../_routes";
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
import { Menu } from '../component/navigation/menu';
import { Home } from "../pages/Home";

export const App = () => {
  return (
    <WofccProvider>
      <AppStyle>
        <Menu />
        <Router>
          <Switch>
            {_routes.map((e, index) => (
              <Route exact={e.target === '/'} path={e.target} component={e.component} />
            ))}
            {/*<Route exact path={'/'} component={Landing} />
            <Route path={'/home'} component={Home} />
            <Route path={'/services'} component={Services} />
            <Route path={'/directions'} component={Directions} />
            <Route path={'/contact-us'} component={ContactUs} />
            <Route path={'/about-us'} component={AboutUs} />
            <Route path={'/ministries'} component={Ministries} />
            <Route path={'/events'} component={Events} />
            <Route path={'/credits'} component={Credits} />
            <Route path={'/gallery/:id'} component={Gallery} />*/}
          </Switch>
        </Router>

        {/*todo -> footer*/}
      </AppStyle>
    </WofccProvider>
  );
};
