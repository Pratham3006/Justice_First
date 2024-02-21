// src/components/ReleaseNotes.js
import React from 'react';
import './ReleaseNotes.css';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCog, faStar } from '@fortawesome/free-solid-svg-icons';

const releaseNotesData = [
  {
    "month": "June 2023",
    "notes": [
      { "id": 1, "description": "Started building the basic website using HTML and CSS." },
      { "id": 2, "description": "Experimented with initial design concepts." },
      { "id": 3, "description": "Researched potential technologies for future development phases." },
      { "id": 4, "description": "Outlined project roadmap and milestones." }
    ]
  },
  {
    "month": "July 2023",
    "notes": [
      { "id": 5, "description": "Integrated React.js into the project." },
      { "id": 6, "description": "Developed interactive user interfaces for improved user experience." },
      { "id": 7, "description": "Explored various frontend libraries for additional functionality." },
      { "id": 8, "description": "Refined project scope based on initial prototype feedback." }
    ]
  },
  {
    "month": "August 2023",
    "notes": [
      { "id": 9, "description": "Implemented classifier algorithms for enhanced functionality." },
      { "id": 10, "description": "Optimized website performance for faster loading times." },
      { "id": 11, "description": "Researched and tested different machine learning models for future enhancements." },
      { "id": 12, "description": "Explored options for integrating AI components into the project." }
    ]
  },
  {
    "month": "September 2023",
    "notes": [
      { "id": 13, "description": "Implemented security measures and protocols." },
      { "id": 14, "description": "Conducted security audits to identify potential vulnerabilities." },
      { "id": 15, "description": "Reviewed and updated data encryption practices." },
      { "id": 16, "description": "Integrated authentication mechanisms for user access control." }
    ]
  },
  {
    "month": "October 2023",
    "notes": [
      { "id": 17, "description": "Collaborated with UI/UX designers to implement new UI design." },
      { "id": 18, "description": "Iterated on design iterations based on user feedback." },
      { "id": 19, "description": "Explored accessibility features for inclusivity." },
      { "id": 20, "description": "Reviewed and optimized UI/UX for mobile responsiveness." }
    ]
  },
  {
    "month": "November 2023",
    "notes": [
      { "id": 21, "description": "Enhanced specific components of the website based on feedback." },
      { "id": 22, "description": "Conducted user testing sessions to gather feedback." },
      { "id": 23, "description": "Refactored codebase for improved maintainability." },
      { "id": 24, "description": "Explored gamification elements for user engagement." }
    ]
  },
  {
    "month": "December 2023",
    "notes": [
      { "id": 25, "description": "Integrated external APIs to add new features." },
      { "id": 26, "description": "Explored partnerships for data integration." },
      { "id": 27, "description": "Conducted stress testing for API scalability." },
      { "id": 28, "description": "Optimized API calls for improved performance." }
    ]
  },
  {
    "month": "January 2024",
    "notes": [
      { "id": 29, "description": "Conducted testing and implemented bug fixes." },
      { "id": 30, "description": "Performed cross-browser compatibility testing." },
      { "id": 31, "description": "Optimized codebase for better SEO performance." },
      { "id": 32, "description": "Reviewed and updated documentation for future reference." }
    ]
  },
  {
    "month": "February 2024",
    "notes": [
      { "id": 33, "description": "Completed development of NLP model and backend using SQL." },
      { "id": 34, "description": "Conducted final user acceptance testing." },
      { "id": 35, "description": "Prepared project for deployment to production environment." },
      { "id": 36, "description": "Celebrated successful project completion with team members." }
    ]
  }
];


const ReleaseNotes = () => {
  return (
    <div className="release-notes-container">
      <h1 className="release-notes-title">
        <FontAwesomeIcon icon={faCog} className="icon" /> Release Notes
      </h1>
      {releaseNotesData.map((month) => (
        <div key={month.month} className="release-month">
          <h2 className="month-title">
          <FontAwesomeIcon icon={faCalendar} style={{ color: '#0000FF', marginRight: '10px' }} />{month.month}
          </h2>
          <ul className="release-notes-list">
            {month.notes.map((note) => (
              <li key={note.id} className="release-note-item">
                <FontAwesomeIcon icon={faStar} className="icon" /> {note.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ReleaseNotes;
