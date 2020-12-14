import React, { Component } from 'react';

export default class About extends Component {
  render() {
  return (
    <div>
      <h3>About</h3>
      <section>
        <p className='para'>
          Hi, my name is Abraham. I am a Postbacc Computer Science student at Oregon State University. In this program students are able to earn a second bachelor's degree after completing 60 units, all of which are earned from CS courses.
        </p>
        <p className='para'>
          As of December 2020, I've completed 44 units and only hvae 4 courses left to graduate. The cources that I've completed thus far are:
        </p>
        <div className='courses'>
          <div className='course-box'>
            Accelerated Intro to Computer Science
          </div>
          <div className='course-box'>
            Discrete Structures in Computer Science
          </div>
          <div className='course-box'>
            Computer Architecture and Assembly Language
          </div>
          <div className='course-box'>
            Data Structures
          </div>
          <div className='course-box'>
            Analysis of Algorithms
          </div>
          <div className='course-box'>
            Web Development
          </div>
          <div className='course-box'>
            Intro to Databases
          </div>
          <div className='course-box'>
            Intro to Parallel Programming
          </div>
          <div className='course-box'>
            Operating Systems I
          </div>
          <div className='course-box'>
            Intro to Computer Networks
          </div>
        </div>
      </section>
    </div>
    );
  }
}