import React, { FunctionComponent } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import SiteHeader from './components/SiteHeader';
import GlobalStyles from './design/globalStyle';
import theme from './design/theme';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import RaceDetail from './pages/RaceDetailPage';
import SeriesDetail from './pages/SeriesDetailPage';
import SeriesList from './pages/SeriesListPage';
import UserDetail from './pages/UserDetailPage';
import routes from './routing/routes';

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <SiteHeader />
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
    </ThemeProvider>
  );
};

export default App;
