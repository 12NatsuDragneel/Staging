import React, { useState, useRef } from 'react'; 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testi.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import TestimonialImage from './TestimonialImage';

const Testimonial = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        "Images/ta-1.png",
        "Images/ta-2.png",
        "Images/ta-3.png",
        "Images/ta-4.png",
        "Images/ta-5.png",
        "Images/ta-1.png",
        "Images/ta-2.png",
        "Images/ta-3.png",
        "Images/ta-4.png",
        "Images/ta-5.png"
    ];

    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,  // Default setting
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        autoplay: false,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex % 5);  // Map to values between 0 and 4
        },
        touchMove: true,
        draggable: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,    // For screens up to 1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: true,
                    centerPadding: '0'
                }
            },
            {
                breakpoint: 768,     // For screens up to 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: true,
                    centerPadding: '0'
                }
            },
            {
                breakpoint: 480,     // For screens up to 480px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: true,
                    centerPadding: '0'
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
        <div className="Testimonial11">
            <sup>
                TESTIMONIALS
            </sup>
            <h2>WHAT YOUR CLIENTS SAY</h2>
        </div>
            <div className="Testimonial2">
                <button className='TestimonialPrev' onClick={handlePrev}>
                    <FontAwesomeIcon icon={faAngleLeft} className="Testimonial2Icon" />
                </button>
                <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.7rem' }}>
                    "{currentSlide + 1}. Fast and accurate at solving mental math problems involving addition,
                    subtraction, multiplication, division and percentages but without high-level
                    skills that might be required in jobs requiring complex calculation and
                    analysis.”
                </p>
                <button className='TestimonialNext' onClick={handleNext}>
                    <FontAwesomeIcon icon={faAngleRight} className="Testimonial2Icon" />
                </button>
            </div>
            <div style={{ width: '45%',height: '40%', margin: '0 auto' }} className='TSL1'>
                <Slider ref={sliderRef} {...settings} className='TSld'> 
                    {images.map((src, index) => (
                        <div key={index} className='TSlider'>
                            <img
                                src={src}
                                alt={`Client ${index + 1}`}
                                style={{
                                    width: '100%',
                                    maxHeight: '3rem',
                                    objectFit: 'contain',
                                    transition: 'transform 0.3s ease',
                                    overflow:  'visible',
                                    transform: currentSlide === (index % 5) ? 'scale(3.2)' : 'scale(1.5)', // Corrected scaling condition
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <TestimonialImage />
        </div>
    );
};

export default Testimonial;
