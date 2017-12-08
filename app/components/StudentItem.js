import React, {Component} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import { fetchDeleteStudent } from '../reducers/students';


class StudentItem extends Component {
  constructor(props){
    super(props)
    this.deleteHandler = this.deleteHandler.bind(this)
  }

  render(){
    const student = this.props.student;
    return (
      <div>
        Information about:
        {student.id}
        {student.fullName}
        <div>
        <NavLink to={`/students/${student.id}`}>
          <h4>{student.fullName}</h4>
        </NavLink>
        <NavLink to={`/campuses/${student.CampusId}`}>
          <h4>{student.Campus.name}</h4>
        </NavLink>
        </div>
        <button onClick={this.deleteHandler}>
        x
        </button>
      </div>
    )

  }

  deleteHandler(event){
    const { fetchDeleteStudent, student } = this.props;
    event.stopPropagation();
    fetchDeleteStudent(student.id)
  }
}

const mapStateToProps = null
const mapDispatchToProps = {
    fetchDeleteStudent}

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(StudentItem)

export default SingleStudentContainer;
