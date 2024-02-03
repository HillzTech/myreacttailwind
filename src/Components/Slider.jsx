import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';


const Slider = () => {
  const images = [
    'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/46505/swiss-shepherd-dog-dog-pet-portrait-46505.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/12875518/pexels-photo-12875518.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/18136224/pexels-photo-18136224/free-photo-of-sitting-caucasian-shepherd-dog.jpeg?auto=compress&cs=tinysrgb&w=400',
    
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
    <div className="container mx-auto mt-8 ">
     <center>
     <div className="relative overflow-hidden w-[370px] h-[400px] md:w-[420px]h-[450px]">
        {images.map((url, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : ''
            }`}
          >
            <img src={url} alt={`Photo ${index + 1}`} className="w-full h-full object-cover md:w-[420px]h-[450px] md:w-[450px]h-[450px]" />
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
