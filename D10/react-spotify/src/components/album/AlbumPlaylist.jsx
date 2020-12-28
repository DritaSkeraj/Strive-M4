import React, { Component } from 'react';
import "../../styles/albums.css";

class AlbumPlaylist extends Component {
    render() {
        return (
            <div className='playlist'>
                  <div className='playlist-btns mt-3 mb-3'>
                    <i className="fas fa-pause-circle fa-3x"></i>
                    <i className="far fa-heart fa-2x mr-3 ml-3"></i>
                     <i className="fa fa-ellipsis-h fa-2x"></i>
                  </div>
                  <div className='playlist-table'>
                    <table className='table table-borderless'>
                      <thead>
                        <tr>
                          <th scope="col th-sm">
                            <span># </span>
                          </th>
                          <th scope="col th-lg" style={{paddingLeft: '50px'}} >Title</th>
                          <th scope="col th-sm">
                            <i className="far fa-clock"></i>
                          </th>
                          <div style={{borderBottom: '1px solid #b3b3b3', width: '90%'}}></div>
                        </tr>
                      </thead>
                      <tbody>
                          <tr  onclick="printInnerText(this)">
                          <th scope="row" style={{verticalAlign: 'middle'}}>
                            <span className='track-num'>1 </span>
                              <img src="https://img.icons8.com/android/16/b3b3b3/play.png" onclick="printInnerText()" className='track-play play-track-btn'/>
                          </th>
                          <td>
                            <ul>
                              <li className='song'>20th Centry Fox Fanfare</li>
                              <li className='group' style={{verticalAlign: 'middle'}}>Queen</li>
                            </ul>
                          </td>
                          <td style={{verticalAlign: 'middle'}}>
                            <img src="https://img.icons8.com/ios/15/b3b3b3/like.png" className='track-heart'/>
                            0:25
                            <img src="https://img.icons8.com/material/15/b3b3b3/more--v1.png" className='track-dots'/>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className='playlist-footer'>
                    &copy 2018 Queen Productions Ltd, under exclusive licence to Universal International Music BV<br/>
                    ℗ A Virgin Records Release; This Compilation ℗ 2018 Queen Productions Ltd, under exclusive licence to Universal International Music BV
                  </p>
                </div>
        );
    }
}

export default AlbumPlaylist;