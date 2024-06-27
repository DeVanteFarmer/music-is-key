/* eslint-disable no-unused-vars */
import React from 'react';
import { Nav, NavLink, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { Logo } from '../../assets/logo.jsx';

export const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="navbar-custom" expand="md"> 
        <NavbarBrand href="/" className="d-flex align-items-center">
          <Logo size={40} style={{ marginRight: 10 }} />
          <span>Music-Is-KEY</span>
        </NavbarBrand>
        <Nav className="ml-auto d-flex align-items-center" navbar>
          <NavItem>
            <Link to="/MusicPage" className="nav-link">Music</Link>
          </NavItem>
          <NavItem>
            <Link to="/Profile" className="nav-link">Profile</Link>
          </NavItem>
          <NavItem>
            <Link to="/Submit" className="nav-link">Submit</Link>
          </NavItem>
          <NavLink
            href="/"
            onClick={() => {
              localStorage.removeItem("freq_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </NavLink>
        </Nav> 
      </Navbar>
    </>
  );
};
