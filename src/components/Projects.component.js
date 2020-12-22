import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        This page is to describe projects done throughout my time in the CS program.
        <dl className='para'>
          <dt><a href='https://omoi-sys.github.io/personal-old/' target='_blank'>Portfolio Website</a></dt>
          <dd>A simple static front-end personal website that 
            utilizes HTML, CSS, and JavaScript. While most of 
            the website is just made up of HTML and CSS, one 
            section (Weather) uses JavaScript and AJAX calls to 
            request information from the Open Weather Map API 
            about the weather in the inputed city. This section 
            was added both to implement a requirement to add a 
            scroll box in one page. Rather than just add simple 
            text,  I decided to re-implement a previous API 
            activity on the side as well and simply showcase 
            the JS code for those AJAX calls. By utilizing AJAX 
            there's also no need to refresh to do more queries.</dd>
          <dt><a href='https://github.com/omoi-sys/smallsh' target='_blank'>smallsh</a></dt>
          <dd>
            A simple shell with limited functionality. Makes use of
            exec() to make system calls for the inputed commands 
            such as echo, cat, ps. When a command is inputed, a child
            process is created using fork() that then runs the command
            if it's valid, just like a shell with more functionality such
            as bash. There is also a foreground-only mode in which & is ingored.
          </dd>
          <dt>This React Website</dt>
          <dd>
          
          </dd>
        </dl>
      </div>
    );
  }
}