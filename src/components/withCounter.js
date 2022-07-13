import { Component } from "react";


// higher order component
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
                <div  style={{"textAlign":"center"}} className="mt-5">
                <OriginalComponent count={count} increment={this.increment} {...this.props}/>
                </div>
            )
        }
    }
    return NewComponent;
}

export default withCounter;