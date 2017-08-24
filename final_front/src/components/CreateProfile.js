import React, { Component } from 'react';
import { Link } from 'react-router';
import Form from './Form'
import { Button, Dropdown, Navbar, NavItem, Row, Col } from 'react-materialize';
import '../App.css';

class CreateProfile extends Component {

    render() {

        return (
            <div>

                <Navbar fixed className='navbar' right>
                    <NavItem><Link to='/'>Alumnus</Link></NavItem>
                </Navbar>

                <div className='App'>

                    <Row>
                        <Col s={3}></Col>
                        <Col s={6}>
                            <iframe className='margin margin-frame img-border' width="350" height="350" src="https://clyp.it/recording-widget" frameBorder="0" style={{ borderRadius: '4px' }}></iframe>
                            <div className='App form'>
                                <Form {...this.props} />  
                            </div>
                            
                        
                        </Col>
                        <Col s={3}></Col>
                    </Row>
                </div>

            </div>
        );
    }
}

export default CreateProfile;