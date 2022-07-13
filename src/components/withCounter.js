import { Component } from "react";

const withCounter = (OriginalComponent, incrementNumber) => {
    class NewComponent extends Component{

        constructor(){
            super();
            this.state = {
                count: 0
            }
        }
    
        increment = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + incrementNumber
                }
            })
        }

        render(){
            const {count} = this.state;
            return(
                <OriginalComponent count={count} increment={this.increment} {...this.props}/>
            )
        }
    }
    return NewComponent;
}

export default withCounter;