import React, {Component, PropTypes} from 'react'
import autobind from 'autobind-decorator'

import HeaderBar from './HeaderBar'

@autobind
export default class HomeComponent extends Component
{
    render() {
        return (
            <div>
                <HeaderBar />
            </div>
        )
    }
}
