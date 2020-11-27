import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import '../styles/styles.css';
import logo from '../assets/logo.png';

const AsideMenu = () => {

    return(
        <aside>
            <div styles={{width: '80%', padding: '1rem'}}>
            <div>
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="menu d-flex column justify-content-start align-items-center">
                <div className="col">
                <a href="#"> <FontAwesomeIcon icon={faHome} />Home</a>
                </div>
            </div>
            <div className="menu d-flex column justify-content-start align-items-center">
                <div className="col">
                <a href="#"> <FontAwesomeIcon icon={faSearch} />Search</a>
                </div>
            </div>
            <div className="menu d-flex column justify-content-start align-items-center">
                <div className="col">
                <a href="#"> <FontAwesomeIcon icon={faBook} /> Your library</a>
                </div>
            </div>

            <div className="stick-to-bottom-index-page">
            <div className ="login-button-index" >
                <a href="login.html"><span>SIGN UP</span></a>
            </div>
            <div className ="login-button-index" >
                <a href="login.html"><span>LOGIN</span></a>
            </div>
            <div className="install-btn">
                <a href="#">
                <FontAwesomeIcon icon={faArrowCircleDown} /> Install</a>
            </div>
            </div>
            </div>
        </aside>
    );
}

export default AsideMenu;