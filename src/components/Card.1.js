import React from 'react';

function Card(props) {
  return (
    <div className="w-full p-2 text-center">
      <div className="flex flex-col h-full max-w-xl mx-auto text-white bg-blue-800 border border-blue-800 rounded-lg hover:bg-white hover:text-blue-800">
        <div className="flex-shrink-0 h-48 flex items-center justify-center">

          <img 
            src={props.src} 
            alt={props.alt} 
            className="max-h-full max-w-full object-cover" 
          />
        </div>
        <div className="flex-1 p-4 flex flex-col">
          <h3 className="mb-2 text-xl font-bold tracking-tight">
            {props.title}
          </h3>
          <p className="text-sm flex-grow">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
