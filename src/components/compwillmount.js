import React, {Component} from 'react';

class ComponentWillMount extends Component {
   constructor(props) {
      super(props);
      this.state = { 
        color: 'yellow' 
    };
   }
   componentWillMount() {
    this.setState({ 
        color: 'red' 
    });
   }


   render() {
    const ChangeStyle = {
        textAlign:"center"
    }
      return (
         <div style={ChangeStyle}>
            <h1>ComponentWillMount</h1>
            <h2 style={{ color: this.state.color }}>{this.state.color} changed</h2>
         </div>
      );
   }
}
export default ComponentWillMount;