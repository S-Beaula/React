import React, { useState, useEffect } from 'react'
import Navbar1 from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/products'
import Aboutus from './Pages/Aboutus/Aboutus'
import SingleProduct from './Pages/Products/singleProduct'
import { Route, Routes } from 'react-router-dom'
import a from 'axios'
const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    a.get("https://dummyjson.com/recipes").then(res => {
      setData(res.data.recipes)
    })
      .catch(err => console.log(err))
  }, [])


  return (

    <div>
      <Navbar1 />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products' element={<Products data={data} />}></Route>
        <Route path='/products/:id' element={<SingleProduct data={data} />}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
      </Routes>
    </div>


  )
}

export default App
