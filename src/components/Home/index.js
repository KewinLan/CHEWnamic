import './Home.scss';

export default function Home() {
  return (
    <>
    <div className='first-row'>
      <div className='home-main-title-area'>
        <div className='main-title'>
          Gum that changes flavour <br></br>as you chew
        </div>
        <div className='home-custom-made-btn1'>
          <button>Custom-made flavours</button>
        </div>
        <div className='home-about-us-btn1'>
          <button>About us</button>
        </div>
      </div>
      <div className='home-products-area-top'>
        <div className='gum-images-row1'>
          <div className="banana-cherry-img-link">
            <img src="images/Banana_to_Cherry1.png" className="banana-cherry-img" alt="Orange Mango Bottle" width="340" height="260" />
          </div>
          <div className="peppermint-lemon-img-link">
            <img src="images/Pepperm_to_Lemon1.png" className="peppermint-lemon-img" alt="Apple Strawberry Bottle" width="340" height="260" />
          </div>
          <div className="raspberry-peppermint-img-link">
            <img src="images/Rasp_to_Pepperm1.png" className="raspberry-peppermint-img" alt="Mango Strawberry Bottle" width="340" height="260" />
          </div>
        </div>
        <div className='names-of-gum-row1'>
          <div className='banana-cherry-label'>
            Banana to Cherry
          </div>
          <div className='peppermint-lemon-label'>
            Peppermint to Lemon
          </div>
          <div className='raspberry-peppermint-label'>
            Raspberry to Peppermint
          </div>
        </div>
        <div className='home-explore-btns'>
          <div className='home-explore-btn1'>
            <button>Explore</button>
          </div>
          <div className='home-explore-btn2'>
            <button>Explore</button>
          </div>
          <div className='home-explore-btn3'>
            <button>Explore</button>
          </div>
        </div>
        
      </div>
    </div>
      <div className='gum-images-row2'>      
        <div className="cherry-lemon-img-link">
          <img src="images/Cherry_to_Lemon1.png" className="cherry-lemon-img" alt="Apple Grape Bottle" width="340" height="260" />
        </div>
        <div className="banana-peppermint-img-link">
          <img src="images/Banana_to_Pepperm1.png" className="banana-peppermint-img" alt="Grape Strawberry Bottle" width="340" height="260" />
        </div>
        <div className="peppermint-cherry-img-link">
          <img src="images/Pepperm_to_Cherry1.png" className="peppermint-cherry-img" alt="Grape Strawberry Bottle" width="340" height="260" />
        </div>
      </div>
      <div className='names-of-gum-row2'>
        <div className='cherry-lemon-label'>
          Cherry to Lemon
        </div>
        <div className='banana-peppermint-label'>
          Banana to Peppermint
        </div>
        <div className='peppermint-cherry-label'>
          Peppermint to Cherry
        </div>
      </div>
      

      <div className='add-to-cart-btn-container'>
        
        <div className='add-to-cart-btn4'>
          <button>Add to Cart</button>
        </div>
        <div className='add-to-cart-btn5'>
          <button>Add to Cart</button>
        </div>
        <div className='add-to-cart-btn6'>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
};