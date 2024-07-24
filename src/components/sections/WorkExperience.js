import React, { useState } from 'react';
import Heading2 from '../../components/Heading2.1';
import Work from '../../components/Work';

// Images
import webDeveloperIntern from '../../assets/images/workExperience/Web Developer Intern.png';
import liveStreamingTechnician from '../../assets/images/workExperience/Live Streaming Technician.png';
import computerTrainer from '../../assets/images/workExperience/Computer Trainer.png';

const projects = [
  {
    name: 'Web Developer Intern',
    descriptionList: [
      'Worked with Jira',
      'Updated MySQL Database',
      'Designed with Tailwind CSS',
      'Developed backend functionalities using Laravel and Eloquent ORM',
      'Implemented and maintained accessibility features (Web Content Accessibility Guidelines)'
    ],
    src: webDeveloperIntern,
    alt: 'Edrian in front of his computer',
    href: 'https://github.com/edrianvdr/thesis',
  },
  {
    name: 'Live Streaming Technician',
    descriptionList: [
      'Collaborated with different professionals from different fields',
      'Managed social media of Elmer Francisco (Facebook Page)',
      'Oversaw and led operations in the technical side',
      'Applied advanced skills in OBS Studio to produce good audio and video quality on air',
      'Designed thumbnails and backdrops'
    ],
    src: liveStreamingTechnician,
    alt: 'Edrian holding the keyboard and a mouse with the OBS Studio opened on his computer',
    href: 'https://www.facebook.com/photo/?fbid=999193715547603&set=a.476389967827983',
  },
  {
    name: 'Computer Trainer',
    descriptionList: [
      'Trained over 50 students',
      'MS Office training',
      'Social media marketing training',
      'Digital content creation training using WordPress',
      'Led a team of computer trainers for learning material creation and implementation',
      'Enhanced and implemented curriculum to teach up-to-date technology'
    ],
    src: computerTrainer,
    alt: 'Edrian inserting a flash drive on the system unit with more computers at the background',
    href: 'https://www.facebook.com/photo/?fbid=154935961009183&set=a.100886209747492',
  },
];

const WorkExperience = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 2);
  };

  return (
    <>
      <Heading2 h2="Work Experience" />
      <div className="flex w-full sm:w-auto mx-auto grid gap-8 grid-cols-1">
        {projects.slice(0, visibleCount).map((project, index) => (
          <Work
            key={index}
            name={project.name}
            descriptionList={project.descriptionList}
            src={project.src}
            alt={project.alt}
            href={project.href}
            reverse={index % 2 !== 0} 
          />
        ))}
      </div>
      {visibleCount < projects.length && (
        <div className="text-center mt-4">
          <button
            onClick={loadMore}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-800 text-4xl font-medium rounded-full border hover:bg-blue-800 hover:text-white hover:border-white focus:outline-none focus:bg-blue-800 focus:text-white focus:border-white transition duration-300"
          >
            See More <span className="sr-only">Projects</span>
          </button>
        </div>
      )}
    </>
  );
};

export default WorkExperience;
