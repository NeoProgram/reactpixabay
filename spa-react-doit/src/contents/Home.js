import React, { Component } from 'react';
//import Widecard from '../components/Widecard';
import ReactTypingEffect from './react-typing-effect';
import profilepic from '../img/naafi_photo.png';
import Social from '../components/Social'

class Education extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Abdul Wahid Naafi','I am a web developer']} speed={100} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
export default Education
    