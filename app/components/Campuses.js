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

//  componentDidMount() {
//     store.dispatch(fetchCampuses());
//   }

  render(){
    return (
      <div>
        <h3>
        Campuses
        </h3>
        <NavLink to="/addcampus" >
          <button>Add Campus</button>
        </NavLink>
        <table>
          <tbody>
            <tr>
              <th>Campus Id</th>
              <th>Campus Name</th>
            </tr>
        {this.props.campuses.map((campus) => {
          return (
            <tr key={campus.id}>
              <th>
                {campus.id}
              </th>
              <th>
                <NavLink to={`/campuses/${campus.id}`}>
                <h4>{campus.name}</h4>
                </NavLink>
              </th>
              <th>
              <button value={campus.id} onClick={this.deleteHandler}>
              delete campus
              </button>
            </th>
            </tr>
          )
        })}
          </tbody>
        </table>
      </div>
    )
  }
  deleteHandler(event){
    const { fetchDeleteCampus } = this.props;
    const campusid = event.target.value
    console.log(campusid)
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
