import React, {Component} from 'react';
import ComponentWillReceiveProps from './compwillreceiveprops';

class ComponentDidMount extends Component {
   constructor(props) {
      super(props);
      this.state = { 
        color: 'yellow', 
    };
    console.log("constructor")
   }


   componentDidMount() {
    setTimeout(() => {
        this.setState({ 
            color: 'red' 
        });
    }, 2000);
    console.log("componentDidMount")
   }


   shouldComponentUpdate(prevProps, prevstate) {
      if(prevstate.color !== this.state.color){
         return true;
      }
      else{
         return false;
      }
     
    }

    getSnapshotBeforeUpdate(prevProps, prevstate) {
      console.log("previous color is", prevstate.color, "from getSnapshotBeforeUpdate");
      return prevstate;
    }
  
    componentDidUpdate() {
      console.log("updated color is", this.state.color, "from compdidupdate");     
    }

    componentWillUnmount() {
      console.log('componentWillUnmount');
   }

   render() {
    const ChangeStyle = {
        textAlign:"center"
    }
      return (
         <div style={ChangeStyle}>
            <h1>Lifecycle of class based react</h1>
            <h2 style={{ color: this.state.color }}>{this.state.color} changed</h2>
            <ComponentWillReceiveProps color={this.state.color} />
         </div>
      );
   }
}

export default ComponentDidMount;

