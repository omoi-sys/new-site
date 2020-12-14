import React, { Component } from 'react';

export default class Popup extends Component {
  classClick = () => {
      this.props.toggle();
  }

  render() {
    return (
      <div className='info-cont'>
        <span className='close' onClick={this.classClick}>
          &times;
        </span>
        <p className='course'>
        This is a personal website I made using ReactJS. It makes use of React Router DOM for linking to other parts of the website and navigation routing. It is a very simple personal website to practicing React and other technologies.
        </p>
      </div>
    );
  }
}