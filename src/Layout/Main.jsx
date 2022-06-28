import React from 'react'
import { Outlet } from "react-router-dom";

// Pages
import Navigation from '../Components/Navigation';

import '../Assets/Style/Style.css';
import Footer from '../Components/Footer';

function Main() {
  return (
    <React.Fragment>
      <nav className='bg-1'>
        <Navigation />
      </nav>

      <main>
        <Outlet />
      </main>
    </React.Fragment>
  )
}

export default Main