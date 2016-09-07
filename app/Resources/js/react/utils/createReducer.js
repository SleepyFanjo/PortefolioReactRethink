/**
 * createReducer for redux-based reducers. Usage as follows:
 *
 *  export default createReducer(initialState, {
 *    [INCREMENT_COUNTER]: increment,
 *    [DECREMENT_COUNTER]: decrement,
 *  })
 */
export default function createReducer(initialState: Object, handlers: { [key: string]: Function}) {
    return (state = initialState, action = {}) => {
        if ('type' in action) {
            return handlers[action.type] ?
                handlers[action.type](state, action) :
                state;
        }

        return state;
    }
}
