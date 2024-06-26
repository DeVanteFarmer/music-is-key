/* eslint-disable no-unused-vars */
// src/components/LoginNav.jsx
import React from 'react'
import { Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap'
import './NavBar.css'
import { Logo } from '../../assets/logo.jsx'
import { Link } from 'react-router-dom'


export const LoginNav = () => {
  return (
    <>
      <Navbar className="navbar-dark" color="dark" dark expand="md"> 
      <NavbarBrand href="/" className="d-flex align-items-center">
        <Logo size={40} style={{ marginRight: 10 }} />
        <span>Music-Is-KEY</span>
        <Nav className="ml-auto d-flex align-items-center" navbar>
        <NavItem>
          <Link to="/login" className="nav-link">Login</Link>
        </NavItem>
        <NavItem>
          <Link to="/register" className="nav-link">Register</Link>
        </NavItem>
      </Nav> 
      </NavbarBrand>
    </Navbar>
    </>
  )
}