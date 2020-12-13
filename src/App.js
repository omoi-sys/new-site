import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Nav from './components/navigation.component';
import About from './components/About.component';
import Home from './components/Home.component';


function App() {
  return (
    <div className='App'>
      <Router>
      <div className='container'>
        <Nav />
        <br />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </div>
      </Router>
    </div>
  );
}

export default App;
