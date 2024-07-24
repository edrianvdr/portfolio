import React from 'react';

function Project(props) {
  return (
    <div className="text-center max-w-fulll mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
      <img className="w-full h-64 object-cover" src={props.src} alt={props.alt} />
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{props.name}</h3>
          <p className="text-gray-700 dark:text-gray-400 mt-2">{props.description}</p>
        </div>
        <div className="mt-4">
          <a 
            href={ props.href } 
            target="_blank" 
            rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-blue-800 text-white text-sm font-medium rounded-full hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            aria-label={`View ${props.name}`}
            title={`View ${props.name}`}
          >
            View <pre className="sr-only">{ props.name } </pre>
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
