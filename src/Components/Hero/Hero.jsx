import React, { useEffect, useState } from 'react';
import './Hero.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faInstagram,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import 'animate.css';
import { Link } from 'react-router-dom';

library.add(faAngleRight, faAngleLeft);

function Hero() {
  const [animationClass, setAnimationClass] = useState('');
  const [numb1,setNumb1] = useState('1');
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('animate__animated animate__backInRight');
      setNumb1('2');
      setTimeout(() => {
      setAnimationClass('');
      }, 1000);
 // Duration of the animation
    }, 5000); // Interval of 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
   
      setNumb1('1');
     
 
    }, 10000); // Interval of 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <div id='Hero'>
      <div className="Hero1">
        <div className='Hero11'>
          <button className='angelLeft'><FontAwesomeIcon icon={faAngleLeft} className='text-2xl' /></button>
          <div className={`Hero14 ${animationClass}`}><p className='Hero12' >QUALITY IS NOT ONLY OUR STANDARD. </p> <div className="Hero15">  <button className='text-lg'>See Project</button> </div> </div>
          <button className='angelRight'><FontAwesomeIcon icon={faAngleRight} className='text-2xl ' /></button>
        </div>
        <div className="Hero16">
      <p > {numb1} <button className='Hero16Btn'></button> 2 </p>
      <Link to={'/'}>Discover more   </Link>
      <div className="Hero161">
     <Link to={'/'}> <FontAwesomeIcon icon={faFacebookF} className='text-white'/> </Link>
     <Link to={'/'}> <FontAwesomeIcon icon={faTwitter} className='text-white'/> </Link>
     <Link to={'/'}> <FontAwesomeIcon icon={faInstagram} className='text-white'/> </Link>
     <Link to={'/'}> <FontAwesomeIcon icon={faLinkedinIn} className='text-white'/> </Link>
      </div>
        </div>
       
      </div>
      
    </div>
  );
}

export default Hero;
