import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import buildStore from './store'

import HomeContainer from './container/HomeContainer'

render(
    <Provider store={buildStore()}>
        <HomeContainer />
    </Provider>,
    document.getElementById('react-container')
)
