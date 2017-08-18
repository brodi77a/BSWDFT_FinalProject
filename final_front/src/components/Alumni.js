import React, { Component } from 'react';
import {Link} from 'react-router';
import '../App.css';
import {Navbar, Button, Row, Input} from 'react-materialize'

class Alumni extends Component {
    render() {
        return(
            <div>
               <Navbar brand='SPEACHY' right>
                    <Link to='/createprofile'><Button waves='light'>Create Profile</Button></Link>
               </Navbar> 
                
            </div>
        );
    }
}

export default Alumni;