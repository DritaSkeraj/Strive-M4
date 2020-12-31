import React, { Component } from "react";
import "../../styles/styles.css";
import Player from "../Player";
import Menu from "../album/Menu";
import ArtistHeader from "./ArtistHeader";
import ArtistAlbums from "./ArtistAlbums";
import { Row } from "react-bootstrap";
import backgroundImg from "../../assets/rock-concert.jpg";

class ArtistPage extends Component {
  render() {
    return (
      <>
        <Menu />
        {/*<div className='mainframe'>
              <div className='main-content'>
                <Row><ArtistHeader/></Row>
                <Row><ArtistAlbums/></Row>
              </div>
            </div>*/}

        <section className="mainframe"  style={{overflowY: 'auto !important'}}>
          <div className="main-content" style={{overflowY: 'auto !important'}}>
            <img src={backgroundImg} />
            <div style={{overflowY: 'auto !important'}}>
            <div className="container mt-3 justify-center">
              <div className="jumbotron d-flex justify-content-center flex-column">
                <h6>33,000,575 MONTHLY LISTENERS</h6>
                <h1 className="display-4">Queen</h1>
                <div className="d-flex d-md-none  row">
                  <a className="artist-pg-play-btn btn" href="#" role="button">
                    PLAY
                  </a>
                  <a
                    className="artist-pg-follow-btn btn btn-outline-light btn-lg"
                    href="#"
                    role="button"
                  >
                    FOLLOW
                  </a>
                </div>
                <div className="d-none d-md-flex column">
                  <a className="artist-pg-play-btn btn" href="#" role="button">
                    PLAY
                  </a>
                  <a
                    className="artist-pg-follow-btn btn btn-outline-light btn-lg"
                    href="#"
                    role="button"
                  >
                    FOLLOW
                  </a>
                </div>
              </div>
            </div>
                        
            <div style={{marginTop: '18em !important', position: 'relative', top: '10em !important', display: 'block', }}>
              <ul
                className="nav nav-tabs justify-content-center"
                id="myTab"
                role="tablist" 
              >
                <li className="nav-item d-none d-md-flex" role="presentation">
                  <a
                    className="nav-link"
                    id="trending-tab"
                    data-toggle="tab"
                    href="#trending"
                    role="tab"
                    aria-controls="trending"
                    aria-selected="true"
                    data-target="#homepage-headings"
                    data-slide-to="0"
                  >
                    OVERVIEW
                  </a>
                </li>
                <li className="nav-item d-none d-md-flex" role="presentation">
                  <a
                    className="nav-link"
                    id="podcast-tab"
                    data-toggle="tab"
                    href="#podcast"
                    role="tab"
                    aria-controls="podcast"
                    aria-selected="false"
                    data-target="#homepage-headings"
                    data-slide-to="1"
                  >
                    RELATED ARTISTS
                  </a>
                </li>
                <li className="nav-item d-none d-md-flex" role="presentation">
                  <a
                    className="nav-link"
                    id="moods-and-genres-tab"
                    data-toggle="tab"
                    href="#moods-and-genres"
                    role="tab"
                    aria-controls="moods-and-genres"
                    aria-selected="false"
                    data-target="#homepage-headings"
                    data-slide-to="2"
                  >
                    ABOUT
                  </a>
                </li>

                <button
                  className="dropdown-toggle d-md-none"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    background: "transparent",
                    fontSize: "10px",
                    border: "none",
                    color: "whitesmoke",
                    fontWeight: "500",
                    letterSpacing: "0.1em",
                    marginBottom: "22px",
                    marginLeft: "5px",
                  }}
                >
                  MORE
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    OVERVIEW
                  </a>
                  <a className="dropdown-item" href="#">
                    RELATED ARTIST
                  </a>
                  <a className="dropdown-item" href="#">
                    ABOUT
                  </a>
                </div>
              </ul>

            </div>
            
            <div className="container" style={{display: 'block', marginTop: '22em'}}>
              <h1>Albums</h1>

              <div className="row no-gutters">
                <div className="trending card col-12 col-md-3 col-lg-2 mb-4">
                  <img
                    className="card-img-top"
                    src="images/queen_1.png"
                    alt="spotify_playlist_1"
                  />
                  <i className="spotify-card-icon fab fa-spotify"></i>
                  <span className="overlay-icons">
                    <i className="heart far fa-heart fa-sm mr-3"></i>
                    <i className="play fas fa-play fa-1x mr-3"></i>
                    <i className="fa fa-ellipsis-h fa-sm"></i>
                  </span>
                  <div>
                    <h6 className="d-block text-truncate">
                      Bohemian Rhapsody (The Orginal Soundtrack)
                    </h6>
                  </div>
                </div>
              </div>
            
              <h1 className="mt-5">Appears On</h1>

              <div className="row no-gutters">
              <div className="trending card col-12 col-md-3 col-lg-2 mb-4">
                <img
                  className="card-img-top"
                  src="images/queen_6.png"
                  alt="spotify_playlist_1"
                />
                <i className="spotify-card-icon fab fa-spotify"></i>
                <span className="overlay-icons">
                  <i className="heart far fa-heart fa-sm mr-3"></i>
                  <i className="play fas fa-play fa-1x mr-3"></i>
                  <i className="fa fa-ellipsis-h fa-sm"></i>
                </span>
                <div>
                  <h6 className="d-block text-truncate">Top 50 - Italy</h6>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
        </section>

        <Player />
      </>
    );
  }
}

export default ArtistPage;
