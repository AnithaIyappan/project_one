import React, { Component } from "react";
import withCounter from './withCounter';

class HoverCounter extends Component{
    render(){
        const {count, increment} = this.props;
        return(
            <div>
                <button onMouseEnter={increment}>hoverd {count} times</button>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 10);