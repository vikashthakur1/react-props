import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greeting from './Greeting'
import './App.css'
import Footer from './Footer'
import Hooks from './hooks/hooks'

function App() {


  return (
    <>
      <Greeting name="Raja"  message="Let's learn React together!"/>
      <Footer/>
      <Hooks/>
    </>
  )
}

export default App
