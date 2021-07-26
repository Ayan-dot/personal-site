import React, { Component } from 'react';
import Heading from '../components/Heading';
import Card from '../components/projects/Card';
export default class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            repos: [],
            reponum: 0, 
        }
    }
    componentDidMount(){
        fetch(`https://api.github.com/users/${this.props.data.username}/repos?sort=pushed`, {method: 'GET', headers:{'Accept':'application/vnd.github.mercy-preview+json'}}).then(res => res.json()).then(res => this.setState({repos: res})).catch();
    }
    componentWillUnmount(){

    }
    render() {
        let {repos,reponum} = this.state;
        return (
            <div className="row">
                <Heading data={this.props.data.heading}/>
                {repos.map((x) => {reponum = 1-reponum; return <Card key={x.name} data={x} toggle={reponum} image={this.props.data.card.images[x.id]}/>;})}
                
            </div>
        )
    }
}
