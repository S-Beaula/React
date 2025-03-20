import React from 'react'
import Navbar1 from './comp/Navbar/navbar'
import Carousels from './comp/carousels/carousels'
import Data from './comp/Data/data'
import Card from './comp/Card/card'
const App = () => {
  return (
    <div>
      <Navbar1/>
      <Carousels/>
      <Data/>
      <Card/>
    </div>
  )
}
export default App