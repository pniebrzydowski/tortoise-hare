import React, { FunctionComponent } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import SiteHeader from './components/SiteHeader';
import GlobalStyles from './design/globalStyle';
import theme from './design/theme';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import RaceDetail from './pages/RaceDetailPage';
import RunnerDetail from './pages/RunnerDetailPage';
import SeriesDetail from './pages/SeriesDetailPage';
import SeriesList from './pages/SeriesListPage';
import routes from './routing/routes';

const StyledMain = styled("main")`
  padding: ${(props) => props.theme.spacing.medium};

  & > *:not(nav) + * {
    margin-top: ${(props) => props.theme.spacing.xLarge};
  }
`;

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router basename={process.env.PUBLIC_URL}>
        <SiteHeader />
        <StyledMain>
          <Switch>
            <Route path={routes.HOME} exact>
              <Home />
            </Route>
            <Route path={routes.SERIES_LIST} exact>
              <SeriesList />
            </Route>
            <Route path={routes.SERIES_DETAIL}>
              <SeriesDetail />
            </Route>
            <Route path={routes.RACE_DETAIL}>
              <RaceDetail />
            </Route>
            <Route path={routes.RUNNER_DETAIL}>
              <RunnerDetail />
            </Route>

            <Route path={routes.LOGIN} exact>
              <Login />
            </Route>
          </Switch>
        </StyledMain>
      </Router>
    </ThemeProvider>
  );
};

export default App;
