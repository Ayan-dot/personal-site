import React, { Component } from 'react'
import Heading from '../components/Heading';
import Splash from '../components/Splash';
export default class About extends Component {
    render() {
        return (
            <>
            <Heading data={this.props.data.heading}/>
            <div className="col-12">
            <Splash data={this.props.data.splash}></Splash>
            </div>
            </>
        )
    }
}
