import React, { useState, useRef } from 'react';
import './Slideshow.css';
import slide1 from '../../images/slide3.jpg';
import slide2 from '../../images/slide1.jpg';
import slide3 from '../../images/slide2.jpg';
import slide4 from '../../images/slide4.jpg';
import slide5 from '../../images/slide5.jpg';

const slides = [slide1, slide2, slide3, slide4, slide5];
const delay = 5000;

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const resetTimeout = () => { 
    if (timeoutRef.current) { 
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <img
            className="slide"
            key={index}
            src={slide}
          ></img>
        ))}
      </div>

      {/*<div className="slideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>*/}
    </div>
  );
}
export default Slideshow

