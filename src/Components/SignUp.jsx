
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import LoginImg from '../assets/login.png'
import { useNavigate } from 'react-router';

export default function SignUp(){
    const[email,setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = ()=>{
        localStorage.setItem('userEmail', email);
        navigate('/home')
        //navigate to home component
    }
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
                            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email} className='input'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className='input' />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" className='input' />
                        </Form.Group>

                        <Button variant="primary" type="submit" className='login-btn' onClick={handleSubmit}>
                            SignUp
                        </Button>
                     </Form>
                     <div style={{display: 'flex', justifyContent:'center', marginTop:25}}>
                        Already have an account? Please <Card.Link style={{marginLeft:5}} href='/login'>login</Card.Link>
                     </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
} 