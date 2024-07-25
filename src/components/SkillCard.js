import React from 'react';
import PropTypes from 'prop-types';

function SkillCard(props) {
  return (
    <div className="max-w-[150px] mr-1 mb-1">
      <div className="relative group bg-white border border-blue-800 rounded-lg shadow text-center p-2">
        <div className="w-20 h-20 mx-auto overflow-hidden rounded-full">
          <img 
            src={props.src} 
            alt={props.skill} 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-blue-800 bg-opacity-0 group-hover:bg-opacity-80 group-focus:bg-opacity-80 transition duration-300">
          <span className="text-white text-sm font-bold opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300">
            {props.skill}
          </span>
        </div>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  src: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

export default SkillCard;
