import React, { Component } from 'react';
import '../../styles/styles.css';
import Player from "../Player";
import Menu from "../album/Menu";
import ArtistHeader from './ArtistHeader';
import ArtistAlbums from './ArtistAlbums';
import { Row } from 'react-bootstrap';

class ArtistPage extends Component {
    render() {
        return (
            <div>
            <Menu />
            <div className='mainframe'>
              <div className='main-content'>
                <Row><ArtistHeader/></Row>
                <Row><ArtistAlbums/></Row>
              </div>
            </div>
            <Player />
            </div>
        );
    }
}

export default ArtistPage;