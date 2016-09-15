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
            <div className="header-bar">
                <div className="wrapper">
                    <div className="header-intro">
                        Portefolio
                    </div>
                    <div className="trigger-button">
                        <div className={"hamburger " + (this.state.expanded ? 'open' : '')} onClick={() => this.setState({expanded: !this.state.expanded})}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className={"scrolling-menu " + (this.state.expanded ? 'displayed' : '')}>
                    <ul>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        )
    }
}
