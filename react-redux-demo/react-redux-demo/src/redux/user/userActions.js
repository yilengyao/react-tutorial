import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./userTypes";
import axios from 'axios';

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USER_SUCCESS,
    users: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USER_FAILURE,
    error: error
  }
}

export const fetchUsers = dispatch => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}
