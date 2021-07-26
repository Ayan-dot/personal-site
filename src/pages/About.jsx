import React, { Component } from 'react'
import Heading from '../components/Heading';
export default class About extends Component {
    render() {
        return (
            <>
            <Heading data={this.props.data.heading}/>
            </>
        )
    }
}
