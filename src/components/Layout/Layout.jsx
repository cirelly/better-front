import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'


const Layout = ({children}) => {
  return (
    <div className='c-layout'>
        <NavBar />
        {children}
        <Outlet />
        <Footer />
        
    </div>
  )
}

export default Layout