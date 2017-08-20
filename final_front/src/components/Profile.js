import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavItem, Button, Row, Col } from 'react-materialize'

class Profile extends Component {
    render() {

        let users;

        if (Object.keys(this.props.users).length === 0) {
            users = (
                <div>
                    <h1>The page is still loading please be patient</h1>
                </div>
            )
        } else {
            users = this.props.users.find((user) => {
                return (user._id == this.props.params.id);

            })
        }



        return (
            <div>
                <Navbar className= 'navbar' fixed>
                    <NavItem><Link to='/'>Alumni Page</Link></NavItem>
                </Navbar>

                <Row className='main'>
                    <Col s={2}></Col>

                    <Col s={8}>
                        <div className='profile text'>
                            <img src={users.Photo_URL} width='300' height='300' className='img-circle margin-alumni' />
                            <h1>{users.Alumni} </h1>
                            <h4>{users.School}</h4>
                            <div className='icons'>
                                <a href={users.LinkedIn}><img src='https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/linkedin-512.png' width='50' height='50' className='img-circle' /></a>
                                <a href={users.Github}><img src='https://image.flaticon.com/icons/png/512/2/2600.png' width='50' height='50' className='img-circle' /></a>
                            </div>
                            <iframe width="25%" height="160" src={`${users.Recording_URL}/widget`} frameborder="0"></iframe>
                        </div>

                        <div className='description'>
                            <div><img src='https://image.flaticon.com/icons/svg/98/98868.svg' width='70' height='70' /></div>
                            <p>{users.Description}</p>
                            <div><img src='https://image.flaticon.com/icons/svg/32/32194.svg' width='70' height='70' /></div>
                        </div>

                        <div className='projectSnapshot'>
                            <img src={users.Project_snapShot_URL} width='300' height='200' />
                        </div>

                        <div>{users.Project_Title}</div>
                    </Col>
                    <Col s={2}></Col>
                </Row>





            </div>



        );
    }
}


export default Profile;