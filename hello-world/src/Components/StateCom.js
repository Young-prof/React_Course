import React, { Component } from "react";

// This is an example of state in react

class StateCom extends Component {

    constructor(){
        super()
        this.state = {
            StateCom: 'Welcom Visitor'
        }
    }
    changeMessage(){
        this.setState({
            StateCom: 'Thank you for subscribing'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.StateCom}</h1>
                <button onClick={() => this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}

export default StateCom