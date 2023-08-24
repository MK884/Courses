import './App.css'
import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { LandingPage,StdDashboard } from './Pages/index.ts'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage /> }/>
          <Route path='/std-dashboard' element={<StdDashboard /> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
