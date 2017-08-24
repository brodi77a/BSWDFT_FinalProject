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
        School: '',
        Photo_URL: '',
        Github: '',
        LinkedIn: '',
        Twitter: '',
        Project_snapShot_URL: '',
        Project_Title: '',
        Description: ''
      },
      users: {}
    }
    axios.get('/users')

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
    this.handleDelete = this.handleDelete.bind(this);
  }
  //this is where we do our functions
  handleChange(event) {
    this.state.newProfile[event.target.name] = event.target.value
    this.setState({
      newProfile: this.state.newProfile
    });

  }

  handleClick(event) {
    event.preventDefault();

    axios.post('/users', {
      newProfile: this.state.newProfile
    })

      .then(result => {
        console.log('data', result.data);
        this.props.router.push('/');
        this.setState({
          users: this.state.users.concat([result.data])
        })
      })

      .catch((error) => {
        console.log('error');
      });

      this.setState({
        newProfile: {
          Alumni: '',
          Recording_URL: '',
          School: '',
          Photo_URL: '',
          Github: '',
          LinkedIn: '',
          Project_snapShot_URL: '',
          Project_Title: '',
          Description: ''
        }
      })

  }


  handleDelete(event, id) {
      axios.delete(`/users/${id}`)

      .then(deletedObject => {
        console.log(deletedObject);
        this.props.router.push('/');
        this.setState({
          users: this.state.users.filter((user) => {

            return deletedObject.data._id !== user._id
          
           })
        })
      })
    
         
          

      .catch(err => {
        console.log(err);
      })
      


  }

  render() {

    

    return (
      <div className="App-Intro">

        {React.cloneElement(this.props.children,
          {
            profile: this.state.newProfile,
            users: this.state.users,
            handleChange: this.handleChange,
            handleClick: this.handleClick,
            handleDelete: this.handleDelete
          }
        )}


      </div>
    );
  }
}


export default App;
