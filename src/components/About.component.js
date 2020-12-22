import React, { Component } from 'react';
import axios from 'axios';

export default class About extends Component {
  state = {
      seen: false,
      courses: [],
  }

  componentDidMount() {
    axios.get('http://omoi-sys.com:8000/').then(
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
          As of December 2020, I've completed 44 units and only need 4 courses to graduate, namely Software Engineering I and II, the Online Capstone, and an elective for which I plan to enroll in the Cloud Application Development. The cources that I've completed thus far are:
        </p>
        <div className='courses'>
          {this.state.courses.map(course => 
            <div className='course-box' key={course._id} onClick={this.togglePop}>
              {course.name}
            </div>
          )}
        </div>
        <p className='para'>
          Over the past twenty months I've been able to grow a great deal in various areas of Computer Science as well as gain confidence in my skill as a future engineer. I come originally from the discipline of Physics, even if admitedly I did not do so well on it, so seeing a different perspective to go about problem solving has been a very rewarding experience. 
        </p>
      </section>
    </div>
    );
  }
}