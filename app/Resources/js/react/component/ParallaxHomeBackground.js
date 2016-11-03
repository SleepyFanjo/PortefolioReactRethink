import React, {Component, PropTypes} from 'react'
import autobind from 'autobind-decorator'

@autobind
export default class ParallaxHomeBackground extends Component
{
    state = {
        flipped: false
    }

    render() {
        return (
            <div id="parallax-home-background">
                <h1 className="title">
                    <span>Quentin Chevrin</span>
                    <span>Freelancer</span>
                    <span>FullStack Web Developer</span>
                </h1>
                <div className="contact">
                    <div className="icon-wrapper">
                        <a href="http://linkedin.com/in/qu3ntin" title="Linkedin">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="http://viadeo.com/fr/profile/quentin.chevrin" title="Viadeo">
                            <i className="fa fa-viadeo"></i>
                        </a>
                        <a href="https://github.com/SleepyFanjo" title="Github">
                            <i className="fa fa-github"></i>
                        </a>
                        <a href="#" title={this.props.textData.contact.title}>
                            <i className="fa fa-mail"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
