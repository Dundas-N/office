import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
           <div className='wrapper-default'>        
            <div className='container'>
                <h1>404</h1>
                <h1>page not found</h1>
                <h3>The following URL <span>{this.props.location.pathname}</span>{" "} was not found </h3> 
            </div>               
           </div>
        )
    }
}
