import React, { Component } from 'react';
import App from '../App';
import '../App.css';
import { Button, Icon, Input, Row } from 'react-materialize';
import {Link} from 'react-router';


class Form extends Component {
    render() {
        let { profile } = this.props;
        return (
            <form>

                <div>

                    <Row className='margin'>
                        <div><Input s={12}  name='Alumni' type='text' value={profile.Alumni} onChange={this.props.handleChange} label="Alumni" /></div>
                        <div><Input s={12}  name='Recording_URL' type='text' value={profile.Recording_URL} onChange={this.props.handleChange} label="Recording URL" /></div>
                        <div><Input s={12}  name='School' type='text' value={profile.School} onChange={this.props.handleChange} label="School" /></div>
                        <div><Input s={12}  name='Photo_URL' type='text' value={profile.Photo_URL} onChange={this.props.handleChange} label="Photo URL" /></div>
                        <div><Input s={12}  name='Github' type='text' value={profile.Github} onChange={this.props.handleChange} label="Github" /></div>
                        <div><Input s={12}  name='LinkedIn' type='text' value={profile.LinkedIn} onChange={this.props.handleChange} label="LinkedIn" /></div>
                        <div><Input s={12}  name='Twitter' type='text' value={profile.Twitter} onChange={this.props.handleChange} label="Twitter" /></div>
                        <div><Input s={7}   name='Project_snapShot_URL1' value={profile.Project_snapShot_URL} onChange={this.props.handleChange} type='text' label="Project Snapshot URL 1" /></div>
                        <div><Input s={5}   name='Project_Title1' type='text' value={profile.Project_Title1} onChange={this.props.handleChange} label="Project Title 1" /></div>
                        <div><Input s={7}   name='Project_snapShot_URL2' value={profile.Project_snapShot_URL2} onChange={this.props.handleChange} type='text' label="Project Snapshot URL 2" /></div>
                        <div><Input s={5}   name='Project_Title2' type='text' value={profile.Project_Title2} onChange={this.props.handleChange} label="Project Title 2" /></div>
                        <div><Input s={7}   name='Project_snapShot_URL3' value={profile.Project_snapShot_URL3} onChange={this.props.handleChange} type='text' label="Project Snapshot URL 3" /></div>
                        <div><Input s={5}   name='Project_Title3' type='text' value={profile.Project_Title3} onChange={this.props.handleChange} label="Project Title 3" /></div>

                        <textarea name='Description' className="materialize-textarea" placeholder= 'Description' value={profile.Description} onChange={this.props.handleChange}></textarea>
                    </Row>

                    <span className="input-group-btn">
                        <Link to='/'><Button onClick={this.props.handleClick} waves='light' type='submit'>Submit</Button></Link>
                    </span>

                </div>
            

                


            </form>
        )
    }
}

export default Form;