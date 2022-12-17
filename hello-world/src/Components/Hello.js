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
    return React.createElement("div", null, React.createElement('h1', null, "I'm a Software Engineer"))
}
export default Hello