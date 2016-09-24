import React, {Component, PropTypes} from 'react'
import autobind from 'autobind-decorator'

import HeaderBar from './HeaderBar'
import ParallaxHomeBackground from './ParallaxHomeBackground'

@autobind
export default class HomeComponent extends Component
{
    render() {
        return (
            <div>
                <HeaderBar locale={this.props.locale} textData={this.props.textData.headerBar} />
                <ParallaxHomeBackground textData={this.props.textData.homeScreen} />
            </div>
        )
    }
}
