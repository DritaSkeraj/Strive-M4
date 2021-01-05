import React, { Component } from 'react';
import SearchHeader from './SearchHeader';
import SearchCategory from './SearchCategory';
import Menu from '../album/Menu'
import Player from '../Player'
import '../../styles/search.css'

class SearchPage extends Component {
    render() {
        return (
            <div>
            <Menu />
            <div className='mainframe'>
              <div className='main-content'>
               <SearchHeader/>
               {/* <SearchCategory img="../searchImgs/podcasts.jpeg" title="Podcasts"/>*/}
              </div>
            </div>
            <Player />
            </div>
        );
    }
}

export default SearchPage;