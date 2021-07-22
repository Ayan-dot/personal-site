import React, { Component } from 'react'
import './Card.css'
export default class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row d-flex m-0 p-0 mt-4 justify-content-center">
                <div className={"d-flex col-xs-12 col-sm-4 mx-0 flex-column justify-content-center order-lg-" + this.props.toggle} style={{textAlign: "center"}}>
                   <span className="h4 mx-auto">{this.props.data.name}</span>
                   <span className="p mx-auto">{this.props.data.description}</span>
                </div>

                <div className="d-flex col-xs-12 col-sm-4 mx-0 flex-column">
                <div className="card-graphic d-flex mx-auto" style={{backgroundImage: `url(${this.props.data.imgurl})`}}>
                    <div className="mt-auto p-3">
                     awdaw
                    </div>
                    </div>
                </div>                
            </div>
        )
    }
}
