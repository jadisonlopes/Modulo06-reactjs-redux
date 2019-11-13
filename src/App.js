import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyled from './styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      {/* <Header /> */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;
