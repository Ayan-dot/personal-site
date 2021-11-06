import React, {Component} from 'react'
import {  } from "react-bootstrap";
import './Footer.css'
class Footer extends Component {
    render() {
    return (
        <>
        <div className="footer-wrapper container mw-100 mt-5 pb-5 pt-5">
            <div className="container-lg mx-auto pt-4">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
                        <p className="name-label">Ayan <strong>Hafeez.</strong></p>
                        
                    </div>
                    <div className="col-12 col-md-4 mb-4 d-flex flex-column justify-content-center">
                        <div className="d-flex my-3 my-md-0 justify-content-between">
                        {this.props.data.socials.map((x)=>(<a key = {x.name}href={x.href}><img className="footer-socials" src={x.src} alt={x.name}/></a>))}</div>
                        
                    </div>
                    <hr className="d-xs-block d-md-none"></hr>
                    <div className="col-12 col-md-4 d-md-flex flex-column"><span className="text-muted ms-auto">Copyright 2021 @ Ayan Hafeez</span>
                    <p className="text-muted ms-auto">ayan.hafeez@uwaterloo.ca</p>
                    </div>
                </div>
                </div>
            </div>

        </>
    )}
    
}

export default Footer

