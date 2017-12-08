import axios from 'axios';

//action type
const GET_CAMPUSES = 'GET_CAMPUSES';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

//action creator
function getCampuses (campuses) {
  return {
    type: GET_CAMPUSES,
    campuses: campuses
  }
}

function createCampus (campus) {
  return {
    type: CREATE_CAMPUS,
    campus
  }
}

function deleteCampus (campusid) {
  return {
    type: DELETE_CAMPUS,
    campusid
  }
}

function updateCampus (campus) {
  return {
    type: UPDATE_CAMPUS,
    campus
  }
}

//THUNK RETURNERS/DISPATCHERS
//get campuses
export function fetchCampuses (){
  return function thunk (dispatch){
    return axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch(getCampuses(campuses)))
  }
}

//create campus
export function fetchCreateCampus (campus) {
  return function(dispatch) {
    axios.post('/api/campuses', campus)
    .then(res => dispatch(createCampus(res.data)))
    .catch(err => console.error(`Could not create campus ${campus}`, err))
  }
}

//delete campus thunker
export function fetchDeleteCampus (campusid) {
  return function(dispatch){
    console.log('campusid',campusid)
    axios.delete(`/api/campuses/${campusid}`)
    .then(() => {
      dispatch(deleteCampus(campusid))

    })
    .catch(err => console.error(`Could not delete campus ${campusid}`, err))
  }
}

//update one campus
export function fetchPutCampus (campus){
  return (dispatch) => {
    axios.put(`/api/campuses/${campus.id}`, campus)
    .then(result => {
      dispatch(updateCampus(result.data))
    })
    .catch(err => console.error(`Could not edit campus ${campus.id}`, err))
  }
}

export default function campusReducer ( campuses = [], action){

  switch (action.type) {
    case GET_CAMPUSES:
      return [...action.campuses]
    case CREATE_CAMPUS:
      return [...campuses, action.campus]
    case DELETE_CAMPUS:
      return campuses.filter((campus) => campus.id !== action.campusid)
    case UPDATE_CAMPUS:
      return campuses.map((campus) => (campus.id === action.campus.id ? action.campus : campus) )
    default:
      return campuses
  }
}
