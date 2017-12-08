import axios from 'axios'

//action type
const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';


//action creator
function getStudents (students){
  return {
    type: GET_STUDENTS,
    students
  }
}

function createStudent (student) {
  return {
    type: CREATE_STUDENT,
    student
  }
}

function deleteStudent (studentid) {
  return {
    type: DELETE_STUDENT,
    studentid
  }
}

function updateStudent (student) {
  return {
    type: UPDATE_STUDENT,
    student
  }
}

//THUNKERS
//get all students
export function fetchStudents () {
  return function (dispatch){
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => dispatch(getStudents(students)))
  }
}

//create one student
export function fetchCreateStudent (student){
  return function (dispatch) {
    axios.post('/api/students', student)
    .then(res => dispatch(createStudent(res.data)))
    .catch(err => console.error(`Could not create student ${student}`, err))
  }
}

//delete one student
export function fetchDeleteStudent (studentid) {
  return function thunk (dispatch){
    axios.delete(`/api/students/${studentid}`)
    .then(() => dispatch(deleteStudent(studentid)))
    .catch(err =>  console.error(`Could not delete student ${studentid}`, err))
  }
}

//edit one student
export function fetchPutStudent (student){
  return (dispatch) => {
    axios.put(`/api/students/${student.id}`)
    .then(result => dispatch(updateStudent(result)))
    .catch(err => console.error(`Could not edit student ${student}`, err))
  }
}


//students reducer
export default function studentsReducer (students = [], action) {
  switch (action.type){
    case GET_STUDENTS:
      return action.students;
    case CREATE_STUDENT:
      return [...students, action.student]
    case DELETE_STUDENT:
      return students.filter((student) => student.id !== action.studentid )
    case UPDATE_STUDENT:
      return students.map((student) => (
        student.id === action.student.id ? action.student : student
      ))
    default:
      return students
  }
}
