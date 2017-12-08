import React, {Component} from 'react'
import axios from 'axios'
import {Link, Route} from 'react-router-dom';

export default class AddStudentForm extends Component {
 constructor(){
   super()
 }

 render(){
   console.log('hi')
  return(
    <h1>
    hey this is the add student form
    </h1>
  )
 }
}
