import React, { Component } from 'react';
import Popup from './Popup.component';

export default class About extends Component {
  state = {
      seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

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
          <div className='course-box' onClick={this.togglePop}>
            Accelerated Intro to Computer Science
          </div>
          {this.state.seen ? <Popup toggle={this.togglePop} />: null}
          <div className='course-box' onClick={this.togglePop}>
            Discrete Structures in Computer Science
          </div>
          <div className='course-box' onClick={this.togglePop}>
            Computer Architecture and Assembly Language
          </div>
          <div className='course-box' onClick={this.togglePop}>
            Data Structures
          </div>
          <div className='course-box' onClick={this.togglePop}>
            Analysis of Algorithms
          </div>
          <div className='course-box' onClick={this.togglePop}>
            Web Development
          </div>
          <div className='course-box' onClick={this.togglePop}>
            Intro to Databases
          </div>
          <div className='course-box' onClick={this.togglePop}>
            Intro to Parallel Programming
          </div>
          <div className='course-box' onClick={this.togglePop}>
            Operating Systems I
          </div>
          <div className='course-box' onClick={this.togglePop}>
            Intro to Computer Networks
          </div>
        </div>
      </section>
    </div>
    );
  }
}