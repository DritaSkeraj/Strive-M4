import React, { Component } from 'react';
import AlbumHeader from './AlbumHeader';
import AlbumInfo from './AlbumInfo';
import AlbumPlaylist from './AlbumPlaylist';
import Player from '../Player';

class AlbumPage extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <AlbumHeader/>
                <div style={{'overflowY': 'auto'}}>
                    <AlbumInfo/>
                    <AlbumPlaylist/>
                </div>
                <Player/>
            </div>
        );
    }
}

export default AlbumPage;