import React from 'react';

function Work({ src, alt, name, descriptionList, href, reverse }) {
  return (
    <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} max-w-full mx-auto text-white h-full`}>
      <img className="w-1/2 h-full object-cover" src={src} alt={alt} />
      <div className="flex-1 p-6 flex flex-col justify-between">
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

export default Work;
