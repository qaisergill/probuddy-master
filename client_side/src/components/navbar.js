import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CgMenu, CgCloseR } from "react-icons/cg"

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 2rem;

    li {
      list-style: none;

    
    }
  }
`;

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>

        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(true)} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(true)} to="/about">
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(true)} to="/services">
              Services
            </NavLink>
          </li> */}
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(true)} to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(true)} to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" onClick={() => setOpenMenu(true)} to="/signup">
              Registration
            </NavLink>
          </li>
          {/* <li>
          <NavLink to="/">
            <button> Get Started</button>
          </NavLink>
          </li> */}
        </ul>
        <div className="mobile_navbar_btn">
          <CgMenu name="menu-outline" className='mobile-nav-icon' onClick={() => setOpenMenu(true)} />
          <CgCloseR name="close-outline" className='close-outline mobile-nav-icon' onClick={() => setOpenMenu(false)} />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
