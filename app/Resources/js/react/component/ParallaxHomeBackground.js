import React, {Component, PropTypes} from 'react'
import autobind from 'autobind-decorator'

@autobind
export default class ParallaxHomeBackground extends Component
{
    render() {
        return (
            <div id="parallax-home-background">
                <section className="container">
                    <h1 className="title">
                        <span>Coucou toi :)</span>
                        <span>Du saumon en papillote</span>
                        <span>Avec du riz, ca te va ?</span>
                    </h1>
                    <h2 className="title">
                        <span>Quentin Chevrin</span>
                        <span>FullStack Web Developer</span>
                        <span>Freelancer</span>
                    </h2>
                </section>
            </div>
        )
    }
}
