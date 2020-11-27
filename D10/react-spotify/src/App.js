import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Login from './components/Login';
import AsideMenu from './components/AsideMenu';
import Player from './components/Player';
import HomeNavPanel from './components/HomeNavPanel';
import HomeContent from './components/HomeContent';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/login' exact component={Login} />
        <Route path='/' component={AsideMenu} />
        <Route path='/' component={Player} />
        <Route path='/' exact component={HomeNavPanel} />
        <Route path='/' exact component={HomeContent} />
      </div>
    </Router>
  );
}

export default App;
