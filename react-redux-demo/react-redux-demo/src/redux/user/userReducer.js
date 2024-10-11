import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./userTypes"; 

const initialUserState = {
  loading: false,
  users: [],
  error: ''
}

const userReducer = (state = initialUserState, action) => {
  switch(action.type) {
    case FETCH_USER_REQUEST: return {
      ...state,
      loading: true
    }
    case FETCH_USER_SUCCESS: return {
      loading: false,
      users: action.users,
      error: ''
    }
    case FETCH_USER_FAILURE: return {
      loading: false,
      users: [],
      error: action.error
    }
    default: return state
  }
}

export default userReducer;
