import React, {Component} from 'react';

class ComponentDidMount extends Component {
   constructor(props) {
      super(props);
      this.state = { 
        color: 'yellow', 
    };
   }



   componentDidMount() {
    setTimeout(() => {
        this.setState({ 
            color: 'red' 
        });
    }, 2000);
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
            <h1>ComponentDidMount</h1>
            <h2 style={{ color: this.state.color }}>{this.state.color} changed</h2>
         </div>
      );
   }
}
export default ComponentDidMount;