import './Custom.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Custom(props) {
  return (
    <>
        <div className='custom-title'>
          <h1>Custom order</h1>
        </div>
      <div className="custom-everything">
        <div className='custom-body'>
        </div>

        <div className='custom-bg'></div>

        </div>
        <div className='view-products-btn-container'>
          <Link to="/">
            <div className='view-products-btn'>
              <button>VIEW PRODUCTS</button>
            </div>
          </Link>
        </div>
    </>
  );
};