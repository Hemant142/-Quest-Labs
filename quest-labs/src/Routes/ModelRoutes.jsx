import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Messages from '../Pages/Messages'
import Help from '../Pages/Help'
import News from '../Pages/News'

export default function ModelRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/news' element={<News/>}/>
    </Routes>
  )
}
