import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faHeart,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import "../styles/styles.css";
import HomeNavigationMenu from "./HomeNavigationMenu";

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
        data: result.data,
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
            style={{ overflowX: "hidden" }}
          >
            <div className="justify-content-center">
              <HomeNavigationMenu />
            </div>

            {loading ? (
              <div>
                <Spinner animation="grow" variant="light" className="mt-3" />
              </div>
            ) : (
              albums.map((category) => (
                <>
                  <h4 style={{ color: "#ddd" }}>{category.name}</h4>
                  <Row>
                    {category.data.map((album) => (
                      <div>
                        <Col>
                          <div className="trending card p-0 col-12 col-md-3 col-lg-2 mr-4 ml-4 mt-5 mb-5">
                            <img
                              className="card-img-top"
                              src={album.album.cover}
                              alt="spotify_playlist_1"
                            />

                            <span className="overlay-icons">
                              <FontAwesomeIcon
                                icon={faHeart}
                                className="heart mr-3"
                              />
                              <FontAwesomeIcon
                                icon={faPlay}
                                className="play mr-3"
                              />
                              <FontAwesomeIcon
                                icon={faEllipsisH}
                                className="mr-3"
                              />
                            </span>
                            <div>
                              <h6 style={{ position: "relative", top: "1rem" }}>
                                {album.title}
                              </h6>
                            </div>
                          </div>
                        </Col>
                      </div>
                    ))}
                  </Row>
                </>
              ))
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default HomeContent;
