import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class SingleCampus extends Component {
  constructor(){
    super()
    this.state = {
      campus: {},
      students: []
    }
  }
  componentDidMount(){
    console.log(this.props)
    axios.get(`/api/campuses/${this.props.match.params.campusid}`)
    .then(students => students.data)
    .then(results => this.setState({students: results}))
  }
  render(){
    return(
      <div>
      <h2>
      This campus
      </h2>
      {this.state.students.map((student) => {
        return (
          <Link key={student.id} to={`/students/${student.id}`}>
            <h4>
          {student.fullName}
            </h4>
          </Link>
        )
      })}
      </div>
    )
  }
}
