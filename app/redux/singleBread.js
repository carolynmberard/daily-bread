import axios from 'axios'

const GOT_SINGLE_BREAD = 'GOT_SINGLE_BREAD'

const gotSingleBread = bread => {
  return {type: GOT_SINGLE_BREAD, bread}
}

export const fetchSingleBread = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/breads/${id}`)
      dispatch(gotSingleBread(data))
    } catch (err) {
      console.error(err)
    }
  }
}

const singleBreadReducer = (state = {}, action) => {
  switch (action.type) {
    case GOT_SINGLE_BREAD:
      return action.bread
    default:
      return state
  }
}

export default singleBreadReducer
