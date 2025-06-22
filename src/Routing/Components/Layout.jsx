import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <div>
        <nav className='fixed top-0 w-full flex  justify-around p-4 mb-10 bg-gray-200'>
            <NavLink to="/" className={({isActive}) => `${isActive ? "text-orange-600":"text-gray-600"} font-bold text-2xl` }>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => `${isActive ? "text-orange-600":"text-gray-600"} font-bold text-2xl`}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => `${isActive ? "text-orange-600":"text-gray-600"} font-bold text-2xl`}>Contact</NavLink>
        </nav>

        {/* Renders the matching child route of a parent route or nothing if no child route matches */}
       
       <div className='min-h-screen'>
         <Outlet />
       </div>
 
        <Footer/>
        
    </div>
  )
}

export default Layout
