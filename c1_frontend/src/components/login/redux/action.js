import {
  AUTHORIZATION_STARTED,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR
} from './types'

const url = process.env.REACT_APP_BACKEND_URL

export const authorize = (email, password) => {
  const data = { email: email, password: password }
  return dispatch => {
    dispatch(authorizationStarted())

    fetch(`${url}/api/login`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        dispatch(authorizationSuccess(data))
      })
      .catch(err => {
        dispatch(authorisationError(err.message))
      })
  }
}

const authorizationStarted = () => ({
  type: AUTHORIZATION_STARTED
})

const authorizationSuccess = data => ({
  type: AUTHORIZATION_SUCCESS,
  payload: {
    ...data
  }
})

const authorisationError = error => ({
  type: AUTHORIZATION_ERROR,
  payload: {
    error
  }
})
