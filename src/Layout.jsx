import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './Components'

function Layout() {
  return (

    <div className="" style={{
      backgroundImage: `url('src/Assests/Landing-page/imageCopy.png')`,
      backgroundSize: 'cover'
    }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout