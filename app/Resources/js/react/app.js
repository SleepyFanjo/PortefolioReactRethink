import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import buildStore from './store'

import { Router, Route, browserHistory } from 'react-router'

import HomeContainer from './container/HomeContainer'

render(
    <Provider store={buildStore()}>
        <Router history={browserHistory}>
            <Route path="/" component={HomeContainer} />
        </Router>
    </Provider>,
    document.getElementById('react-container')
)
