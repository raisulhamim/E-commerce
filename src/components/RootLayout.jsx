import React from 'react'
import News from '../layouts/News'
import Navbar from '../layouts/Navbar'
import Footar from '../layouts/Footar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <News/>
        <Navbar/>

        <Outlet/>
        
        <Footar/>
    </div>
  )
}

export default RootLayout