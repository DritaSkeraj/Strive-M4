import React, { Component } from "react";
import AlbumHeader from "./AlbumHeader";
import AlbumInfo from "./AlbumInfo";
import AlbumPlaylist from "./AlbumPlaylist";
import Player from "../Player";
import Menu from "./Menu.jsx";
import { Row, Col } from "react-bootstrap";

class AlbumPage extends Component {
  render() {
    return (
      <div>
        <Row>
        <Col xs={2}>
          <Menu />
          </Col>
          <Col xs={10} style={{overflowY: 'auto !important'}}>
          <AlbumHeader />
          <div style={{ overflowY: "auto" }}>
            <AlbumInfo />
            <AlbumPlaylist />
          </div>
          </Col>
        </Row>
        <Row>
          <Player />
        </Row>
      </div>
    );
  }
}

export default AlbumPage;
