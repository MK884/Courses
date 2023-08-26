import './App.css'
import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { Home,AdminDashboard,Classes,Exams,Quizzes,Batches,Assignments } from './Pages/index.ts'
import { Layout } from './Components/Layout/index.ts'
function App() {

  return (
    <BrowserRouter>
          <Layout>
        <Routes>

          <Route path='/' element={<Home /> }/>
          <Route path='/admin-dashboard' element={<AdminDashboard /> }/>
          <Route path='/classes' element={<Classes /> }/>
          <Route path='/exams' element={<Exams /> }/>
          <Route path='/quizzes' element={<Quizzes /> }/>
          <Route path='/batches' element={<Batches /> }/>
          <Route path='/assignments' element={<Assignments /> }/>
        </Routes>
          </Layout>
    </BrowserRouter>
  )
}

export default App
