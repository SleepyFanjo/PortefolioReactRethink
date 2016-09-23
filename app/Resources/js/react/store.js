import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import * as reducers from './reducers'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    ...reducers,
});

const middleware = [
    thunk,
]

// doc: Wire up store enhancers, middleware and reducers (inc. Redux DevTools)
function buildStore(preloadedState) {
    const enhancer = compose(applyMiddleware(...middleware), window.devToolsExtension ? window.devToolsExtension() : f => f);
    const store = createStore(reducer, preloadedState, enhancer);

    return store
}

export default buildStore
