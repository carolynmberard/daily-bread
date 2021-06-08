import axios from 'axios'

const GOT_BREADS = 'GOT_BREADS'
const ADD_BREAD = 'ADD_BREAD'

export const gotBreads = breads => {
  return {type: GOT_BREADS, breads}
}
export const addBread = (bread) => {
  return {type: ADD_BREAD, bread}
}

export const fetchBreads = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/breads')
      dispatch(gotBreads(data))
    } catch (err) {
      console.error(err)
    }
  }
}
export const addNewBread = (bread) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/breads', bread)
      dispatch(addBread(data))
    } catch(err) {
      console.error(err)
    }
  }
}

const breadsReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_BREADS:
      return action.breads
    case ADD_BREAD:
      return [...state, action.bread]
    default:
      return state
  }
}

export default breadsReducer
