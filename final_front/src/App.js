import React, { Component } from 'react';
import { Link } from 'react-router';
import Form from './components/Form'
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = { 
      newProfile: {
        Alumni: '',
        Recording_URL: '',
        School:'',
        Photo_URL: '',
        Github: '',
        LinkedIn: '',
        Project_snapShot_URL: '',
        Project_Title:'',
        Description: ''
    },
       users: {}    
  }
   axios.get('http://localhost:8080/users')
  
          .then(result => {
            console.log(result)
            this.setState({
              users: result.data
            })
          })

          .catch(err => {
            console.log('error')
          });


    //Do not forget the bindings for the methods
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  //this is where we do our functions
  handleChange(event) {
    this.state.newProfile[event.target.name]= event.target.value
    this.setState({
      newProfile: this.state.newProfile
    });
    
  }

  handleClick(event) {
    event.preventDefault();
    console.log(this.state.newProfile);
        axios.post('http://localhost:8080/users', {
          newProfile: this.state.newProfile
        })

        .then(result => {
          console.log('data', result.data);
        })

        .catch((error) => {
          console.log('error');
        });

      this.setState(
        {newProfile:  
          {
            Alumni: '',
            Recording_URL: '',
            School:'',
            Photo_URL: '',
            Github: '',
            LinkedIn: '',
            Project_snapShot_URL: '',
            Project_Title:'',
            Description: ''
          },
          users: {}
        }
      );
    }

  render() {
      
    return (
      <div className="App-Intro">

        {React.cloneElement(this.props.children,
          {
            profile: this.state.newProfile,
            users: this.state.users,
            handleChange: this.handleChange,
            handleClick: this.handleClick
          }
        )}


      </div>
    );
  }
}


export default App;
