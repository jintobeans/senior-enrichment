/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'

const initialState = {
  campuses: []
}

//actions
const GET_CAMPUSES = 'GET_CAMPUSES'

//action creators
function getCampuses(campuses) {
  return {
    type: GET_CAMPUSES,
    campuses: campuses
  }
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    default: return state
  }
};

export default rootReducer
