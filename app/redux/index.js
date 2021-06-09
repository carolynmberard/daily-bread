import { combineReducers } from 'redux'
import breadsReducer from './allBreads'
import singleBreadReducer from './singleBread'

// bring our reducers together and export from a central place
const appReducer = combineReducers({
  breads: breadsReducer,
  bread: singleBreadReducer
})

export default appReducer
