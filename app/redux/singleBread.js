import axios from 'axios'

const GOT_SINGLE_BREAD = 'GOT_SINGLE_BREAD'
const UPDATED_BREAD = 'UPDATE_BREAD'

const gotSingleBread = bread => {
  return {type: GOT_SINGLE_BREAD, bread}
}
const updatedBread = bread => {
  return {type: UPDATED_BREAD, bread}
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

export const updateSingleBread = (bread) => {
  const changingBread = bread.props
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/breads/${changingBread.id}`, bread)
      dispatch(updatedBread(data))
    } catch (err) {
      console.error(err)
    }
  }
}

const singleBreadReducer = (state = {}, action) => {
  switch (action.type) {
    case GOT_SINGLE_BREAD:
      return action.bread
    case UPDATED_BREAD:
      return action.bread
    default:
      return state
  }
}

export default singleBreadReducer
