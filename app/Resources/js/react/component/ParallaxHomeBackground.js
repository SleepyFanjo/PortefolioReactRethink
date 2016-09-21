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
                <section id="card">
                    <div className={this.state.flipped ? "card-container flipped" : "card-container"} onClick={() => this.setState({flipped: !this.state.flipped})}>
                        <span className="glyphicon glyphicon-share-alt"></span>
                        <h1 className="title">
                            <span>Quentin Chevrin</span>
                            <span>Freelancer</span>
                            <span>FullStack Web Developer</span>
                        </h1>
                        <h2 className="title">
                            <span>Welcome</span>
                            <span>Have a look at my work</span>
                            <span>Enjoy :)</span>
                        </h2>
                    </div>
                </section>
            </div>
        )
    }
}
