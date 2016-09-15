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
            <header>
                <div id="header-wrapper">
                    <div id="header-intro">
                        Portefolio
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
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </header>
        )
    }
}
