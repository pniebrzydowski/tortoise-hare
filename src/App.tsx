import React, { FunctionComponent } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import SiteHeader from './components/SiteHeader';
import GlobalStyles from './design/globalStyle';
import theme from './design/theme';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PasswordResetPage from './pages/PasswordResetPage';
import RaceDetailPage from './pages/RaceDetailPage';
import RunnerDetailPage from './pages/RunnerDetailPage';
import SeriesDetailPage from './pages/SeriesDetailPage';
import SeriesListPage from './pages/SeriesListPage';
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
              <HomePage />
            </Route>
            <Route path={routes.SERIES_LIST} exact>
              <SeriesListPage />
            </Route>
            <Route path={routes.SERIES_DETAIL}>
              <SeriesDetailPage />
            </Route>
            <Route path={routes.RACE_DETAIL}>
              <RaceDetailPage />
            </Route>
            <Route path={routes.RUNNER_DETAIL}>
              <RunnerDetailPage />
            </Route>

            <Route path={routes.LOGIN} exact>
              <LoginPage />
            </Route>
            <Route path={routes.FORGOT_PASSWORD} exact>
              <PasswordResetPage />
            </Route>
          </Switch>
        </StyledMain>
      </Router>
    </ThemeProvider>
  );
};

export default App;
