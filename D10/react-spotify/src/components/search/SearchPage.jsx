import React, { Component } from 'react';
import SearchHeader from './SearchHeader';
import SearchCategory from './SearchCategory';
import Menu from '../album/Menu'
import Player from '../Player'
import '../../styles/search.css'
import { Row } from 'react-bootstrap'
import podcastImg from '../../searchImgs/podcasts.jpeg'

class SearchPage extends Component {
    render() {
        return (
            <div>
            <Menu />
            <div className='mainframe'>
              <div className='main-content' style={{overflowY: 'hidden', overflowX: 'hidden'}}>
               <SearchHeader/>
               <div className="container">
                <Row>
                    <h4>Browse All</h4>
                </Row>
                <Row>
                <SearchCategory img={podcastImg} title="Podcasts"/>
                <SearchCategory img={podcastImg} title="Podcasts"/>
                <SearchCategory img={podcastImg} title="Podcasts"/>
                <SearchCategory img={podcastImg} title="Podcasts"/>
                <SearchCategory img={podcastImg} title="Podcasts"/>
                <SearchCategory img={podcastImg} title="Podcasts"/>
                <SearchCategory img={podcastImg} title="Podcasts"/>
                <SearchCategory img={podcastImg} title="Podcasts"/>
                </Row>
               </div>
              </div>
            </div>
            <Player />
            </div>
        );
    }
}

export default SearchPage;