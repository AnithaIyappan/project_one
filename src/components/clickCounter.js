import React, { Component } from "react";
import withCounter from './withCounter';

class ClickCounter extends Component{

    render(){
        const {count, increment, name} = this.props;
        return(
            <div>
                <button onClick={increment}>{name} clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5);