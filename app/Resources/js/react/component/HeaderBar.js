import React, {Component, PropTypes} from 'react'
import autobind from 'autobind-decorator'

@autobind
export default class HeaderBar extends Component
{
    state = {
        expanded: false
    }

    render() {
        return (
            <div id="header">
                <div id="header-wrapper">
                    <div id="header-intro">
                        {this.props.textData.title}
                    </div>
                    <div id="header-trigger-button">
                        <div id="header-hamburger" className={this.state.expanded ? 'open' : ''} onClick={() => this.setState({expanded: !this.state.expanded})}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div id="header-scrolling-menu" className={this.state.expanded ? 'displayed' : ''}>
                    <ul>
                        <li>{this.props.textData.menu[0]}</li>
                        <li>{this.props.textData.menu[1]}</li>
                        <li>{this.props.textData.menu[2]}</li>
                        <li>{this.props.textData.menu[3]}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
