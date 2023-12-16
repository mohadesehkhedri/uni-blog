import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from "src/components/NavBar"
import Footer from "src/components/Footer"


const Layout = () => (
  <>
    <div className="container-imag">
      <div className="container">
        <NavBar />
      </div>
    </div>

    <Outlet />

    <Footer />
  </>
);


export default Layout;
