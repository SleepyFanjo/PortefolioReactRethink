import createReducer from '../utils/createReducer'
import * as types from '../constants/homeConstants'

export const initialState = window.__PRELOADED_STATE__ ? window.__PRELOADED_STATE__.home : {
    message: "client"
}

export default createReducer(initialState, {
    [types.EMPTY_ACTION]: (state, action) => {
        return state
    }
})
