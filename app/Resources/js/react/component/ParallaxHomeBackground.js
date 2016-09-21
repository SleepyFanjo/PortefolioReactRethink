import React, {Component, PropTypes} from 'react'
import autobind from 'autobind-decorator'

@autobind
export default class ParallaxHomeBackground extends Component
{
    render() {
        return (
            <div id="parallax-home-background">
                <section className="container">
                    <h2 className="title">
                        <span>Hi, Welcome</span>
                        <span>Have a look at my work</span>
                        <span>Enjoy :)</span>
                    </h2>
                    <h1 className="title">
                        <span>Quentin Chevrin</span>
                        <span>Freelancer</span>
                        <span>FullStack Web Developer</span>
                    </h1>
                </section>
            </div>
        )
    }
}
