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
            <HomeComponent textData={this.props.textData} />
        )
    }
}

const mapStateToProps = (state) => ({
    textData: state.home.textData,
    locale: state.home.locale
})

export default connect(mapStateToProps, null)(HomeContainer)

