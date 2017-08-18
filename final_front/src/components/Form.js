import React, { Component } from 'react';
import App from '../App';
import '../App.css';
import { Button, Icon, Input, Row } from 'react-materialize'


class Form extends Component {
    render() {
        let { profile } = this.props;
        return (
            <form>

                <div>
                    {/* <div className = "input-group margin">
                        <p>Alumni: </p><input onChange = {this.props.keyPress}className = "form-control" placeholder = 'Alumni' />
                        </div> */}

                    <Row className='margin'>
                        <div><Input s={7} name='Alumni' type='text' value={profile.Alumni} onChange={this.props.handleChange} label="Alumni" /></div>
                        <div><Input s={7} name='Recording_URL' type='text' value={profile.Recording_URL} onChange={this.props.handleChange} label="Recording URL" /></div>
                        <div><Input s={7} name='School' type='text' value={profile.School} onChange={this.props.handleChange} label="School" /></div>
                        <div><Input s={7} name='Photo_URL' type='text' value={profile.Photo_URL} onChange={this.props.handleChange} label="Photo URL" /></div>
                        <div><Input s={7} name='Github' type='text' value={profile.Github} onChange={this.props.handleChange} label="Github" /></div>
                        <div><Input s={7} name='LinkedIn' type='text' value={profile.LinkedIn} onChange={this.props.handleChange} label="LinkedIn" /></div>
                        <div><Input s={7} name='Project_snapShot_URL' value={profile.Project_snapShot_URL} onChange={this.props.handleChange} type='text' label="Project Snapshot URL" /></div>
                        <div><Input s={5} name='Project_Title' type='text' value={profile.Project_Title} onChange={this.props.handleChange} label="Project Title" /></div>
                        <textarea id="textarea1" className="materialize-textarea" placeholder= 'Description' value={profile.Project_Title} onChange={this.props.handleChange}  ></textarea>
                    </Row>

                </div>

                <span className="input-group-btn">
                    <Button onClick={this.props.handleClick} waves='light' type='submit'>Submit</Button>
                </span>


            </form>
        )
    }
}

export default Form;