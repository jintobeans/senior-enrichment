import React from 'react';
import {NavLink} from 'react-router-dom'

export default function Navbar () {
  return (
      <div className="nav">
      <h1>
        <NavLink exact to="/" activeStyle={ { textDecoration: 'none', color: 'red'}}>Home</NavLink>
        <NavLink to="/campuses" activeStyle={ { textDecoration: 'none', color: 'red'}}>Campuses</NavLink>
        <NavLink to="/students" activeStyle={ { textDecoration: 'none', color: 'red'}}>Students</NavLink>
      </h1>
      </div>
  )
}
