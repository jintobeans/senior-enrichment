import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchPutStudent } from '../reducers/students'
import axios from 'axios'
import {Link} from 'react-router-dom'

class SingleStudent extends Component{
  constructor(props){
    super(props)
    this.state = {
      student: {
        firstName: '',
        lastName: '',
        email: '',
        gpa: 1.1,
        CampusId: 0,
        Campus: {
          name: 'campus',
          id: '1'
        }
      }
    }
    this.updateStudent = this.updateStudent.bind(this)
  }

  componentDidMount (){
    this.setState({
      student: this.props.student
    })
  }

  componentWillReceiveProps (newProps, oldProps) {
    this.setState({
      student: newProps.student
    })
  }

  updateStudent(studentUpdateObj){
    //change the state
    const {student} = this.state;
    this.setState({
      student: Object.assign(student, studentUpdateObj)
    })
    // change database
    this.props.put({
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      gpa: +student.gpa,
      campusId: +student.CampusId,
      id: student.id
    })
  }

  render() {

    const {student} = this.state
    console.log('studentinrender', student)
    return (
      <div>
        <h2>'Edit information for {student.fullName}'</h2>
        <ul>
          <li>
            First Name:
            <input
            className="input"
            name="firstName"
            value={student.firstName}
            onChange={e => this.updateStudent({firstName: e.target.value})} />
          </li>
          <li>
            Last Name:
            <input
            className="input"
            name="lastName"
            value={student.lastName}
            onChange={e => this.updateStudent({lastName: e.target.value})} />
          </li>
          <li>
            Email:
            <input
            className="input"
            name="email"
            value={student.email}
            onChange={e => this.updateStudent({email: e.target.value})} />
          </li>
          <li>
            GPA:
            <input
            className="input"
            name="gpa"
            value={student.gpa}
            type="number"
            min="0"
            max="4"
            step="0.1"
            onChange={e => this.updateStudent({gpa: e.target.value})} />
          </li>
          <li>
            CampusID:
            <select
              name="CampusId"
              defaultValue="default"
              onChange={e => this.updateStudent({CampusId: e.target.value})}
              >
              <option value="default">Change Campus</option>
              {this.props.campuses.map((eachCampus) => {
                return (
                  <option key={eachCampus.id} value={`${eachCampus.id}`}>{eachCampus.name}</option>
                )
              })}
            </select>
          </li>
        </ul>
        <h3>
        This student's campus is:{' '}
        <Link to={`/campuses/${student.CampusId}`}>
        {student.Campus.name}
        </Link>
        </h3>
      </div>
    )
  }

}

const mapStateToProps = ({students, campuses}, ownProps) => {
  const student = students.find(theStudent => theStudent.id === +ownProps.match.params.studentid)
  return {
    student,
    campuses
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    put: (student) => {
      dispatch(fetchPutStudent(student))
    }
  }
};

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
export default SingleStudentContainer;
