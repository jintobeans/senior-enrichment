import React, { Component } from 'react';
import store from '../store'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Students from './Students'
import SingleStudent from './SingleStudent'
import Home from './Home'
import Navbar from './Navbar'
import Campuses from './Campuses'
import SingleCampus from './SingleCampus'
import AddStudentForm from './AddStudentForm'
import AddCampusForm from './AddCampusForm'
import {fetchCampuses} from '../reducers/campuses';
import {fetchStudents} from '../reducers/students';


//front end routes????
export default class Main extends Component {

  componentDidMount() {
    store.dispatch(fetchCampuses());
    store.dispatch(fetchStudents());
  }

  render ( ){
    return (
      <Router>
        <div id="main">
          <div id="navbar">
            <Navbar/>
          </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campuses" component={Campuses}/>
            <Route path="/campuses/:campusid" component={SingleCampus}/>
            <Route exact path="/students" component={Students} />
            <Route path="/students/:studentid" component={SingleStudent}/>
            <Route path="/addstudent" render={() => <AddStudentForm/>} />
            <Route path="/addcampus" render={() => <AddCampusForm/>} />
            <Route path="*" render={()=>(<h3>That page doesn't exist!</h3>)}/>
          </Switch>
        </div>
        </div>
      </Router>
    )
  }
}

// <main>
// <BrowserRouter>
//   <Switch>
//     <Route path="/" component={Home}/>
//   </Switch>
// </BrowserRouter>
// </main>


// /<Route path="/students/:studentid" component={SingleStudent}/>
