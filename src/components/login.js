import React, { Component } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import './login.css';
import { history } from "../App";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email:"",
            password:"",
            emailError:"",
            passwordError:""
        }
    }

    changeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
        if(event.target.value){
            this.setState({
                emailError:""
            })
        }
    }
    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        if(event.target.value){
            this.setState({
                passwordError:""
            })
        }


    }


    validate = () => {
        const em_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const low = /(?=.*?[a-z])/i;
        const upp = /(?=.*?[A-Z])/i;
        const dig = /(?=.*?[0-9])/i;
        const spl = /(?=.*?[#?!@$%^&*-])/i;


        if(em_regex.test(this.state.email) === false && !this.state.password){
            this.setState({
                emailError:"enter valid email",
                passwordError:"enter valid password"
            })
        }
        else if(em_regex.test(this.state.email) === false && dig.test(this.state.password) === false){
            this.setState({
                emailError:"enter valid email",
                passwordError:"atleast one digit"
            })
        }
        else if(em_regex.test(this.state.email) === false && spl.test(this.state.password) === false){
            this.setState({
                emailError:"enter valid email",
                passwordError:"atleast one special char"
            })
        }
        else if(em_regex.test(this.state.email) === false && low.test(this.state.password) === false){
            this.setState({
                emailError:"enter valid email",
                passwordError:"atleast one lowercase"
            })
        }
        else if(em_regex.test(this.state.email) === false && this.state.password.length !== 5){
            this.setState({
                emailError:"enter valid email",
                passwordError:"password must be 5 charactors"
            })
        }
        else if(em_regex.test(this.state.email) === false && this.state.password){
            this.setState({
                emailError:"enter valid email",
                passwordError:""
            })
        }
        else if(em_regex.test(this.state.email) === true && !this.state.password){
            this.setState({
                emailError:"",
                passwordError:"enter valid password"
            })
        }
        else if(em_regex.test(this.state.email) === true && dig.test(this.state.password) === false){
            this.setState({
                emailError:"",
                passwordError:"atleast one digit"
            })
        }
        else if(em_regex.test(this.state.email) === true && spl.test(this.state.password) === false){
            this.setState({
                emailError:"",
                passwordError:"atleast one special char"
            })
        }
        else if(em_regex.test(this.state.email) === true && low.test(this.state.password) === false){
            this.setState({
                emailError:"",
                passwordError:"atleast one lowercase"
            })
        }    
        
        else if(em_regex.test(this.state.email) === true && this.state.password.length !== 5){
            this.setState({
                emailError:"",
                passwordError:"password must be 5 charactors"
            })
        }
        else{
            this.setState({
                emailError:"",
                passwordError:"",
                email:"",
                password:""
            })
            alert('login successfull');  
            history.push('/home');
            document.location.reload() 
        }
    }

    render() {
        return (
            <div>
            <Container>
                <Row>
                    <Col lg={4} md={12} sm={12} xs={12}>
                    </Col>
                    <Col lg={5} md={12} sm={12} xs={12} className='bg-warning mt-5 rounded'>
                        <Form className="mt-5">
                            <h3 className="header mt-5" style={{"textAlign":"center", "color":"red"}}>Login Page</h3>
                            <Form.Group className="mb-3">
                                <Form.Label className="label">Email address</Form.Label>
                                <Form.Control size="lg" type="email" placeholder="Enter email" value={this.state.email} onChange={this.changeEmail} />
                            </Form.Group>
                            {this.state.emailError !== " " ? (
                                <h1 style={{ fontSize: "15px", color: "red" }}>
                                    {this.state.emailError}
                                </h1>
                            ) : null}
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control size="lg" type="password" placeholder="Enter Password" value={this.state.password} onChange={this.changePassword}  />
                            </Form.Group>
                            {this.state.passwordError !== " " ? (
                                <h1 style={{ fontSize: "15px", color: "red" }}>
                                    {this.state.passwordError}
                                </h1>
                            ) : null}
                            <Button variant="danger" className="btn mb-5" onClick={this.validate}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={3} md={12} sm={12} xs={12}>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default Login;