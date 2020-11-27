import React from 'react';

import '../styles/login.css';
// import '../styles/styles.css';

import logo from '../assets/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';
// import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
// import { faGoogle } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return(
        <>
        <section className="container-fluid position-relative">
      <div className="login-logo">
        <a href="index.html"><img src={logo} /></a>
      </div>
      <div className="login-container">
        <span> To continue, log in to Spotify.</span>
        <div className="login-button login-facebook">
        {/*<FontAwesomeIcon icon={faFacebook} />*/}
          <span>CONTINUE WITH FACEBOOK</span>
        </div>
        <div className="login-button login-apple">
        {/*<FontAwesomeIcon icon={faAppleAlt} />*/}
          <span>CONTINUE WITH APPLE</span>
        </div>
        <div className="login-button login-google">
        {/*<FontAwesomeIcon icon={faGoogle} />*/}
          <span>CONTINUE WITH GOOGLE</span>
        </div>
        <div className="d-flex flex-row">
          <hr />
          OR
          <hr />
        </div>
        <div className="input-group">
          <span>Email address or Username</span>
          <input placeholder="Email address or username" />
          <span>Password</span>
          <input placeholder="Password" type="password" />
        </div>
        <p>
          <a className="forgot-password" href="#">Forget your password?</a>
        </p>
        <div className="login-btn">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" for="customCheck1">Remember Me</label>
          </div>

         {/* <!-- <div>
            <i className="fa fa-check-square fa-lg"></i>
            <span className="ml-2">Remember me</span>
         </div> -->*/}

          <div href="#" className="login-button login-spotify">LOG IN</div>
        </div>
        <hr />
        <div className="login-footer">
          <span>Don't have an account?</span>
          <div className="login-button login-signup">
            <span>SIGN UP ON SPOTIFY</span>
          </div>
        </div>
      </div>
    </section>
        </>
    );
}

export default Login;