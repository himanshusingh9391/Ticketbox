
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import LoginImg from '../assets/login.png'

export default function Login(){
    return(
    <div className="auth-container">
        <Container>
            <Row>
                <Col className="auth-inner-container">
                    <img src={LoginImg} width={550} height={550}  />
                </Col>
                <Col className="auth-inner-container">
                <Card style={{ width: '25rem', padding:25 }}>  
                    <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"  className='input'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className='input' />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" className='login-btn'>
                            Login
                        </Button>
                     </Form>
                     <div style={{display: 'flex', justifyContent:'center', marginTop:25}}>
                        New to the Ticket Box please  <Card.Link style={{marginLeft:5}} href='/signup'>signup</Card.Link>
                     </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
}