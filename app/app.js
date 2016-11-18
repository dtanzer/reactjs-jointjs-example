import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './Header';
import { MainSection } from './MainSection';

ReactDOM.render(
  <div>
    <Header />
    <MainSection />
  </div>,
  document.getElementById('app-root')
);
