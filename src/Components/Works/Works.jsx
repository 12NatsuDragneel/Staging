import React from 'react';
import Slider from 'react-slick';
import './Works.css'; // Make sure the CSS imports are included here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';



function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="Works2Btn2" onClick={onClick}>
      <span className='arrow-right'>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="Works2Btn1" onClick={onClick}>
      <span className='arrow-left'>
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
    </button>
  );
}

function Works() {
  const images = [
    "./Images/project-1.jpeg",
    "./Images/project-2.jpeg",
    "./Images/project-3.jpeg",
    "./Images/project-4.jpeg",
    "./Images/project-2.jpeg",
  ];
  
  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 200, // Slide transition speed
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll per click
    nextArrow: <SampleNextArrow />, // Custom next arrow
    prevArrow: <SamplePrevArrow />, // Custom previous arrow
    responsive: [
      {
        breakpoint: 500, // At 500px or below
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // At 480px or below
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Works1">
      <div className="Works11">
        <sup>OUR WORKS</sup>
        <h1>LATEST PROJECTS</h1>
      </div>
      <div className="Works2-container">
        <Slider {...settings} className='works2Slider'>
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image} alt={`Project ${index + 1}`} className='works2pImg' />
              <div className="works2p">
                <sup>INTERIORS</sup>
                <p>LOWER RIVER STREET ASTORIA</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Works;
