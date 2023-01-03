import React, { Component } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./styles.css"
export default function Navbar() {
  return (
    
    <nav className="nav">
      <Link to="/" className="site-title">
      DKV SANGAM - Keelkattalai
      </Link>
      <ul>
        <CustomLink to="/Home">Home</CustomLink>
        <CustomLink to="/Gallery">Gallery</CustomLink>
        <CustomLink to="/Committee">Committee</CustomLink>
        <CustomLink to="/Member">Member</CustomLink>
        <CustomLink to="/Aboutus"> Aboutus </CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
