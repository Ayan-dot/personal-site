import React, { Component } from 'react';

import Card from '../components/projects/Card';
import Heading from '../components/Heading';

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
        console.log(repos);
        return (
            <div className="row">
                <Heading data={this.props.data.heading}/>
                {repos.map((x) => { if(x.id !== this.props.data.exclude) {reponum = 1-reponum; return <Card key={x.name} data={x} toggle={reponum} image={this.props.data.card.images[x.id]}/>;} return null;})}
                
            </div>
        )
    }
}
