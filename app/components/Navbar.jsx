import React, {Component} from 'react';
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './Home'
import Students from './Students'

export default class Navbar extends Component {
  constructor() {
    super()
  }
  render(){
    return (
        <div className="nav">
        This is the navbar
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>

        </div>
    )
  }

}
