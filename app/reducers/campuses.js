import axios from 'axios';

//action type
const GET_CAMPUSES = 'GET_CAMPUSES';

//action creator
function getCampuses (campuses) {
  return {
    type: GET_CAMPUSES,
    campuses: campuses
  }
}

//thunk returner / dispatcher
export function fetchCampuses (){
  return function thunk (dispatch){
    return axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch(getCampuses(campuses)))
  }
}

export default function campusReducer ( campuses = [], action){

  switch (action.type) {
    case GET_CAMPUSES:
      return [...action.campuses]
    default:
      return campuses
  }
}
