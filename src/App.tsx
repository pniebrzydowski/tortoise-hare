import React, { FunctionComponent } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import RaceDetail from './components/pages/RaceDetail';
import SeriesDetail from './components/pages/SeriesDetail';
import SeriesList from './components/pages/SeriesList';
import UserDetail from './components/pages/UserDetail';
import SiteHeader from './components/SiteHeader';
import GlobalStyles from './design/globalStyle';
import routes from './routing/routes';

const App: FunctionComponent = () => {
  return (
    <>
      <GlobalStyles />
      <SiteHeader />
      <Router>
        <Switch>
          <Route path={routes.HOME} exact>
            <Home />
          </Route>
          <Route path={routes.SERIES_LIST} exact>
            <SeriesList />
          </Route>
          <Route path={routes.SERIES_DETAIL} exact>
            <SeriesDetail />
          </Route>
          <Route path={routes.RACE_DETAIL} exact>
            <RaceDetail />
          </Route>
          <Route path={routes.USER_DETAIL} exact>
            <UserDetail />
          </Route>

          <Route path={routes.LOGIN} exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
