import React from 'react';
import './Service.css';
import Arrows from '../../assets/arrow.png'

function Service() {
  return (
    <div className="services" id="services">
        <div className="service-header">
            <span>WordPress Design</span>
            <span className='hollow-text'>React Website</span>
            <span>Database Design</span>
        </div>
        <div className="service-category">
            <div className="category">
            <i class="fa fa-address-card" aria-hidden="true"></i>
                <span>Start with Wordpress</span>
                <span>Get a Wordpress website designed and hosted in a day.</span>
                <div className='subscribe'>
                    <span>Subcribe</span>
                    <img src={Arrows} alt='arrow' className='arrow'/>
                </div>
            </div>
            <div className="category">
            <i class="fa fa-area-chart" aria-hidden="true"></i>
                <span>React from Scratch</span>
                <span>Have a React website designed from scratch and hosted within a week.</span>
                <div className='subscribe'>
                    <span>Subcribe</span>
                    <img src={Arrows} alt='arrow' className='arrow'/>
                </div>
            </div>
            <div className="category">
            <i class="fa fa-balance-scale" aria-hidden="true"></i>
            <span>Need a Database</span>
            <span>All back-end is developed according to client specification.</span>
            <div className='subscribe'>
                    <span>Subcribe</span>
                    <img src={Arrows} alt='arrow' className='arrow'/>
                </div>
            </div>
            <div className="category">
            <i class="fa fa-balance-scale" aria-hidden="true"></i>
            <span>Training</span>
            <span>Web design training on HTML/CSS and React applications on the fly.</span>
            <div className='subscribe'>
                    <span>Subcribe</span>
                    <img src={Arrows} alt='arrow' className='arrow'/>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Service