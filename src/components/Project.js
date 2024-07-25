import React from 'react';
import PropTypes from 'prop-types';

function Project({ href, src, alt, name, description }) {
  return (
    <a href={href} className="p-2 border-2 hover:border-blue-800 focus:border-blue-800 focus:outline-none">
      <div className="text-center max-w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
        <img className="w-full h-64 object-cover" src={src} alt={alt} />
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
            <p className="text-gray-700 dark:text-gray-400 mt-2">{description}</p>
          </div>
          <div className="mt-4">
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-4 py-2 bg-blue-800 text-white border text-sm font-medium rounded-full hover:bg-white hover:text-blue-800 hover:border-blue-800 focus:outline-none focus:bg-white focus:text-blue-800 focus:border-blue-800"
              aria-label={`View ${name}`}
            >
              View <span className="sr-only">{name}</span>
              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </a>
  );
}

Project.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;
