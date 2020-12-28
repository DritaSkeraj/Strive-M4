import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div>
            <aside>
            <div>
              <a href="../index.html"><img src="../../assets/logo.png" alt="logo" className="logo" /></a>
            </div>
            <div className="menu d-flex column justify-content-start align-items-center">
                  <div className="col">
                    <a href="../index.html"> <i className="fas fa-home fa-lg"></i>Home</a>
                  </div>
                </div>
                <div className="menu d-flex column justify-content-start align-items-center">
                  <div className="col">
                    <a href="#"> <i className="fas fa-search fa-lg"></i>Search</a>
                  </div>
                </div>
                <div className="menu d-flex column justify-content-start align-items-center">
      
                  <div className="col">
                    <a href="#"> <i className="fas fa-book fa-lg"></i>Your library</a>
                  </div>
                </div>
                <div className="menu d-flex column justify-content-start align-items-center">
                <div className="col">
                  <a href="#">
                    <i className="fas fa-plus-circle fa-lg"></i>Create playlist</a>
                </div>
              </div>
              <div className="menu d-flex column justify-content-start align-items-center">
              <div className="col">
                <a href='#'>
                  <i className="far fa-heart fa-lg"></i>Liked Songs</a>
              </div>
            </div>
      
      
            <hr />
      
              <div className='playlists'>
                <p>#playlist 1</p>
                <p>#playlist 2</p>
                <p>#playlist 3</p>
                <p>#playlist 4</p>
                <p>#playlist 5</p>
                <p>#playlist 4</p>
                <p>#playlist 5</p>
                <p>#playlist 5</p>
                <p>#playlist 4</p>
                <p>#playlist 5</p>
              </div>
      
                <ul className='stick-to-bottom install-btn'>
                  <li><a href='#'> <i className="fas fa-arrow-circle-down"></i> Install</a></li>
                </ul>
              </div>
            </div>
          </aside>
            </div>
        );
    }
}

export default Menu;