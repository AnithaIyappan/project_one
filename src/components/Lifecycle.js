
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      name: "anitha"
    }
  }

  clickMe = () => {
    this.setState({
      name: "anitha iyappan"
    })
  }


  render() {
    const headStyle = {
      color: "red",
      textAlign: "center"
    }
    const divStyle = {
      color: "blue",
      textAlign: "center",
      alignItems: "center",
    }
    const navStyle = {
      textDecoration:"none",
    }

    return (
      <div>
        <h1 style={headStyle}>Lifecycle of class based react</h1>
        <div style={divStyle}>
          <h2>Hi {this.state.name}</h2>
          <button onClick={this.clickMe}>click me</button>
          <div style={divStyle}>
          <button className='mt-2'>
            <NavLink to='/compwillmount' className='ms-5 me-5' style={navStyle}>ComponentWillMount</NavLink>
          </button>
          </div>
          <div style={divStyle}>
          <button className='mt-2'>
            <NavLink to='/compdidmount' className='ms-5 me-5' style={navStyle}>ComponentDidMount</NavLink>
          </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Lifecycle;