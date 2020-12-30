import React, { Component } from "react";
import "../../styles/albums.css";
import { Spinner, Row } from "react-bootstrap";
import { ColorExtractor } from "react-color-extractor";

class AlbumInfo extends Component {
  state = {
    album: "",
    loading: 'true',
    colors: []
  };

  componentDidMount = () =>{
    this.fetchAlbum(this.props.albumId);
  }

  fetchAlbum = (id) => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + id, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a44588e47dmsh9b184d3ebdf2d08p1faa3djsn2e64ecb46487",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    },this.setState({ loading: true })
    ).then((response) => response.json())
    .then(fetchedAlbum => this.setState({album: fetchedAlbum, loading: false}))
  };

  toMinutes = (d) => {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    let mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
    return " " + hDisplay + mDisplay;
    }


    getColors = (colors) =>
    this.setState((state) => ({ colors: [...state.colors, ...colors] }));


  render() {

    console.log(this.state.album)
    return (
      <>

      <ColorExtractor getColors={this.getColors}>
        <img src={this.state.album.cover_big} style={{display: 'none' }} />
      </ColorExtractor>
      {console.log("COLORS:::::::", this.state.colors)}

      {this.state.loading ? (
        <div>
          <Spinner animation="grow" variant="light" className="mt-3 albums-spinner"/>
        </div>
      ) : (
      <div className="album row bootstrapOverwrite" style={{backgroundColor: this.state.colors[0]}}>
      <Row>
        <div>
          <img
            className="album-cover img-fluid"
            src={this.state.album.cover_big}
            alt={this.state.album.title}
          />
        </div>
        </Row>
        <Row>
        <div className="album-details col-12 col-md-6 col-lg-8">
          <h4 className="mt-2">albums</h4>
          <h2>{this.state.album.title}</h2>
          <h5>({this.state.album.label})</h5>
          <div className="mt-4 last-line">
            <img
              src={this.state.album.artist.picture_small}
              alt="artist"
              className="group-img mr-2"
            />
            <h6>
              <a href="../artist-page.html" className="group-name">
                {this.state.album.artist.name}
              </a>
            </h6>
            <p className="album-length">{this.state.album.release_date.slice(0, 4)} •  
            {this.state.album.tracks.data.length} songs, 
            {this.toMinutes(this.state.album.duration)} </p>
          </div>
        </div>
        </Row>
      </div>
      )}
      </>
    );
  }
}
export default AlbumInfo;