import React, {Component, PropTypes} from 'react'
import autobind from 'autobind-decorator'

@autobind
export default class AboutMe extends Component
{
    render() {
        return (
            <div className="about-me">
                <div className="separator"></div>
                <div className="content">
                    {
                        this.props.textData.content.map((v, k) => (
                            <p key={"content"+k}>
                                {v}
                            </p>
                        ))
                    }
                </div>
                <div className="picture">
                    <img src="/images/profile.jpg" />
                </div>
            </div>
        )
    }
}
