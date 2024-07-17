import React from 'react';

function Project(props) {
  return (
    <div className="text-center max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
      <a href="#">
        <img className="w-full h-48 object-cover" src={props.src} alt={props.alt} />
      </a>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <a href="#">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{props.name}</h3>
          </a>
          <p className="text-gray-700 dark:text-gray-400 mt-2">{props.description}</p>
        </div>
        <div className="mt-4">
          <a href="#" className="inline-flex items-center px-4 py-2 bg-blue-800 text-white text-sm font-medium rounded-full hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
            Read more
            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
