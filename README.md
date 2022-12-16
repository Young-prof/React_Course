## My React Tutorial

This Repository contains all the Examples and codes i learnt while learning React js.

The codes and examples in this Repo are from Random Tutorials coupled with my Little Knowledge on React so Far.

## Technologies Used

- Text Editors: Visual Studio Code, Vi, Vim and Emacs
- VCS: Git
- Bash
- Node js

## The Concept of React

- Open Source Library for building user interfaces
- Not to be confused as a Framework
- React Focuses on the User Interface
- Rich Ecosystem
- Created and Maintained by Facebook
- Huge Community
- Most In-demanding front end Library

## Two Approaches or Methods to create React App
- npx ---- npx is an npm packager runner that automatically install when we install node.js
npx create-creact-app <project_name>
- npm ---- npm installs react app globally and then use the package to generate the project.
npm install create-react-app -g, ones this is done, run
creat-react-app<project_name>

# Create React App
Create react app is a command line interface tool that allows you to create a react app without configuration

## Major Topics and Keywords Covered

| Topic/Keyword | functionality |
| --- | --- |
| JavaScript |
| this | “This” keyword refers to an object that is executing the current piece of code |
| filter | The filter() method creates a new array filled with elements that pass a test provided by a function |
| map | map() creates a new array from calling a function for every array element |
| ES6 Concepts utilized in this Repo |
| let | let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used |
| const | The const declaration creates block-scoped constants, much like variables declared using the let keyword |
| arrow functions | An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage |
| template literals | Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates |
| default parameters | Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed |
| object literals | An object literal in JavaScript allows us to create plain JavaScript objects. It consists of a list of key-value pairs, each separated by a comma and wrapped inside curly braces |
| rest | The rest operator is used to put the rest of some specific user-supplied values into a JavaScript array |
| spread | The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected |
| destructuring assignment | The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables |

## Road Map

- React Fundermentals
- HTTP
- Routing
- React Redux
- Other Utilities
### Topics Covered
- Folder Structure
- Components

# Foler Structures
- Package.json: The package.json file contains the dependencies and the scripts required for the project. It contains stuffs like the name of the app, version, Script and etc.
- Package.lock.json: This files simply ensures consistent installation of Dependencies.
- Readme file: README file is a guide that gives users a detailed description of the project.
- Node_modules: This folder contains all the Dependencies are installed. It is generated when you run the create react app command or when you run the npm install.
- Public: The Public folder contains three files. favicon.ico, index.html and manifest.json. 
The manifest.json is concerned with progressive web apps. 
The favicon.ico is just a react logo.
The Index.html is the only html file you'll have in your entire react project. Much changes will not be made in the index.html file because react does almost everything for you.
- src: The src folder is what you'll be working with the most when using react. it contains 
| App.css | App.css contains some sort of styling for the app  |
| App.js | App.js is more like the most important file within the entire project in the sense that it is what is displayed in the the brower. |
| App.test.js | This file contains a simple test case |
| index.css | The index.css file applies styles to the body tag and the logo in the body tag |
| index.js | The index.js specifies the root components which specifies the app components and the dom element which will be conttrolled by react |
| logo.svg | |
| serviceWorker.js | This is concerned with some progressive web apps|

# Components
- Components describe a part of the user interface
- Components are re-usable and can be nested inside other components
* Types of Components
- Stateless Functional Components
- Stateful Class Components
