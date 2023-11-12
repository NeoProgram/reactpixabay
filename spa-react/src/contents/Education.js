import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education and Personal Information</h1>
            <Widecard title="●	BSc (Hons) in Computer Science " where="London Metropolitan University " from="September 2007" to="September 2010"/>
            <Widecard title="●	Languages" where="Spanish (native), English (fluent)." from="Passionate about learning new skills." to="Detail oriented."/>
            <Widecard title="●	Hobbies" from="Tennis" to="Motorcycles"/>
            </div>
            )
        }
    }
    
export default Education
    