import React, { Component } from 'react';
import Card from './card';

class Names extends Component {
    render(){
        return(
            <div>
                <h1>{this.props.lastname}, {this.props.firstname}</h1>
            </div>
        )
    }
}
export default Names;