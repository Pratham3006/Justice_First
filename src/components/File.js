import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './File.css';

export default function File(props) {
  const [isTimelineVisible, setTimelineVisibility] = useState(false);
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventDescription, setNewEventDescription] = useState('');
  const [timeline, setTimeline] = useState(props.timeline);

  const toggleTimeline = () => {
    setTimelineVisibility(!isTimelineVisible);
  };

  const handleNewEventDateChange = (event) => {
    setNewEventDate(event.target.value);
  };

  const handleNewEventDescriptionChange = (event) => {
    setNewEventDescription(event.target.value);
  };

  const addNewEvent = () => {
    if (newEventDate.trim() !== '' && newEventDescription.trim() !== '') {
      const updatedTimeline = [...timeline, { date: newEventDate, description: newEventDescription }];
      setTimeline(updatedTimeline);
      setNewEventDate('');
      setNewEventDescription('');
    }
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
                {timeline.map((event, index) => (
                  <li key={index}>
                    <div className='event-box'>
                      <span className='event-date'>{event.date} </span>
                      <span className='event-description'>{event.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div>
                <input style={{height:"30px",marginRight:"10px"}} type="date" value={newEventDate} onChange={handleNewEventDateChange} placeholder="YY-MM-DD" />
                <input style={{height:"30px",marginRight:"10px",width:"400px"}} type="text" value={newEventDescription} onChange={handleNewEventDescriptionChange} placeholder="Description" />
                <button style={{background:"blue",padding:"6px",color:"white",borderRadius:"6px"}} onClick={addNewEvent}>Add New Event</button>
              </div>
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
