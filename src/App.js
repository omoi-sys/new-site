import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/navigation.component';
import About from './components/About.component';
import Home from './components/Home.component';


function App() {
  return (
    <Router>
      <div className='container'>
        <Nav />
        <br />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  );
}

export default App;
