import axios from 'axios'

const GOT_BREADS = 'GOT_BREADS'

export const gotBreads = breads => {
  return {type: GOT_BREADS, breads}
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

const breadsReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_BREADS:
      return action.breads
    default:
      return state
  }
}

export default breadsReducer
