import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
    <div>
      <h1>Welcome</h1>
      <img className='welcome-img' src='milky-way-67504_1920.jpg' alt='milky-way' />
      <p className='para'>
        This is a personal website I made using ReactJS. It makes use of React Router DOM for linking to other parts of the website and navigation routing. It is a very simple personal website to practicing React.
      </p>
      <p className='para'>
        Incidentally the About page has information about me, so to be sure to click above to read more.
      </p>
    </div>
    );
  }
}