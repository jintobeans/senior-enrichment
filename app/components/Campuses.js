import React, {Component} from 'react';
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
      <div className="campuses">
        <h2>
        Campuses
        </h2>
        <NavLink to="/addcampus" >
          <button>Add Campus</button>
        </NavLink>
        <div id="campusesbox">
        {this.props.campuses.map((campus) => {
          return (
            <div key={campus.id} className="campus">
              <NavLink to={`/campuses/${campus.id}`}>
                <h4>{campus.name}</h4>
                <img className="campusimage" src={campus.imageURL} />
              </NavLink>
              <br />
              <button value={campus.id} onClick={this.deleteHandler}>
                delete this campus and its students
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

const mapDispatchToProps = {fetchDeleteCampus, fetchCampuses};

const CampusesContainer = connect(mapStateToProps, mapDispatchToProps)(Campuses)

export default CampusesContainer;
