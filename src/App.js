import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OfficeList from './components/OfficeList';
import Contact from './components/Contact';
import About from './components/About';
import Default from './components/Default';
import Details from './components/Details';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/offices' component={OfficeList} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/details' component={Details} />
          <Route component={Default} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
