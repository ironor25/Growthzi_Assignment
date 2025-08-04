import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrencyConverter from './components/CurrencyConvert'
import ResumeParser from './components/Resume_Parser'
import ContentTranslator from './components/ContentTranslate'

function App() {

  return (
    <div className='h-screen w-screen bg-gray-500'>
      <div className='flex justify-center items-center'>
        <CurrencyConverter/>
        <ResumeParser/>
        <ContentTranslator/>
      </div>

    </div>
  )
}

export default App
