import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './File.css';

export default function File(props) {
  const [isTimelineVisible, setTimelineVisibility] = useState(false);

  const toggleTimeline = () => {
    setTimelineVisibility(!isTimelineVisible);
  };

  return (
    <div>
      <div className='File-desc'>
        <h1 className='File-Head'>{props.head}</h1>
        <p>{props.desc}</p>
        <div className='File-info'>
          <div>Judge Assigned: {props.judge}</div>
          <div>Filed by: {props.filer}</div>
          <button onClick={toggleTimeline}>
            {isTimelineVisible ? 'Hide Timeline' : 'Show Timeline'}
          </button>

          {/* New timeline div with conditional rendering based on button click */}
          {isTimelineVisible && (
            <div className='File-timeline'>
              <h2>Timeline</h2>
              <div className='timeline-line'></div>
              <ul>
                {props.timeline.map((event, index) => (
                  <li key={index}>
                    <div className='event-box'>
                      <span className='event-date'>{event.date}</span>
                      <span className='event-description'>{event.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

File.propTypes = {
  head: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  judge: PropTypes.string.isRequired,
  filer: PropTypes.string.isRequired,
  timeline: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
