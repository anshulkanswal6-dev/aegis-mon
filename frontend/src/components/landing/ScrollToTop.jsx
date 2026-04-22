import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isVisible && (
        <div className="relative group">
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 whitespace-nowrap bg-black text-white text-xs py-2 px-4 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Return to Top
            {/* Tooltip arrow */}
            <div className="absolute top-full right-5 -mt-1 border-4 border-transparent border-t-black"></div>
          </div>

          <div
            onClick={scrollToTop}
            className="bg-black text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-gray-900 transition-all duration-300 flex items-center justify-center"
          >
            <FaArrowUp className="text-xl group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
