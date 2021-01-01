import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import "../styles/styles.css";
import HomeNavigationMenu from "./HomeNavigationMenu";
import SingleSong from './SingleSong';

class HomeContent extends React.Component {
  state = {
    artists: ["pink floyd", "eric clapton", "linkin park"],
    albums: [],
    error: "",
    loading: true,
  };

  componentDidMount = async () => {
    const promiseArray = this.state.artists.map(async (artist) => {
      const result = await this.fetchArtist(artist);
      return {
        name: artist.toUpperCase(),
        data: result.data.slice(0,15),
      };
    });
    const result = await Promise.all(promiseArray);

    this.setState({ albums: result, loading: false });
  };

  fetchArtist = async (artist) => {
    try {
      let res = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "a44588e47dmsh9b184d3ebdf2d08p1faa3djsn2e64ecb46487",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        },
        this.setState({ loading: true })
      );
      if (res.ok) {
        let data = await res.json();

        return data;
      }
    } catch (e) {
      console.log(e);
      this.setState({ error: e });
    }
  };

  render() {
    const { loading, albums } = this.state;
    return (
      <div style={{ overflowY: "auto" }} class="homeContent">
        <section className="mainframe">
          <div
            className="main-content d-flex flex-column"
            style={{ overflowX: "hidden", marginBottom: '15em', height: '90vh' }}
          >
            <div className="justify-content-center" style={{marginBottom: '-7rem !important'}}>
              <HomeNavigationMenu />
            </div>

            {loading ? (
              <div>
                <Spinner animation="grow" variant="light" className="mt-3 albums-spinner"/>
              </div>
            ) : (
              albums.map((category) => (
                <div>
                  <h4 className="artist-name">{category.name}</h4>
                  <Row>
                    {category.data.map((album) => (
                      <SingleSong image={album.album.cover} title={album.title}/>
                    ))}
                  </Row>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default HomeContent;
