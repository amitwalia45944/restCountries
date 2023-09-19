import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountriesApp from './countries'
import CountryDetail from './countryDetail'
import Header from './header';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Route exact path="/">
          <div>
            <CountriesApp />
          </div>
        </Route>

        <Route path="/country/:name">
          <div><CountryDetail /></div>
        </Route>

      </Router>


    </>
  )
};

export default App;
