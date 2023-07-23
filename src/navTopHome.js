import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const AppNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg primary-background navbar-padding">
      <a className="navbar-brand" href="#home">
        <img
          src="./img/logo.png"
          width="150"
          height="40"
          className="d-inline-block align-top border"
          alt="Logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#basic-navbar-nav"
        aria-controls="basic-navbar-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="basic-navbar-nav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link co-white font-600 link-space" href="#home">
              Careers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link co-white font-600 link-space" href="#about">
              Help
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link co-white font-600 link-space" href="#services">
              Currency
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link co-white font-600 link-space" href="#contact">
              Find a Location
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link co-white font-600" href="#contact">
              <button className='nav-btn'>SIGN IN / JOIN</button> {/* center with other content vertically */}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppNavbar;
