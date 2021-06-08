import { combineReducers } from 'redux'
import breadsReducer from './allBreads'

const appReducer = combineReducers({
  breads: breadsReducer
})

export default appReducer
