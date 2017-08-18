import React, {Component} from 'react';
import {Link} from 'react-router';
import {Navbar, Button} from 'react-materialize'

class Profile extends Component {
    render() {
        return(
            <div>
              <Navbar>
                 <Link to='/'><Button waves='light'>Alumni Page</Button></Link>
              </Navbar>
            </div>
            

        
        );
    }
}

export default Profile;