import React, { Component } from 'react';
import axios from 'axios';

export default class About extends Component {
  state = {
      seen: false,
      courses: [],
  }

  componentDidMount() {
    axios.get('https://omoi-sys-309518.wl.r.appspot.com/').then(
      res => {
        const courses = res.data;
        this.setState({courses});
      }).catch(
        err => {
        console.log('Error: ' + err);
      }
    )
  }

  render() {
  return (
    <div>
      <h3>About</h3>
      <section>
        <p className='para'>
          Hi, my name is Abraham. I am a recent graduate of Oregon State University's Postbacc Computer Science program. In this program students are able to earn a second bachelor's degree after completing 60 units worth of computer science courses which cover a range of topics such as data structures, algorithms, operating systems, web applications, and more.
        </p>
        <p className='para'>
          I completed my degree in June 2021, with my final two classes being the online capstone project, a course specifically tailored towards groups a mostly hands-off experience of developing an application from start to finish, and the cloud application development course, where we learned about REST API development and deployment on Google Cloud with the use of App Engine as well as other cloud features such as OAuth 2.0 and container deployment.
        </p>
        <p>
          The curriculum I underwent while completing my degree was:
        </p>
        <div className="d-flex justify-content-sm-around align-content-center flex-wrap">
            {this.state.courses.map(course => 
            <div className='card text-white bg-secondary mb-3'>
              <div className="card-header">
                <h5 className="card-title">{course.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">{course.description}</p>
              </div>
            </div>
          )}
        </div>
        <p className='para'>
          Over the course of two years I've been able to grow a great deal in various areas of Computer Science as well as gain confidence in my skills as a future engineer. I originally come from the discipline of Physics so seeing a different perspective for undertaking problem solving has been a very rewarding experience. I very much look forward to future endeavors. 
        </p>
      </section>
    </div>
    );
  }
}