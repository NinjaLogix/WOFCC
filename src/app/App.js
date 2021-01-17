import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { _routes } from '../_routes';
import { AppStyle } from './style/AppStyle';
import { WofccProvider } from '../component/context/WofccContext';
import { Menu } from '../component/navigation/menu';
import { MenuBar } from '../component/navigation/menu/MenuBar';
import { Footer } from '../component/navigation/footer';

export const App = () => (
  <WofccProvider>
    <AppStyle>
      <MenuBar />

      <Switch>
        {_routes.map((e, index) => (
          <Route
            exact={e.target === '/'}
            path={e.target}
            component={e.component}
          />
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

      <Footer />
    </AppStyle>
  </WofccProvider>
);
