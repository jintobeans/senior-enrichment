import React, {Component} from 'react';
import axios from 'axios'
import {NavLink, Link, Route} from 'react-router-dom';
import StudentItem from './StudentItem';
import AddStudentForm from './AddStudentForm';
import store from '../store'
import {connect} from 'react-redux'

function Students (props) {

    return (
      <div>
        <h3>
        Students
        </h3>
        <NavLink to="/addstudent" >
          <button>Add Student</button>
        </NavLink>

        {props.students.map((student) => {
          console.log('student:', student)
          return (
            <StudentItem key={student.id} student={student} />
          )
        })}
      </div>
    )


}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

const mapDispatchToProps = null;


const StudentsContainer = connect(mapStateToProps, mapDispatchToProps)(Students)

export default StudentsContainer;
