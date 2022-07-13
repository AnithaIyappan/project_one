import { Component } from "react";

class Composition extends Component{
    render(){
        return(
            <div style={{"textAlign": "center"}}>
                <Sidebar data={"sidebar data props"}>
                    <h1>Sidebar Data from sidebar</h1>
                    <Content />
                </Sidebar>
            </div>
        )
    }
}

class Sidebar extends Component{
    render(){
        return(
            <div>
                {this.props.data}
                {this.props.children}
            </div>
        )
    }
}

class Content extends Component{
    render(){
        return(
            <div>
                <h1>Sidebar data 1 Content</h1>
                <h1>Sidebar data 2 Content</h1>
                <h1>Sidebar data 3 Content</h1>
            </div>
        )
    }
}


export default Composition;