import React, { useState } from 'react';
import './App.css';
import CountriesApp from './countries';
import CountryDetail from './countryDetail';
import Header from './header';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CountriesApp />} />
          <Route path="/country/:name" element={<CountryDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
