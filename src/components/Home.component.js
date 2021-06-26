import React, { Component } from 'react';
//import img from '/home/omoito/new-site/src/components/milky-way-67504_1920.jpg'

export default class About extends Component {
  render() {
    return (
    <div>
      <div className='welcome-cont'>
        <img className='welcome-img' src="milky-way-67504_1920.jpg" alt='milky-way'/>
        <div className='welcome-head'>Welcome</div>
      </div>
      <p className='para'>
        This is a personal website I made using ReactJS. It makes use of React Router DOM for linking to other parts of the website and navigation routing. It is a very simple personal website to practicing React and other technologies.
      </p>
    </div>
    );
  }
}