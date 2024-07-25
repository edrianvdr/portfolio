import React from 'react';
import PropTypes from 'prop-types';

function Card({ src, alt, title, description }) {
  return (
    <div className="w-full text-center">
      <div className="flex flex-col h-full max-w-xl mx-auto py-2 bg-white border border-blue-800 rounded-lg shadow hover:bg-blue-800 hover:text-white">
        <div className="flex-shrink-0 h-48 flex items-center justify-center">
          <img 
            src={src} 
            alt={alt} 
            className="max-h-full max-w-full object-cover" 
          />
        </div>
        <div className="flex-1 p-4 flex flex-col">
          <h3 className="mb-2 text-xl font-bold tracking-tight">
            {title}
          </h3>
          <p className="text-sm flex-grow">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
