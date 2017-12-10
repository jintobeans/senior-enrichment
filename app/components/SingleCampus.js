import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchPutCampus } from '../reducers/campuses';
import { fetchPutStudent } from '../reducers/students';

class SingleCampus extends Component {
  constructor(props){
    super(props)
    this.state = {
      campus: {},
      students: []
    }
    this.updateCampus = this.updateCampus.bind(this)
    this.updateStudentCampus = this.updateStudentCampus.bind(this)
  }

  componentDidMount(){
    axios.get(`/api/campuses/${this.props.match.params.campusid}`)
    .then(res => res.data)
    .then(results => {
      this.setState(results);
      console.log('state', this.state)
    })
  }
  // componentWillReceiveProps(nextProps){

    // let theCampus = nextProps.campuses.find((campus) => {
    //   return +campus.id === +nextProps.match.params.campusid
    // })
    // let campusStudents = nextProps.students.filter((student) => {
    //   return +student.CampusId === +nextProps.match.params.campusid
    // })
    // this.setState({
    //   campus: theCampus,
    //   students: campusStudents
    // })
  // }

  updateCampus(campusUpdateObj){
    //change the state
    const {campus} = this.state;
    this.setState({
      campus: Object.assign(campus, campusUpdateObj)
    })
    // change database
    this.props.putCampus({
      name: campus.name,
      imageURL: campus.imageURL,
      description: campus.description,
      id: campus.id
    })
  }

  updateStudentCampus(e){
    this.props.putStudent({
      campusId: +e.target.value,
      id: +e.target.name
    })
  }

  render(){
    const {campus} = this.state
    return (
      <div>
        <h2>
        Edit information for {campus.name}
        </h2>
        <img src={campus.imageURL} />
        <ul>
          <li>
            Campus Name:
            <input
            className="input"
            name="campusName"
            value={campus.name}
            onChange={e => this.updateCampus({name: e.target.value})}
            />
          </li>
          <li>
            Campus imageURL:
            <input
            className="input"
            name="imageURL"
            value={campus.imageURL}
            onChange={e => this.updateCampus({imageURL: e.target.value})}
            />
          </li>
          <li>
            Campus Description:
            <input
            type="text"
            className="input"
            name="description"
            value={campus.description}
            onChange={e => this.updateCampus({description: e.target.value})}
            />
          </li>
        </ul>
        <h2>Students at {campus.name} campus</h2>
        <table>
          <tbody>
            <tr>
              <th>Student</th>
              <th>Campus</th>
            </tr>
      {this.state.students.map((student) => {
        return (
            <tr key={student.id}>
              <th>
                <Link to={`/students/${student.id}`}>
                  <h4>
                {student.fullName}
                  </h4>
                </Link>
              </th>
              <th>
                <select
                  name={student.id}
                  defaultValue={student.Campus.id}
                  onChange={this.updateStudentCampus}
                  >
                  {this.props.campuses.map((eachCampus) => {
                    return (
                      <option key={eachCampus.id} value={`${eachCampus.id}`}>{eachCampus.name}</option>
                    )
                  })}
                </select>
              </th>
            </tr>
        )
      })}
        </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses,
    students: state.students
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    putCampus: (campus) => {
      dispatch(fetchPutCampus(campus))
    },
    putStudent: (student) => {
      dispatch(fetchPutStudent(student))
    }
  }
};

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

export default SingleCampusContainer;
