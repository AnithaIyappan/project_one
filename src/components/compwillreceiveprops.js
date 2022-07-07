import React, {Component} from "react";

class ComponentWillReceiveProps extends Component {
    componentWillReceiveProps(nextProps) {
       console.log('Component received new props', nextProps);
       console.log('Componentwillreceiveprops')
    }


    render() {
       return (
          <div>
             <h1 style={{ color: this.props.color }}>changed to {this.props.color}</h1>
          </div>
       );
    }
 }

 export default ComponentWillReceiveProps;