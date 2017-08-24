import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavItem, Preloader, Button, Row, Col } from 'react-materialize'

class Profile extends Component {
    render() {

        let users;

        if (Object.keys(this.props.users).length === 0) {
            users = <Row>
                        <Col s={4}></Col>
                        <Col s={4}>
                            <Preloader size='big' />
                        </Col>
                        <Col s={4}></Col>
                    </Row>
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

               
                    
                        <div className='profile text'>
                            <img src={users.Photo_URL} width='300' height='300' className='img-circle img-border' id= 'margin-alumni' />
                            <div id='intro' className='h1-profile'>
                                <h1>{users.Alumni} </h1>
                                <h4>{users.School}</h4>
                            </div>
                            

                            <div id='icons'>
                                <a href={users.LinkedIn}><img src='https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/linkedin-512.png' width='65' height='65' className='img-circle' /></a>
                                <a id= 'github-link' href={users.Github}><img src='https://image.flaticon.com/icons/png/512/2/2600.png' width='65' height='65' className='img-circle' /></a>
                                <a id= 'github-link' href={users.Twitter}><img src='https://www.pi-expertises.com/wp-content/uploads/2016/10/twitter-bird-white-on-blue.png' width='65' height='65' className='img-circle' /></a>
                            </div>
                                <iframe id='iframe-margin' width="700" height="260" src={`${users.Recording_URL}/widget`} frameborder="0"></iframe>
                        </div>

                        
                        
                        <div id='description'>
                            <div id= 'quotation-left'><img src='https://image.flaticon.com/icons/svg/98/98868.svg' width='70' height='70' /></div>
                            <p id= 'alumni-p'>{users.Description}</p>
                            <div id= 'quotation-right'><img src='https://image.flaticon.com/icons/svg/32/32194.svg' width='70' height='70' /></div>
                        </div>

                        <Row className= 'text'>
                            <Col s={4}>
                                <img id='projectSnapshot' src={users.Project_snapShot_URL}/>
                                <div id= 'projectTitle1'>{users.Project_Title}</div>
                            </Col>

                            <Col s={4}>
                                <img id='projectSnapshot' src={users.Project_snapShot_URL}/>
                                <div id= 'projectTitle1'>{users.Project_Title}</div>
                            </Col>

                            <Col s={4}>
                                <img  className= 'projectSnapshot3' src={users.Project_snapShot_URL}/>
                                <div id= 'projectTitle1'>{users.Project_Title}</div>
                            </Col>
                        </Row>
                        

                        {/* <span className="input-group-btn">
                            <Link to={`editprofile/${users._id}`}><Button>Edit Profile</Button></Link>
                        </span> */}

                        <div  id='delete-button' className="input-group-btn text">
                            <Button className='delete-button' onClick={(event) => this.props.handleDelete(event, users._id)}>Delete Profile</Button>
                        </div>
                    


            </div>



        );
    }
}


export default Profile;