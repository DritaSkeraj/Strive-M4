import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AsideMenu from './components/AsideMenu';
import Player from './components/Player';
import Login from './components/Login';
import HomeContent from './components/HomeContent';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import AlbumPage from "./components/album/AlbumPage";

function App() {
  return (
    <Router>
        <Route path='/login' exact component={Login} />
        <Route path='/'  component={AsideMenu} />
        <Route path='/' exact component={Player} />
        <Route path='/' exact component={HomeContent} />
        <Route path='/albumPage' exact component={AlbumPage} />
    </Router>
  );
}

export default App;


