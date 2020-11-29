import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AsideMenu from './components/AsideMenu';
import Player from './components/Player';
import Login from './components/Login';
import HomeContent from './components/HomeContent';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Route path='/login' exact component={Login} />
        <Route path='/' exact component={AsideMenu} />
        <Route path='/' exact component={Player} />
        <Route path='/' exact component={HomeContent} />
    </Router>
  );
}

export default App;


