import React from "react";

const Hello = () => {
    // return(
    //     // an example of JXS
    //     <div>
    //         <h1>I'm a Software Engineer</h1>
    //     </div>
    // )

    // XML Examples

    // return React.createElement("div", null, "I'm a software Engineer") this is for the child elements
    return React.createElement(
    "div",
    {id: "Franklyn", className: "it's nothing"},
    React.createElement('h1', null, "I'm a Software Engineer"))
}
export default Hello

// JSX is used in this practice because it's syntax is very simple to use.