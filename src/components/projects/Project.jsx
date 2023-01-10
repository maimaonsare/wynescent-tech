import React from 'react';
import './Project.css';
import Project1 from '../../assets/ui-design.png';
import Project2 from '../../assets/graphics.png';
import Project3 from '../../assets/responsive.png';
import Project4 from '../../assets/web.png';
import TickIcon from '../../assets/ticks-icon.png';
import Partner1 from '../../assets/ologogo.png';
import Partner2 from '../../assets/vdpartner.png';
import Partner3 from '../../assets/webdesign.png';


function Project() {
  return (
    <div className="projects" id='projects'>
        <div className='left-prj'>
            <img src={Project4} alt=''/>
            <img src={Project2} alt=''/>
            <img src={Project3} alt=''/>
            <img src={Project1} alt=''/>
        </div>
        <div className="right-prj">
            <span>The Incentives</span>
            <div>
              <span className='hollow-text'>Why</span>
              <span> Choose Us?</span>
            </div>
            <div className='details-right'>
              <div>
                <img src={TickIcon} alt=''/>
                <span>20+ Web Designs to choose from + Free Consultation</span>
              </div>
              <div>
                <img src={TickIcon} alt=''/>
                <span>Discount for first Order & Repeat Customers</span>
              </div>
              <div>
                <img src={TickIcon} alt=''/>
                <span>Domain Registration on Behalf of Clients</span>
              </div>
            </div>
            <div className='partners'>
            <span>
              Our Partners
              </span>
              <div>
              <img src={Partner1} alt=''/>
              <img src={Partner2} alt=''/>
              <img src={Partner3} alt=''/>
              </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Project;