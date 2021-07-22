import React, { Component } from 'react'
import Typical from 'react-typical'
export default class Heading extends Component {
    constructor(props){
        super(props);
        this.state = {
            completed: true,
        }
    }
    handleCompletion = () => {
            this.setState({
            completed: false,
        })
    }
    componentDidMount(){
        setTimeout(this.handleCompletion, 2300)
    }
    componentWillUnmount(){
        clearTimeout(this.handleCompletion);
    }
    render() {
        let {completed} = this.state;
        return (
            <>
            <div className="row">
                <span className="h3 page-head">
                {completed ? <Typical
                steps={[this.props.data.title]}
                loop={1}
                wrapper={"span"}
                >
                </Typical>: 
                this.props.data.title
                } 
                </span>
            </div>
            <div className="row">
            <div className="h6">
            {this.props.data.body} 
            </div>
        </div>
        </>
        )
    }
}
