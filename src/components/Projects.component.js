import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        This page is to describe projects done throughout my time in the CS program.
        <div className='d-flex justify-content-sm-around align-content-center flex-wrap'>
          <div className='card text-dark bg-light mb-3'>
            <img class='card-img-top' src='vehiclesAPI.png' alt='Card image cap'></img>
            <div className='card-header'>
              <a href='https://serratab-portfolio.wl.r.appspot.com/login' target='_blank'>Vehicles REST API</a>
            </div>
            <div className='card-body'>
              <div className='card-text'>
                A REST API built for deployment on Google Cloud's App Engine platform. Developed with Express for the back-end and Express-Handlebars for the front-end.
              </div>
            </div>
            <div className='card-footer'>
              <a href='https://github.com/omoi-sys/cloud-portfolio-project' target='_blank'>Repository</a>
            </div>
          </div>
          <div className='card text-dark bg-light mb-3'>
            <img class='card-img-top' src='cdf.png' alt='Card image cap'></img>
            <div className='card-header'>
              <a href='https://cdf-serratab.herokuapp.com' target='_blank'>Computer Defense Force</a>
            </div>
            <div className='card-body'>
              <div className='card-text'>
                Group capstone project.
              </div>
            </div>
            <div className='card-footer'>
              <a href='https://github.com/tdraxler/computer-defense-force' target='_blank'>Repository</a>
            </div>
          </div>
          <div className='card text-dark bg-light mb-3'>
            <div className='card-header'>
              <a href='https://omoi-sys.dev' target='_blank'>React personal website</a>
            </div>
            <div className='card-body'>
              <div className='card-text'>
                A simple multi-page website developed with React and Bootstrap. It connects to a remote MongoDB database endpoint hosted on GCP App Engine. It is the latest iteration of my original personal website which I created for my Web Development course. The intention is als oto serve not just as a personal site, but also as a training ground for myself in learning React and other frameworks.
              </div>
            </div>
            <div className='card-footer'>
              <a href='https://github.com/omoi-sys/new-site' target='_blank'>Repository</a>
            </div>
          </div>
          <div className='card text-dark bg-light mb-3'>
            <img class='card-img-top' src='smallsh.png' alt='Card image cap'></img>
            <div className='card-header'>
              smallsh
            </div>
            <div className='card-body'>
              <div className='card-text'>
                A lightweight shell application with limited functionality. It makes use of the exec() family of functions to make system calls for the inputed commands such as echo, cat, ps, ls, etc. When a command is called, a child process is created using fork() which then executes the command if it's valid, just like it would in Bash. Additionally it contains a forground-only mode in which & is ignored.
              </div>
            </div>
            <div className='card-footer'>
              <a href='https://github.com/omoi-sys/smallsh' target='_blank'>Repository</a>
            </div>
          </div>
          <div className='card text-dark bg-light mb-3'>
            <img class='card-img-top' src='personal-old.png' alt='Card image cap'></img>
            <div className='card-header'>
              <a href='https://omoi-sys.github.io/personal-old' target='_blank'>Old Portfolio Website</a>
            </div>
            <div className='card-body'>
              <div className='card-text'>
                Simple static front-end personal website that utilizes HTML, CSS, and JavaSCript. While most of the website is made up of HTML and CSS only, one seciont (Weather) uses JavaScript and AJAX calls to request information from the Open Weather Map API about the weather in the inputed city. This section was added originall to meet a requirement of the site needing a scroll box in one page. Rather than just add simple text, I decided to re-implement a previous API activity on the side as well and simple showcase the JS code fro those AJAX calls in the scroll box. By utilizing AJAX there's also no need to refresh to do more queries.
              </div>
            </div>
            <div className='card-footer'>
              <a href='https://github.com/omoi-sys/personal-old' target='_blank'>Repository</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}