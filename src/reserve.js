import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const SecondNav = () => {
  return (
    <div className='container-fluid px-0 position-relative'>
      <img
        src='./img/car.png'
        alt='Image'
        className='img-fluid'
        style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
      />
      <div className='position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100'>
        <div className='cus-card p-4'>
          <div className='d-flex align-items-center'>
            <h2 className='title header-res'>Reserve a Vehicle</h2>
            <p className='m-title'><span className='small-text'>or </span><a href='#' className='primary-co font-400'>View/Modify/Cancel Reservation</a></p>
          </div>
          <div className=''>
            {/* Input box with text above it */}
            <div className='form-group d-flex flex-column align-items-start position-relative'>
              <label htmlFor='inputBox' className='label-res'>
                Pick-up & Return Location (Postal Code, City or Airport)
              </label>
              <input type='text' className='form-control input-box' id='inputBox' placeholder='Provide a Location'/>
              <span className='required-field-text'>* Required Field</span>
            </div>

            {/* Checkbox with text alongside it */}
            <div className='form-check checkbox-res'>
              <input type='checkbox' className='form-check-input tick-box' id='checkBox' />
              <label className='form-check-label d-flex flex-column align-items-start' htmlFor='checkBox'><p className='checkbox-font'>Return to a different location</p></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondNav;
