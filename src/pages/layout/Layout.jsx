import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Sidebar/>
      <main className='pl-70 pt-5'>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout