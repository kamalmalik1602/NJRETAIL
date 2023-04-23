import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index, images.length]);

  return (
    <div className="slider">
      {images.map((image, i) => (
        <div
          className={`slide ${i === index ? 'active' : ''}`}
          key={image.id}
        >
            <div className="centered">
            <h3 class="sub-heading common-text-animation" data-scroll="in">Welcome to</h3>
            <h2 class="heading-text common-text-animation" data-scroll="in">NJ Retail court</h2>
            <div class="col-lg-12"><fieldset><button type="submit" id="form-submit" class="main-button-1 ">Send Message Now</button></fieldset></div>
            </div>
          <img className="mg" src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;

