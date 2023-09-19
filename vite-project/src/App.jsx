import React, { useState } from 'react';
import './App.css';
import CountriesApp from './countries';
import CountryDetail from './countryDetail';
import { useDarkTheme } from './Theme';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const { isDarkTheme, toggleTheme } = useDarkTheme();

  return (

    <Router>
        <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>

          <Routes>
            <Route path="/" element={<CountriesApp />} />
            <Route path="/country/:name" element={<CountryDetail />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
