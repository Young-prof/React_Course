// Class Component
import React, {Component} from "react";

// class Classcom extends Component {
//     render(){
//         return <h1>Class Component</h1>
//     }
// }
class Classcom extends Component {
    render(){
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default Classcom