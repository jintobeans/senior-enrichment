import React, {Component} from 'react'
import {fetchCreateStudent} from '../reducers/students'
import {connect} from 'react-redux'

class AddStudentForm extends Component {
 constructor(){
   super()
   this.submitStudent = this.submitStudent.bind(this)
 }

 submitStudent (event) {
   event.preventDefault()
   this.props.addStudent({
    firstName: event.target.firstName.value,
    lastName: event.target.lastName.value,
    email: event.target.email.value,
    gpa: +event.target.gpa.value,
    campusId: +event.target.campus.value
  })
 }

 render(){
  return (
    <div>
      <h1>
      Add a Student
      </h1>
      <form onSubmit={this.submitStudent}>
        <input
          className="input"
          type="text"
          name="firstName"
          placeholder="First Name" />
          <br />
        <input
          className="input"
          type="text"
          name="lastName"
          placeholder="Last Name" />
        <br />
        <input
          className="input"
          type="text"
          name="email"
          placeholder="Email Address" />
        <br />
        <input
          className="input"
          name="gpa"
          type="number"
          min="0"
          max="4"
          step="0.1"
          placeholder="GPA" />
        <br />
        <select
          name="campus"
          defaultValue="">
        {this.props.campuses.map((eachCampus) => {
          return (
            <option key={eachCampus.id} value={`${eachCampus.id}`}>{eachCampus.name}</option>
          )
        })}
        </select><br />
        <input type="submit" />
      </form>
    </div>
  )
 }
}

const mapStateToProps = ({campuses}) => {
  return {
    campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (student) => {
      dispatch(fetchCreateStudent(student))
    }
  }
}

const AddStudentFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudentForm)

export default AddStudentFormContainer;
