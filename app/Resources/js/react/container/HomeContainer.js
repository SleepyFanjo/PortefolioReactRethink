import React, {Component, PropTypes} from 'react'
import autobind from 'autobind-decorator'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import HomeComponent from '../component/HomeComponent'

class HomeContainer extends Component
{
    render() {
        return (
            <HomeComponent />
        )
    }
}

export default connect(null, null)(HomeContainer)
