
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Home from './components/Home'
import PasswordReset from './components/PasswordReset'
import Register from './components/Register'

import Userdetails from './components/userdetails'
import Login from './components/Login'


const App = () => {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}> </Route>
      <Route path='/Login' element={<Login />}> </Route>
      <Route path='/register' element={<Register />}> </Route>
      <Route path='/userdetails' element={<Userdetails />}> </Route>
      <Route path='/PasswordReset' element={<PasswordReset />}> </Route>
    </Routes>
    
    </BrowserRouter>    
    </>
  )
}

export default App