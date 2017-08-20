import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';
import { Navbar, NavItem, Button, Row, Col , Preloader} from 'react-materialize'

class Alumni extends Component {
    render() {
        //declaring an empty global variable for later use
        let profiles;
        if (Object.keys(this.props.users).length === 0) {
            profiles = <Row>
                            <Col s={4}></Col>
                            <Col s={4}>
                                <Preloader size='big' />
                            </Col>
                            <Col s={4}></Col>
                      </Row>

        } else {
            profiles = this.props.users.map((user, i) => {
                return <Col key={i} s={3}>
                    <Link to={`profile/${user._id}`}>
                        <img src={this.props.users[i].Photo_URL} width='170' height='170' className='img-circle img-border' />
                    </Link>
                    <h4>{this.props.users[i].Alumni}</h4>
                    <h6>{this.props.users[i].School}</h6>
                </Col>
            })

        }
        return (
            <div>
                <Navbar className='navbar' brand='SPEACHY' right>
                    <NavItem><Link to='/createprofile'>Create Profile</Link></NavItem>
                </Navbar>
                <div>
                    <Row className='text margin-alumni'>
                        {profiles}
                    </Row>
                </div>
            </div>
        );
    }
}

export default Alumni;