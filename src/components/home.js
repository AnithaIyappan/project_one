import React, {Component} from "react";
const redux = require("redux");

class Home extends Component {
    render() {
       return (
          <div style={{"textAlign":"center", "color":"blue"}}>
             <h1>Home Page</h1>
             <p>Welcome!!</p>
          </div>
       );
    }
 }

 export default Home;