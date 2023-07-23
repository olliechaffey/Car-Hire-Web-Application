import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const SecondNav = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
              <div className='col-lg-2 px-0 bord'>
                  <a href='#' className='nav-link font-500 accent-background padding-second'>Hire a Car</a>
              </div>
              <div className='col-lg-2 px-0 bord'>
                  <a href='#' className='nav-link font-500 accent-background padding-second'>Hire a Van</a>
              </div>
              <div className='col-lg-2 px-0 bord'>
                  <a href='#' className='nav-link font-500 accent-background padding-second'>Car Club</a>
              </div>
              <div className='col-lg-2 px-0 bord'>
                  <a href='#' className='nav-link font-500 accent-background padding-second'>Locations</a>
              </div>
              <div className='col-lg-2 px-0 bord'>
                  <a href='#' className='nav-link font-500 accent-background padding-second'>For Business</a>
              </div>
              <div className='col-lg-2 px-0'>
                  <a href='#' className='nav-link font-500 accent-background padding-second'>Learn</a>
              </div>
        </div>
    </div>
  );
};

export default SecondNav;
