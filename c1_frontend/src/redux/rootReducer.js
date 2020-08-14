import { combineReducers } from 'redux'

import { loginReducer } from '../components/login/redux/LoginReducer'

export const rootReducer = combineReducers({
  loginReducer
})
