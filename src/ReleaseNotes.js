// src/components/ReleaseNotes.js
import React from 'react';
import './ReleaseNotes.css';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCog, faStar } from '@fortawesome/free-solid-svg-icons';

const releaseNotesData = [
  {
    month: 'January 2023',
    notes: [
      { id: 1, description: 'Feature A added.' },
      { id: 2, description: 'Bug fix in Component B.' },
      { id: 3, description: 'Performance optimization in Module C.' },
      { id: 4, description: 'Security update for Feature D.' },
    ],
  },
  {
    month: 'February 2023',
    notes: [
      { id: 5, description: 'New UI design implemented.' },
      { id: 6, description: 'Enhancements to Component E.' },
      { id: 7, description: 'API integration for Feature F.' },
      { id: 8, description: 'Bug fixes and stability improvements.' },
    ],
  },
  {
    month: 'March 2023',
    notes: [
      { id: 9, description: 'Introduction of Feature G.' },
      { id: 10, description: 'Compatibility fixes for Browser H.' },
      { id: 11, description: 'User authentication updates.' },
      { id: 12, description: 'Localization support for Module I.' },
    ],
  },{
    month: 'April 2023',
    notes: [
      { id: 9, description: 'Introduction of Feature G.' },
      { id: 10, description: 'Compatibility fixes for Browser H.' },
      { id: 11, description: 'User authentication updates.' },
      { id: 12, description: 'Localization support for Module I.' },
    ],
  }
  // Add more months and notes as needed.
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
