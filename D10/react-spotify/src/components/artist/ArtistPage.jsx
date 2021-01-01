import React, { Component } from "react";
import "../../styles/styles.css";
import Player from "../Player";
import Menu from "../album/Menu";
import ArtistHeader from "./ArtistHeader";
import ArtistAlbums from "./ArtistAlbums";
import { Row } from "react-bootstrap";
import backgroundImg from "../../assets/rock-concert.jpg";
import SingleSong from "../SingleSong";

class ArtistPage extends Component {

  state = {
    albums: '',
    loading: true
  }

  componentDidMount = () => {
    this.fetchAlbums('coldplay');
  }

  fetchAlbums = (artist) => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+artist, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "a44588e47dmsh9b184d3ebdf2d08p1faa3djsn2e64ecb46487",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
      }
    },
    this.setState({loading: true})
    )
    .then(response => response.json())
    .then((fetchedAlbum) =>
        this.setState({ albums: fetchedAlbum, loading: false })
    )
    .catch(err => {
      console.error(err);
    });
  }

  render() {
    return (
      <>
        <Menu />

        <section className="mainframe">
          <div
            className="main-content"
            style={{ overflowY: "hidden !important" }}
          >
            <img src={backgroundImg} />
            <div>
              <div
                className="container mt-3 justify-center"
                style={{ position: "relative" }}
              >
                <div className="jumbotron d-flex justify-content-center flex-column">
                  <h6>33,000,575 MONTHLY LISTENERS</h6>
                  <h1 className="display-4">Queen</h1>
                  <div className="d-flex d-md-none  row">
                    <a
                      className="artist-pg-play-btn btn"
                      href="#"
                      role="button"
                    >
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
                    <a
                      className="artist-pg-play-btn btn"
                      href="#"
                      role="button"
                    >
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

              <div style={{ marginTop: "18em !important" }}>
                <ul
                  className="nav nav-tabs justify-content-center"
                  id="myTab"
                  role="tablist"
                  style={{ marginTop: "18em !important" }}
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

              <div
                className="container"
                style={{
                  display: "block",
                  position: "relative",
                  marginBottom: "10em",
                }}
              >
                <h1>Albums</h1>
                <div className="row no-gutters">
                 
        {
          this.state.loading ? (<p>loading...</p>) : (
            <>
            {this.state.albums.data.map((album, key) => {
              //console.log(album.album.title)
              return <SingleSong image={album.album.cover} title={album.album.title}/>
            })}
            </>
          )
          }
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
