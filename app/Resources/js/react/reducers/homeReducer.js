import createReducer from '../utils/createReducer'
import * as types from '../constants/homeConstants'

export const initialState = {}

export default createReducer(initialState, {
    [types.EMPTY_ACTION]: (state, action) => {
        return state
    }
})
