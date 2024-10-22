import React, { useState, useRef } from 'react';
import './TestimonialImage.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function TestimonialImage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "Images/logo-1.png",
    "Images/logo-2.png",
    "Images/logo-3.png",
    "Images/logo-4.png",
    "Images/logo-5.png",
 
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0',
    autoplay: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex); // Use newIndex directly
    },
    touchMove: true,
    draggable: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className='Testimonial1'>
     
      <div style={{ width: '90%', height: '50%', margin: '4rem auto' }} className='TSL2'>
        <Slider ref={sliderRef} {...settings} className='TSld2'>
          {images.map((src, index) => (
            <div key={index} className='TSlider1'>
              <img
                src={src}
                alt={`Client ${index + 1}`}
                style={{
                  width: '100px',
                  maxHeight: '2.5rem',
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease',
                  overflow: 'visible',
                  // transform: currentSlide === index ? 'scale(3.2)' : 'scale(1.5)',
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialImage;
