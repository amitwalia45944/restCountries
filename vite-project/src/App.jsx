import React, { useState } from 'react';
import './App.css';
import CountriesApp from './countries';
import CountryDetail from './countryDetail';
import { useBlackTheme } from './Theme';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const { AlterTheme, changeTheme } = useBlackTheme();

  return (

    <Router>
        <div className={AlterTheme ? 'dark-theme' : 'light-theme'}>

          <Routes>
            <Route path="/" element={<CountriesApp />} />
            <Route path="/country/:name" element={<CountryDetail />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
