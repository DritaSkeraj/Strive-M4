import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Row, Col, Spinner} from 'react-bootstrap';
import '../styles/styles.css';

class HomeContent extends React.Component {

    state = {
        artists: ['pink floyd', 'eric clapton', 'linkin park'],
        albums: [],
        error: '',
        loading:true
    }

    componentDidMount = async () => {
      const promiseArray = this.state.artists.map(async (artist) => {
            const result = await this.fetchArtist(artist);
            return {
                name:artist.toUpperCase(),
                data:result.data
            }
        });
        const result = await Promise.all(promiseArray);
       
        this.setState({albums:result,loading:false})
    };

    fetchArtist = async (artist) => {
        try {
            let res = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+artist, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "a44588e47dmsh9b184d3ebdf2d08p1faa3djsn2e64ecb46487",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                }
            },
            this.setState({loading: true})
            );
            if (res.ok) {
              let data = await res.json();
                     
              return data;
            }
          } catch (e) {
            console.log(e);
            this.setState({error: e});
          }
      };

    render(){
        
        const {loading,albums} =  this.state;
         return( 
              <div style={{overflowY : 'auto'}} class='homeContent'>

              <section className="mainframe">
              <div className="main-content d-flex flex-column" style={{overflowX : 'hidden'}}>

              <div className="justify-content-center">
              <div>
                  <ul
                  className="nav nav-tabs justify-content-center"
                  id="myTab"
                  role="tablist"
                  >
                  <li className="nav-item" role="presentation">
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
                      >TRENDING</a>
                  </li>
                  <li className="nav-item" role="presentation">
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
                      >PODCAST</a>
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
                      >MOODS AND GENRES</a>
                  </li>
                  <li className="nav-item d-none d-md-flex " role="presentation">
                      <a
                      className="nav-link"
                      id="new-releases-tab"
                      data-toggle="tab"
                      href="#new-releases"
                      role="tab"
                      aria-controls="new-releases"
                      aria-selected="false"
                      data-target="#homepage-headings"
                      data-slide-to="2"
                      >NEW RELEASES</a>
                  </li>
                  <li className="nav-item d-none d-md-flex" role="presentation">
                      <a
                      className="nav-link"
                      id="discover-tab"
                      data-toggle="tab"
                      href="#discover"
                      role="tab"
                      aria-controls="discover"
                      aria-selected="false"
                      data-target="#homepage-headings"
                      data-slide-to="2"
                      >DISCOVER
                      </a>
                  </li>
                  <button className="dropdown-toggle d-md-none" type="button" id="dropdownMenuButton" 
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{
                  background: "transparent",
                  fontSize: "10px",
                  border: "none",
                  color: "whitesmoke",
                  fontWeight: "500",
                  letterSpacing: "0.1em",
                  marginBottom: "22px",
                  marginLeft: "5px"}}>
                  MORE
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">MOODS & GENERES</a>
                  <a className="dropdown-item" href="#">NEW RELEASES</a>
                  <a className="dropdown-item" href="#">DISCOVER</a>
                  </div>
              </ul>
              </div>
              </div>

                {loading? <div>
                    <Spinner animation="grow" variant="light" />
                </div> :albums.map(category=>  <> 
                    
                     <h4 style={{color: '#ddd'}}>{category.name}</h4>
                    <Row>
                    {category.data.map(album=><div>
                        {console.log('album.cover------------', album.album.cover)}
                        {console.log('album.title------------', album.title)}
                        <Col>
                        <div className="trending card p-0 col-12 col-md-3 col-lg-2 mr-4 ml-4 mt-5 mb-5">
                        <img
                            className="card-img-top"
                            src={album.album.cover}
                            alt="spotify_playlist_1"
                        />
                        
                        <span className="overlay-icons">
                        <FontAwesomeIcon icon={faHeart} className='heart mr-3'/>
                        <FontAwesomeIcon icon={faPlay} className='play mr-3'/>
                        <FontAwesomeIcon icon={faEllipsisH} className='mr-3'/>
                        </span>
                        <div>
                            <h6 style={{position: 'relative', top: '1rem'}}>{album.title}</h6>
                        </div>
                        </div>
                        </Col>
                        </div>)}
                    </Row>
                    </>)}
                    
                
                </div>
                </section>
              </div>
        );
    }
}

export default HomeContent;