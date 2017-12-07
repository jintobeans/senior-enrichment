import React, { Component } from 'react';
// import store from '../store'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Students from './Students'
import SingleStudent from './SingleStudent'
import Home from './Home'
import Navbar from './Navbar'


//front end routes????
export default class Main extends Component {
  constructor() {
    super()
  }

  render ( ){
    return (
      <Router>
        <div>
          <div>
            <Navbar/>
          </div>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/students" component={Students} />
            <Route path="/students/:studentid" component={SingleStudent}/>
          </Switch>
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
