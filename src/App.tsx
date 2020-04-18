import React, { FunctionComponent } from 'react';

import SiteHeader from './components/SiteHeader';
import GlobalStyles from './design/globalStyle';

const App: FunctionComponent = () => {
  return (
    <>
      <GlobalStyles />
      <SiteHeader />
    </>
  );
};

export default App;
