import React, { Component } from "react";
import '../../styles/MenuIcons.css';
import { FiHome } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { VscLibrary } from 'react-icons/vsc';
import { BsPlusSquareFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai';
import { FiArrowDownCircle } from 'react-icons/fi'
import logo from '../../assets/logo.png'

class Menu extends Component {
  render() {
    return (
      <div>
        <aside>
          <div>
              <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="menu d-flex column justify-content-start align-items-center">
            <div className="col">
              <a href="../index.html">
                {" "}
                <FiHome className='basic' />
                Home
              </a>
            </div>
          </div>
          <div className="menu d-flex column justify-content-start align-items-center">
            <div className="col">
              <a href="#">
                {" "}
                <BiSearch className='basic' />Search
              </a>
            </div>
          </div>
          <div className="menu d-flex column justify-content-start align-items-center">
            <div className="col">
              <a href="#">
                {" "}
                <VscLibrary className='basic' />Your library
              </a>
            </div>
          </div>
          <div className="menu d-flex column justify-content-start align-items-center">
            <div className="col">
              <a href="#">
                <BsPlusSquareFill className='basic' />Create playlist
              </a>
            </div>
          </div>
          <div className="menu d-flex column justify-content-start align-items-center">
            <div className="col">
              <a href="#">
                <AiFillHeart className='basic'/>Liked Songs
              </a>
            </div>
          </div>

          <hr />
        <p style={{marginLeft: '2em'}}><em>Playlists:</em></p>
          <div className="playlists playlist-items">
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

          <ul className="stick-to-bottom install-btn">
            <li>
              <a href="#">
                <FiArrowDownCircle className='basic'/> Install
              </a>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Menu;
