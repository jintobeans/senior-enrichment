import React, {Component} from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux';
import {fetchCampuses, fetchDeleteCampus} from '../reducers/campuses';

class Campuses extends Component {
  constructor(props) {
    super(props)
    this.deleteHandler = this.deleteHandler.bind(this)
    }

  render(){
    return (
      <div>
        <h3>
        Campuses
        </h3>
        <NavLink to="/addcampus" >
          <button>Add Campus</button>
        </NavLink>
        <div id="campuses">
        {this.props.campuses.map((campus) => {
          return (
            <div key={campus.id}>
              <NavLink to={`/campuses/${campus.id}`}>
                <h4>{campus.name}</h4>
                <img src={campus.imageURL} />
              </NavLink>
              <button value={campus.id} onClick={this.deleteHandler}>
                delete campus
              </button>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
  deleteHandler(event){
    const { fetchDeleteCampus } = this.props;
    const campusid = event.target.value
    event.stopPropagation();
    fetchDeleteCampus(+campusid)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = {fetchDeleteCampus};

const CampusesContainer = connect(mapStateToProps, mapDispatchToProps)(Campuses)

export default CampusesContainer;
