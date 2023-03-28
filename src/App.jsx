import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './components/Login/Login'
import { Main } from './components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Main />
    </div>
  )
}

export default App
