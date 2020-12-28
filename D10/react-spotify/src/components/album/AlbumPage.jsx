import React, { Component } from "react";
import AlbumHeader from "./AlbumHeader";
import AlbumInfo from "./AlbumInfo";
import AlbumPlaylist from "./AlbumPlaylist";
import Player from "../Player";
import Menu from "./Menu.jsx";
import { Row, Col } from "react-bootstrap";
import '../../styles/styles.css';

class AlbumPage extends Component {
  render() {
    return (
      <div>
          <Menu />
          <div className='mainframe'>
            <div className='main-content'>
            <AlbumHeader />
              <AlbumInfo />
              <AlbumPlaylist />
            </div>
          </div>
          <Player />
      </div>
    );
  }
}

export default AlbumPage;
