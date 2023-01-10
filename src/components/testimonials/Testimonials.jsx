import React from 'react';
import './Testimonials.css';
import {testimonyData} from '../../data/testimonialData'
import rightArrow from '../../assets/arrow-right.png';
import leftArrow from '../../assets/arrow-left.png';
import { useState } from 'react';
import {motion} from "framer-motion";
function Testimonials() {
    const transition ={type: "spring", duration: 3};
    const [selected, setSelected] = useState(0);
    const tesLength = testimonyData.length;
  return (
    <div className="testimonies" id='testimonies'>
        <div className="left-side">
            <span>Testimonials</span>
            <span className='hollow-text'>What Clients</span>
            <span>Say About Us</span>
            <motion.span
            key={selected}
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x:0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            >
                {testimonyData[selected].review}
            </motion.span>
            <span>
                <span style={{color: 'var(--deeporange)'}}>{testimonyData[selected].name}</span> {" "}
                 - {testimonyData[selected].status}
            </span>
        </div>
        <div className="right-side">
            <motion.div
            initial={{opacity: 0, x: -100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
            ></motion.div>
            <motion.div
            initial={{opacity: 0, x: 100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
            ></motion.div>
            <motion.img
            key={selected}
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x:0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            src={testimonyData[selected].image} alt=''/>
            <div className='arrows-icon'>
                <img 
                onClick={() => {
                    selected=== 0 ? setSelected(tesLength - 1)
                    :setSelected((prev)=> prev - 1);
                }}
                src={leftArrow} alt="" />
                <img
                onClick={() => {
                    selected === tesLength -1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
                }}
                 src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials;