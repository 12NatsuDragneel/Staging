const Carousel = () => {
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src="path-to-your-image-1.jpg" alt="Slide 1" />
          </div>
          <div>
            <img src="path-to-your-image-2.jpg" alt="Slide 2" />
          </div>
          <div>
            <img src="path-to-your-image-3.jpg" alt="Slide 3" />
          </div>
          <div>
            <img src="path-to-your-image-4.jpg" alt="Slide 4" />
          </div>
        </Slider>
      </div>
    );
  };
  
  export default Carousel;
  