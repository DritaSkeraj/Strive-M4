import React, { Component } from 'react';
import "../../styles/albums.css";

class AlbumInfo extends Component {
    render() {
        return (
            <div className='album row bootstrapOverwrite'>
                  <div className='col-12 col-md-6 col-lg-4'>
                    <img className='album-cover img-fluid' src='http://placehold.it/80x80' alt='bohemian rhapsody' />
                  </div>
                  
                  <div className='album-details col-12 col-md-6 col-lg-8' >
                    <h4 className = "mt-2">albums</h4>
                    <h2>bohemian rhapsody</h2><h5>(the original soundtrack)</h5>
                    <div className='mt-4 last-line'>
                      <img src='http://placehold.it/10x10' alt='queen' className='group-img' />
                      <h6><a href='../artist-page.html' className='group-name'>Queen</a></h6>
                      <p className='album-length'>2018 • 22 songs, 1 hr 19 min</p>
                    </div>
                  </div>
                </div>
        );
    }
}

export default AlbumInfo;