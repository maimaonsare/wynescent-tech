import React from 'react';
import { useRef } from 'react';
import './Join.css';

function Join() {
    
  return (
    <div className="join" id='join-us'>
        <div className="join-left">
            <hr />
            <div>
                <span className='hollow-text'>Start Your</span>
                <span> Web Presence</span>
            </div>
            <div>
                <span> Journey With</span>
                <span className='hollow-text'> Wynescent Tech</span>
            </div>
        </div>
        <div className="join-right">
            <form action='#' className="email-contact">
                <input type="email" name="user-email" placeholder='Enter Email'></input>
                <button className='btn-join'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Join;