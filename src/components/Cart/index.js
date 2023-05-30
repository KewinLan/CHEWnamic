import React from 'react';
import './Cart.scss';

export default function Cart() {
  return (
    <div className='cart-everything'>
      <div className='cart-title'>
        <h1>Cart (6 items)</h1>
      </div>
      <div className='cart-product-names'>
        <div className='cart-product-name1'>
          <p>Peppermint to Lemon</p>
        </div>
        <div className='cart-product-name2'>
          <p>Banana to Peppermint</p>
        </div>
        <div className='cart-product-name3'>
          <p>Cherry to Lemon</p>
        </div>
      </div>
      <div className='cart-carousel'>
        <div className='cart-carousel-l-arrow'>
          <img src="images/L-arrow.png" className="cart-carousel-l-arrow-class" alt="Previous" width="26" height="42" />
        </div>
        <div className='cart-carousel-item1'>
          <div className='cart-carousel-item1-img'>
            <img src="images/Pepperm_to_Lemon1.png" className="cart-carousel-item1-img-class" alt="Peppermint to Lemon" width="332" height="261" />
          </div>
          <div className='cart-carousel-item1-info'>
            <div className='cart-carousel-item1-info-price'>
              <p>$1.99</p>
            </div>
            <div className='cart-carousel-item1-info-qty'>
              <p>Quantity: 1</p>
            </div>
            <div className='cart-carousel-item1-info-minus'>
              <button>-</button>
            </div>
            <div className='cart-carousel-item1-info-plus'>
              <button>+</button>
            </div>
            <div className='cart-carousel-item1-info-rm'>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className='cart-carousel-r-arrow'></div>
      </div>
    </div>
  );
};