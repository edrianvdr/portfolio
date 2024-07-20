import React from 'react';

function SkillCard(props) {
  return (
    <div className="max-w-xs mx-auto">
      <div className="relative group max-w-sm bg-white border border-blue-800 rounded-lg shadow text-center p-1">
        <div className="w-24 h-24 mx-auto overflow-hidden rounded-full">
          <img 
            src={props.src} 
            alt={props.skill} 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-blue-800 bg-opacity-0 group-hover:bg-opacity-80 group-focus:bg-opacity-80 transition duration-300">
          <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300">
            {props.skill}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
