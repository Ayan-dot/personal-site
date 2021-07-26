import React, { Component } from 'react'
import './Card.css'
import { formatDistance } from 'date-fns'
export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: formatDistance(Date.now() , Date.parse(this.props.data.pushed_at)),
        }
    }
    componentDidMount() {
        this.timernm = setInterval(()=>this.commitTime(), 60000);
    }
    componentWillUnmount() {
        clearInterval(this.timernm);
    }
    commitTime = () => {
        this.setState({
            timer: formatDistance(Date.now() , Date.parse(this.props.data.pushed_at)),
        });
        
    }
    render() {
        let {timer} = this.state;
        return (
            <div className="row d-flex mx-0 px-0 mt-4 justify-content-center">
                <div className={"d-flex col-sm-12 col-md-6 col-xl-4 mx-0 flex-column justify-content-center order-md-" + this.props.toggle} style={{textAlign: "center"}}>
                   <span className="h4 mx-auto">{this.props.data.name}</span>
                   <span className="p mx-auto">{this.props.data.description}</span>
                </div>

                <div className="d-flex col-sm-12 col-md-6 col-xl-4 mx-0 my-3 flex-column">
                <div className="card-graphic d-flex mx-auto" style={{backgroundImage: `url(${this.props.image})`}}>
                    <div className="card-graphic-badge mt-auto px-4">
                     <div className="d-flex flex-row pt-2 justify-content-center">
                         {this.props.data.topics.map((x)=>(<div key={x} className="topic-pill mx-1">{x}</div>))}
                     </div>
                     <div className="d-flex flex-row pt-2 justify-content-center">
                         <span style={{fontWeight: 'bolder'}}>Last push: {timer} ago</span>
                     </div>
                     <div className="d-flex flex-row pt-2 justify-content-center">
                         <a href={this.props.data.html_url}>Visit Repo</a>
                     </div>
                    </div>
                    </div>
                </div>                
            </div>
        )
    }
}
