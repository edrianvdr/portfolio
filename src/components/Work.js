import React from 'react';
import PropTypes from 'prop-types';

function Work({ src, alt, name, descriptionList, reverse }) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} max-w-full mx-auto text-white py-6`}>
      <div className="w-full md:w-1/2">
        <img className="w-full h-full object-cover" src={src} alt={alt} />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-bold">{name}</h3>
          <ul className="list-disc list-inside mt-2">
            {descriptionList.map((item, index) => (
              <li key={index} className="mt-1">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Define PropTypes for the Work component
Work.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  descriptionList: PropTypes.arrayOf(PropTypes.string).isRequired,
  reverse: PropTypes.bool,
};

// Set default props if needed
Work.defaultProps = {
  reverse: false,
};

export default Work;
