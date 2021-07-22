import React, {Component} from 'react'
import {  } from "react-bootstrap";
import './Footer.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imscl : "20px",
        };
    }
    render() {
    return (
        <>
        <div className="footer-wrapper container-lg mw-100 mt-5 ms-0 py-5 m-0">
            <div className="footer-container container row mw-50 mx-auto pb-5 p-0 m-0">
                    <div className="col-12 col-md-4">
                        <p className="name-label m-0 p-0">Ayan <strong>Hafeez.</strong></p>
                        <p className="text-muted mt-2 mb-4 p-0">ayan.hafeez@uwaterloo.ca</p>
                        <div className="row"><div className="col">{this.props.data.socials.map((x)=>(<a key = {x.name} className="me-4 px-1"href={x.href}><img className="footer-socials" src={x.src} alt={x.name}/></a>))}</div></div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row">
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )}
    
}

export default Footer

