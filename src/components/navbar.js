import { Button } from 'bootstrap';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    const navLinkStyles = ({ isActive }) => {
      return {
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: isActive ? 'underline' : 'none',
      }
    }
    return (
      <div>
        <button>
          <NavLink to='/login' style={navLinkStyles} className='ms-5 me-5'>Login page</NavLink>
        </button>
        <button>
          <NavLink to='/lifecycle' style={navLinkStyles} className='ms-5 me-5'>Lifecycle page</NavLink>
        </button>
      </div>

    )
  }
}


