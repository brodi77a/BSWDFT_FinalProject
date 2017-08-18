import React, { Component } from 'react';
import {Link} from 'react-router';
import Form from './Form'
import {Button, Icon, Dropdown, Navbar, NavItem} from 'react-materialize'
import '../App.css';

class CreateProfile extends Component {
   
    render() {
        
        return(
        <div>

              <Navbar>
                 <Link to='/'><Button waves='light'>Alumni Page</Button></Link>
              </Navbar> 
             
            <div className='App'>
            <iframe className='margin' width="350" height="350" src="https://clyp.it/recording-widget" frameBorder="0" style={{borderRadius: '4px'}}></iframe>
            <div className='App'>
            <Dropdown trigger={
                <Button>Course</Button>
                }>
                <NavItem>WDFT</NavItem>
                <NavItem>UXFT</NavItem>
            </Dropdown>
            </div>
            
             <Form {...this.props} />
            </div>
          
        </div>
        );
    }
}

export default CreateProfile;