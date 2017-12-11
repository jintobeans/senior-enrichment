import React from 'react';
import {NavLink} from 'react-router-dom'

export default function Navbar () {
  return (
      <div className="nav">
      <h1>
        <NavLink exact to="/" activeStyle={ { textDecoration: 'bold', color: '#FCBFB7'}}>Home</NavLink>{' '}
        <NavLink to="/campuses" activeStyle={ { textDecoration: 'bold', color: '#FCBFB7'}}>Campuses</NavLink>{' '}
        <NavLink to="/students" activeStyle={ { textDecoration: 'bold', color: '#FCBFB7'}}>Students</NavLink>
      </h1>
      </div>
  )
}
