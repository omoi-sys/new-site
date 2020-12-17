import React, { Component } from 'react';
import axios from 'axios';

//let courses_loaded = []

export default class About extends Component {
  state = {
      seen: false,
      courses: [],
  }

  componentDidMount() {
    axios.get('http://localhost:8000/').then(
      res => {
        const courses = res.data;
        this.setState({courses});
        console.log(courses);
      }).catch(
        err => {
        console.log('Error: ' + err);
      }
    )
  }
  

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
          {this.state.courses.map(course => 
            <div className='course-box' key={course._id} onClick={this.togglePop}>
              {course.name}
            </div>
          )}
        </div>
      </section>
    </div>
    );
  }
}