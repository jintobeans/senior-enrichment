import React, {Component} from 'react';
import axios from 'axios'
import {NavLink, Link, Route} from 'react-router-dom';
import StudentItem from './StudentItem';
import AddStudentForm from './AddStudentForm';
import store from '../store'
import {connect} from 'react-redux'

class Students extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h3>
        Students
        </h3>
        <NavLink to="/addstudent" >
          <button>Add Student</button>
        </NavLink>
        <table>
          <tbody>
            <tr>
              <th>Student Id</th>
              <th>Full Name</th>
              <th>Campus</th>
            </tr>
        {this.props.students.map((student) => {
          return (
            <StudentItem key={student.id} student={student} />
          )
        })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

const mapDispatchToProps = null;

const StudentsContainer = connect(mapStateToProps, mapDispatchToProps)(Students)

export default StudentsContainer;
