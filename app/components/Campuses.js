import React, {Component} from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';


function Campuses (props) {
  // constructor() {
  //   super()
  //   this.state = {
  //     campuses: []
  //   }
  // }

  // componentDidMount(){
  //   axios.get('/api/campuses')
  //   .then(campuses => campuses.data)
  //   .then(results => this.setState({campuses: results}))
  // // }


    return (
      <div>
        <h3>
        Campuses
        </h3>
        <NavLink to="/addcampus" >
        <button>Add Campus</button>
      </NavLink>
        {props.campuses.map((campus) => {
          return (
            <div key={campus.id}>
            <NavLink to={`/campuses/${campus.id}`}>
            <h4>{campus.name}</h4>
            </NavLink>
            </div>
          )
        })}
      </div>
    )


}

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = null;

const CampusesContainer = connect(mapStateToProps, mapDispatchToProps)(Campuses)

export default CampusesContainer;
