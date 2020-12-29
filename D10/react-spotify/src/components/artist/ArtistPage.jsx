import React, { Component } from 'react';
import '../../styles/styles.css';
import Player from "../Player";
import Menu from "../album/Menu";
import ArtistHeader from './ArtistHeader';
import ArtistAlbums from './ArtistAlbums';

class ArtistPage extends Component {
    render() {
        return (
            <div>
            <Menu />
            <div className='mainframe'>
              <div className='main-content'>
                <ArtistHeader/>
                <ArtistAlbums/>
              </div>
            </div>
            <Player />
            </div>
        );
    }
}

export default ArtistPage;