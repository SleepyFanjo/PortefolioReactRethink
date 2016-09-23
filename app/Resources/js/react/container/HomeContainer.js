import React, {Component, PropTypes} from 'react'
import autobind from 'autobind-decorator'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import HomeComponent from '../component/HomeComponent'

@autobind
class HomeContainer extends Component
{
    render() {
        return (
            <HomeComponent hello={this.props.hello} />
        )
    }
}

const mapStateToProps = (state) => ({
    hello: state.home.message
})

export default connect(mapStateToProps, null)(HomeContainer)

