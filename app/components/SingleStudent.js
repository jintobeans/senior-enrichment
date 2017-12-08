import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchPutStudent } from '../reducers/students'
import axios from 'axios'

class SingleStudent extends Component{
  constructor(){
    super()
    this.state = {
      student: {
        firstName: '',
        lastName: '',
        email: '',
        gpa: 0,
        campusId: 1
      }
    }
  }

  componentDidMount (){
    axios.get(`/api/students/${this.props.match.params.studentid}`)
    .then(res => res.data)
    .then(student => {
      this.setState({student})
      console.log(this.state)
    })
  }

  // componentWillReceiveProps (newProps, oldProps) {
  //   this.setState({
  //     student: newProps
  //   })
  // }

  render() {
    const {student} = this.state
    return (
      <div>
      <h1>'single student view for {student.fullName}'</h1>
      </div>
    )
  }

}

const mapStateToProps = null;
const mapDispatchToProps = null;

const SingleStudentContainer = connect (mapStateToProps, mapDispatchToProps)(SingleStudent)
export default SingleStudentContainer;
