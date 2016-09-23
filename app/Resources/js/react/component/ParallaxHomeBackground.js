import React, {Component, PropTypes} from 'react'
import autobind from 'autobind-decorator'

@autobind
export default class ParallaxHomeBackground extends Component
{
    state = {
        flipped: false,
        message: ""
    }

    render() {
        return (
            <div id="parallax-home-background">
                <h1 className="title">
                    <span>Quentin Chevrin</span>
                    <span>Freelancer</span>
                    <span>FullStack Web Developer</span>
                </h1>
            </div>
        )
    }
}
