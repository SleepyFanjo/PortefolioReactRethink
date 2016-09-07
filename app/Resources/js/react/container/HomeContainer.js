import React, {Component, PropTypes} from 'react'
import autobind from 'autobind-decorator'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class HomeContainer extends Component
{
    render() {
        return (
            <div className="home-component">
                This is my home component
            </div>
        )
    }
}

export default connect(null, null)(HomeContainer)
