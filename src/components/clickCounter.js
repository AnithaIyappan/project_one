import React, { Component } from "react";
import withCounter from './withCounter';

class ClickCounter extends Component{

    render(){
        
        const marks = [90, 80, 99];
        marks.map(mark => {
            console.log(mark * 2)
        })
        const myFunc = age => age * 3;
        const hof = (newFunc, age) => newFunc(age + 5);
        const abc = hof(myFunc, 10)
        console.log(abc)

        const {count, increment, name} = this.props;
        return(
            <div>
                <button onClick={increment}>{name} clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5);