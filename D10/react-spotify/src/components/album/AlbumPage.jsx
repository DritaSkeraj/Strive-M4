import React, { Component } from "react";
import AlbumHeader from "./AlbumHeader";
import AlbumInfo from "./AlbumInfo";
import AlbumPlaylist from "./AlbumPlaylist";
import Player from "../Player";
import Menu from "./Menu.jsx";
import { Row, Col } from "react-bootstrap";
import '../../styles/styles.css';

class AlbumPage extends Component {

  state = {
    albumId: '194219022'
  }

  render() {
    return (
      <div>
          <Menu />
          <div className='mainframe'>
            <div className='main-content'>
              <AlbumHeader albumId={this.state.albumId}/>
              <AlbumInfo albumId={this.state.albumId}/>
              <AlbumPlaylist albumId={this.state.albumId}/>
            </div>
          </div>
          <Player />
      </div>
    );
  }
}

export default AlbumPage;