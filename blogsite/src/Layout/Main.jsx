import React from 'react'
import { Outlet } from "react-router-dom";

// Pages
import Navigation from '../Components/Navigation';

import '../Assets/Style/Style.css';

function Main() {
  return (
    <React.Fragment>
      <nav className='bg-light text-dark shadow-sm fixed-top'>
        <Navigation />
      </nav>

      <main id='body'>
        <Outlet />
      </main>
    </React.Fragment>
  )
}

export default Main