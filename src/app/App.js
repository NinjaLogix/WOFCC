import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { _routes } from '../routes';
import { AppStyle } from './style/AppStyle';
import { WofccProvider } from '../component/context/WofccContext';
import { MenuBar } from '../component/navigation/menu/MenuBar';
import { Footer } from '../component/navigation/footer';
import { InfoConf } from '../component/info';

export const App = () => (
  <WofccProvider>
    <AppStyle>
      <InfoConf />

      <MenuBar />

      <Switch>
        {_routes.map((e, index) => (
          <Route
            key={index}
            exact={e.target === '/'}
            path={e.target}
            component={e.component}
          />
        ))}
      </Switch>

      <Footer />
    </AppStyle>
  </WofccProvider>
);
