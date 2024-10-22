import React from 'react';
import Slider from 'react-slick';
import './Works.css'; // Ensure this CSS file exists
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import project1 from './Images/project-1.jpeg';
import project2 from './Images/project-2.jpeg';
import project3 from './Images/project-3.jpeg';
import project4 from './Images/project-4.jpeg';

const images = [project1, project2, project3, project4, project2];

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
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Adjusted for medium devices
        settings: {
          slidesToShow: 2, // Show 2 slides at medium size
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
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
