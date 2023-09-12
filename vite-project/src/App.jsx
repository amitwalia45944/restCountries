import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountriesApp from './countries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CountriesApp />
      </div>
      
    </>
  )
};

export default App;
