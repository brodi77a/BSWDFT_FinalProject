import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Alumni from './components/Alumni';
import CreateProfile from './components/CreateProfile';
import Profile from './components/Profile';
//importing react-router to ensure possibility of routing
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    //
   <Router history= {browserHistory}> 
        <Route path= '/' component= {App}>
            <IndexRoute component= {Alumni}/>
            <Route path= 'createprofile' component={CreateProfile} ></Route>
            <Route path= 'profile/:id' component={Profile}></Route>
        </Route>
   </Router> 
), document.getElementById('root'));
registerServiceWorker();
