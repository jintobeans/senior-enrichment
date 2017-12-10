import React, {Component} from 'react'
import { fetchCreateCampus } from '../reducers/campuses';
import {connect} from 'react-redux';

class AddCampusForm extends Component {
 constructor(){
   super()
   this.submitCampus = this.submitCampus.bind(this)
 }
 submitCampus(event){
    event.preventDefault()
    this.props.addCampus({
      name: event.target.name.value,
      imageURL: event.target.imageURL.value,
      description: event.target.description.value
    })
 }

 render(){
  return (
    <div>
      <h1>
      Add a Campus
      </h1>
      <form onSubmit={this.submitCampus}>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Campus Name" />
          <br />
        <input
          className="input"
          type="text"
          name="imageURL"
          placeholder="imageURL" />
        <br />
        <input
          className="input"
          type="text"
          name="description"
          placeholder="Description" />
        <br />
        <input type="submit" />
      </form>
  </div>
  )
 }
}

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => {
  return {
    addCampus: (campus) => {
      dispatch(fetchCreateCampus(campus))
    }
  }
}

const AddCampusFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddCampusForm)

export default AddCampusFormContainer;
