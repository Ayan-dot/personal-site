import React, { Component } from 'react'

export default class Splash extends Component{
    render() {
        return(
            <>
            <div className="col-12 d-flex"><img className="img-fluid border mx-auto w-50 h-25" src={this.props.data.src} alt="Oops! Splash$ heroku login goes here."></img></div>
            </>
        
    )}
}