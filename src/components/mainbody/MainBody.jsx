import React from 'react';
import NumberCounter from 'number-counter';
import Header from '../header/Header';
import './mainBody.css';
import Design from "../../assets/designicon.png";
import MainImg from "../../assets/mobile.png";
import Swoosh from "../../assets/swoosh.png";
import Nodestat from "../../assets/design.png";

import {motion} from 'framer-motion';
const MainBody = () => {
    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true: false;
    return (
        <div className='main-body' id='main-body'>
            <div className='blur body-blur'></div>
            <div className='body-l'>
                <Header/>
            {/*Web design advert */}
                <div className='best-design-ad'>
                    <motion.div
                    initial={{left: mobile? "150px": "238px"}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>Best Web Designs for Your Company</span>
                </div>

            {/* Main body hearder text*/}
            <div className='body-text'>
                <div>
                    <span className='hollow-text'>Order</span>
                    <span> Today</span>
                </div>
                <div>
                    <span>We Design</span>
                    <span className='hollow-text'> It</span>
                </div>
                <div>
                    <span>Wynescent Web Creations offers you the best web Designs.
                        We deliver quality websites on budget, and according to your resuirements.
                    </span>
                </div>
            </div>

            {/*the statistics */}
            <div className='stats'>
                <div>
                    <span>
                        <NumberCounter end={50} start={30} delay='4' preFix="+"/>
                    </span>
                    <span>Happy Clients</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={20} start={10} delay='4' preFix="+"/>
                    </span>
                    <span>Hosted Websites</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={30} start={15} delay='4' preFix="+"/>
                    </span>
                    <span>Consultations</span>
                </div>
            </div>
            {/* Info buttons*/}
            <div className='info-buttons'>
                <button className='btn'>Order Now</button>
                <button className='btn'>Learn More</button>
            </div>
            </div>
            <div className='body-r'>
                <button className='btn'>Join Now</button>
                
                <motion.div
                initial={{right: "-4rem"}}
                whileInView={{right: "2rem"}}
                transition={transition}
                className='web-design'>
                    <img src={Design} alt="" className='web-img'/>
                    <span>Web Design</span>
                    <span>HTML & CSS</span>
                </motion.div>

                {/*right side images*/}
                <img src={MainImg} alt="" className='main-img' />
                <motion.img
                initial={{right: "11rem"}}
                whileInView={{right: "20rem"}}
                transition={transition}
                 src={Swoosh} alt="" className='swoosh-img'/>
                <motion.div
                initial={{right: "1rem"}}
                whileInView={{right: "16rem"}}
                transition={transition}
                 className='node-stat'>
                    <img src={Nodestat} alt=''/>
                    <div>
                    <span>Purely React</span>
                    <span> Website</span>
                    </div> 
                </motion.div>
            </div>
        </div>
    )
}
export default MainBody