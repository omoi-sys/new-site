import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Nav from './components/navigation.component';
import About from './components/About.component';
import Home from './components/Home.component';
import Projects from './components/Projects.component';


function App() {
  return (
    <div className='App'>
      <Router>
      <div className='container'>
        <Nav />
        <br />
        <Route path='/new-site/' exact component={Home} />
        <Route path='/new-site/about' component={About} />
        <Route path='/new-site/projects' component={Projects} />
      </div>
      </Router>
    </div>
  );
}

export default App;
