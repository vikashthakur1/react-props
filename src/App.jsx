import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greeting from './Greeting'
import './App.css'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting name="Raja"  message="Let's learn React together!"/>
      <Footer/>
    </>
  )
}

export default App
