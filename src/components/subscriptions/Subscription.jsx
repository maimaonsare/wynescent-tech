import React from 'react';
import './Subscription.css';
import checksImg from '../../assets/check-white.png';
import arrows from '../../assets/arrow.png';

function Subscription() {
  return (
    <div className="subscription" id='subscription'>
      <div className="blur subscr-blur-1"></div>
        <div className="blur subscr-blur-2"></div>
        <div className="subscription-header">
            <span className='hollow-text'>Our Subscription</span>
            <span> Plans Suited</span>
            <span className='hollow-text'> For Your Business</span>
        </div>
        <div className='plans'>
          <div className='plan'>
          <i class="fa fa-balance-scale" aria-hidden="true"></i>
            <span>Static Web</span>
            <span>$ 149</span>
            <div className="features">
              <div className="feature">
                <span><img src={checksImg} alt="check" />3 Web Pages</span>
                <span><img src={checksImg} alt="check" />Responsive</span>
                <span><img src={checksImg} alt="check" />Contact Form</span>
              </div>
              <span>See more details <img src={arrows} alt='' /></span>
            </div>
            <button className='btn'>Buy Now</button>
          </div>

          <div className='plan'>
          <i class="fa fa-area-chart" aria-hidden="true"></i>
            <span>Dynamic Web</span>
            <span>$ 350</span>
            <div className="features">
              <div className="feature">
                <span><img src={checksImg} alt="check" />7 Web Pages</span>
                <span><img src={checksImg} alt="check" />Responsive</span>
                <span><img src={checksImg} alt="check" />Backend</span>
              </div>
              <span>See more details <img src={arrows} alt='' /></span>
            </div>
            <button className='btn'>Buy Now</button>
          </div>

          <div className='plan'>
          <i class="fa fa-address-card" aria-hidden="true"></i>
            <span>Premium Web</span>
            <span>$ 550</span>
            <div className="features">
              <div className="feature">
                <span><img src={checksImg} alt="check" />8-15 Web Pages</span>
                <span><img src={checksImg} alt="check" />Responsive</span>
                <span><img src={checksImg} alt="check" />Back-end + Integration</span>
              </div>
              <span>See more details <img src={arrows} alt='' /></span>
            </div>
            <button className='btn'>Buy Now</button>
          </div>
        </div>
    </div>
  )
}

export default Subscription;