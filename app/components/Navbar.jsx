import React, {Component} from 'react';
import {NavLink, Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './Home'
import Students from './Students'

export default class Navbar extends Component {
  constructor() {
    super()
  }
  render(){
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

}
