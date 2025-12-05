import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Sidebar/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout