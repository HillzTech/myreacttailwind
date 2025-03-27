import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Slider = () => {
  const images = [
    "/images/cchima1.jpg",
    "/images/cchima3.jpeg",
    "/images/chima2.jpeg",
    "/images/chima5.jpeg",
  
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentIndex, images.length]);

  return (
    <div className="container  md:hidden">
      <center>
        <div className="relative overflow-hidden w-full h-[300px] md:w-[420px]">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : ''
              }`}
            >
              <img
                src={src}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <ChevronLeft className="h-6 w-6 text-black" />
          </button>
          <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <ChevronRight className="h-6 w-6 text-black" />
          </button>
        </div>
      </center>
    </div>
  );
};

export default Slider;
