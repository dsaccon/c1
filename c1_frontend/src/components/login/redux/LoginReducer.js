import { AUTHORIZATION_STARTED, AUTHORIZATION_SUCCESS, AUTHORIZATION_ERROR } from './types'

const initialState = {
  isAuthorizing: false,
  authorized: false,
  token: ''
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION_STARTED:
      return { ...state, isAuthorizing: true }
    case AUTHORIZATION_SUCCESS:
      return {
        ...state,
        isAuthorizing: false,
        authorized: true,
        token: action.payload
      }
    case AUTHORIZATION_ERROR:
      return {
        ...state,
        isAuthorizing: false,
        authorized: false
      }
    default:
      return state
  }
}
