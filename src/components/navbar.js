import { Col, Row, Container, Form } from 'react-bootstrap';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    const navLinkStyles = ({ isActive }) => {
      return {
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: isActive ? 'underline' : 'none',
        color: isActive ? 'orange' : 'blue'
      }
    }
    return (
      <Container>
        <Row>
          <Col lg={2} md={12} sm={12} xs={12}>
          </Col>
          <Col lg={10} md={12} sm={12} xs={12} className='mt-5'>
            <button>
              <NavLink to='/login' style={navLinkStyles} className='ms-5 me-5'>Login page</NavLink>
            </button>
            <button>
              <NavLink to='/lifecycle' style={navLinkStyles} className='ms-5 me-5'>Lifecycle page</NavLink>
            </button>
            <button>
              <NavLink to='/person' style={navLinkStyles} className='ms-5 me-5'>PropTypes</NavLink>
            </button>
            <button>
              <NavLink to='/click' style={navLinkStyles} className='ms-5 me-5'>ClickCounter</NavLink>
            </button>
            <button>
              <NavLink to='/hover' style={navLinkStyles} className='ms-5 me-5'>HoverCounter</NavLink>
            </button>
          </Col>
        </Row>
      </Container>

    )
  }
}


