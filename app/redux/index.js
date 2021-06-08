import { combineReducers } from 'redux'
import breadsReducer from './allBreads'
import singleBreadReducer from './singleBread'

const appReducer = combineReducers({
  breads: breadsReducer,
  bread: singleBreadReducer
})

export default appReducer
