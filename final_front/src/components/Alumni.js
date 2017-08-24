import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';
import { Navbar, NavItem, Button, Row, Col , Preloader} from 'react-materialize'

class Alumni extends Component {
    // constructor () {
    //     super();
        
    //     this.searchFunc = this.searchFunc.bind(this);

    //     }

     searchFunc() {
            console.log('Hello');
            console.log(this.props.users.indexOf(document.getElementById('search-input').val));
     }
            
                    
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
                return <Col key={i} s={3} className='text' id='margin-alumni'>
                    <Link to={`profile/${user._id}`}>
                        <img 
                        src={this.props.users[i].Photo_URL} width='200' height='200' className='img-circle img-border' />
                    </Link>
                    <h4>{this.props.users[i].Alumni}</h4>
                    <h6>{this.props.users[i].School}</h6>
                </Col>
            })

        }
        return (
            <div>
                <div>
                    <div id='alumIntroDiv' className= 'typewriter'>
                        <h1 className='h1-introText'>Speach.ly</h1>
                        <span className="input-group-btn">
                        <Link to='createprofile'><Button id= 'button-introDiv' waves='light'>Create Your Profile</Button></Link>
                        {/* <form id= 'search'> 
                            <input id= 'search-input'></input><Button id= 'search-button' waves='light' onClick= {(event) => {event.preventDefault(); this.searchFunc();}} >Search</Button>
                        </form> */}
                    </span>
                    </div>
                </div>
                <div>
                    <Row id= 'alumni-names'>
                        {profiles}
                    </Row>
                </div>
            </div>
        );
    }
}

export default Alumni;