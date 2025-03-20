import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar1 from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/recipes'
import Home from './Components/Home/home'
import About from './Components/Aboutus/about'
import Cart from './Components/Cart/cart'
import Addrecipes from './Components/Recipes/Addrecipes/Addrecipes'

const App = () => {
  return (
    <div>
      <Navbar1 />
      <Routes>
        <Route path='/home' element={<Home/>} /> 
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/about' element={<About />} /> 
        <Route path='/cart' element={<Cart />} />
        <Route path='/addrecipes' element={<Addrecipes />} /> 
      </Routes>
    </div>
  )
}

export default App


