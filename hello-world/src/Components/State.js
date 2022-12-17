import React, { Component } from "react";

// This is an example of state in react

class State extends Component {
    render(){
        return (
            <h1>welcome Visitor</h1>
        )
    }
}

export default State

// In this example, we want to add a button that when it is clicked will, the text will change to thank you for subscribing. 
// Now we cannnot use props here because, props will are imutable(cannot be changed). 
// So we use state.