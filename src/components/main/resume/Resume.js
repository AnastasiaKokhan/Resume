import React, { Component } from 'react';

import './resume.css'

class Resume extends Component {
render() {
    return (
      <div className="resume">
            <div className='col-40 block-first'><img className="photo" src='/images/photo.jpg' alt='photo_my'/></div>
            <div className='col-60 block-first'>
              <h1 className="name">Kokhan Anastasiia</h1>
              <p className='job'>Junior/Trainee Front-end developer</p>
              <p className="topic">CONTACTS</p>
              <p className='text'>+380 93 604 2747</p>
              <p className='text'>Kokhan.a25@gmail.com</p>
              <p className='text'>Kiev</p>
              <p className='text'>LinkedIn</p>
            </div>
            <div className='col-40 block'>
              <p className='topic'>ABOUTE</p>
              <p className='text'>Age: 23</p>
              <p className='text'>I want to learn and develop in a strong team. <br/>Ready to work a lot and hard. <br/>For me, now the best reward is experience.</p>
            </div>
            <div className='col-60 block'>
              <div className='col-50'>
                <p className='topic'>SKILLS</p>
                <p className='text'>HTML5, CSS3, SCSS</p>
                <p className='text'>JavaScript (React, Redux, Vue.js)</p>
                <p className='text'>Git, npm, ES6</p>
              </div>
              <div className='col-50'>
                <p className='topic'>COURSES</p>
                <p className='text'>"SKILLUP" SCHOOL</p>
                <p className='text-thin'>Basic and preparatory courses "FRONT-END"</p>
                <p className='text'>ONLINE VIDEO COURSE</p>
                <p className='text-thin'>HTML and CSS</p>
                <p className='text'>ONLINE VIDEO COURSE</p>
                <p className='text-thin'>Java Script, React.js, Vue.js</p>
              </div>
              
            </div>
            <div className='col-40 block'>
              <p className="topic">EDUCATION</p>
              <p className='text'>Kyiv Cooperative Institute of Business and Law</p>
              <p className='text-thin'>2010-2017 M.Sc. Finance and Credit</p>
            </div>
            <div className='col-60 block'>
              <p className='topic'>WORK EXPERIENCE</p>
              <div className='col-70 text-job'>FREELANCE</div><div className='col-30 data right'>01.2019 - present</div>
              <p className='text'>HTML and CSS developer</p>
              <p className='text-thin'>• Creating a project in accordance with the tasks of the customer in the VSC</p>
              <div className='col-70 text-job'>LLC "SIGNAL AUTO GROUP"</div><div className='col-30 data right'>09.2016 - 01.2019</div>
              <p className='text'>Deputy Head of Sales Department</p>
              <p className='text-thin'>• Customer service: customer search and consultation, hardware sales, documentation maintenance</p>
              <div className='col-70 text-job'>MPA GROUP, MAXI MARKETING</div><div className='col-30 data right'>07.2015 - 09.2016</div>
              <p className='text'>Sales Manager</p>
              <p className='text-thin'>• Providing advice on earnings in financial markets</p>
            </div>    
          </div>
   
      
    );
  }
}

export default Resume;