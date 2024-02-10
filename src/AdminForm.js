import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AdminForm.css';

export default function AdminForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    head: '',
    desc: '',
    judge: '',
    filer: '',
    events: [{ date: '', description: '' }], // Initial array with one event
  });

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    if (name === 'date' || name === 'description') {
      const updatedEvents = [...formData.events];
      updatedEvents[index][name] = value;
      setFormData((prevData) => ({
        ...prevData,
        events: updatedEvents,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleAddEvent = () => {
    setFormData((prevData) => ({
      ...prevData,
      events: [...prevData.events, { date: '', description: '' }],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    // Reset form fields after submission
    setFormData({
      head: '',
      desc: '',
      judge: '',
      filer: '',
      events: [{ date: '', description: '' }], // Reset events to initial state
    });
  };

  return (
    <div className='admin-form-container'>
      <h2>Add a New Case</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="head">Head</label>
          <input
            type="text"
            className="form-control"
            id="head"
            name="head"
            value={formData.head}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="judge">Judge</label>
          <input
            type="text"
            className="form-control"
            id="judge"
            name="judge"
            value={formData.judge}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="filer">Filer</label>
          <input
            type="text"
            className="form-control"
            id="filer"
            name="filer"
            value={formData.filer}
            onChange={handleChange}
            required
          />
        </div>
        {/* Render event fields */}
        {formData.events.map((event, index) => (
          <div key={index}>
            <div className="form-group">
              <label htmlFor={`event-date-${index}`}>Event Date</label>
              <input
                type="date"
                className="form-control"
                id={`event-date-${index}`}
                name="date"
                value={event.date}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`event-description-${index}`}>Event Description</label>
              <input
                type="text"
                className="form-control"
                id={`event-description-${index}`}
                name="description"
                value={event.description}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </div>
          </div>
        ))}
        {/* Button to add more events */}
        <button type="button" className="btn btn-primary" onClick={handleAddEvent} style={{marginRight:"10px",backgroundColor:"green"}}>Add Event</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

AdminForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
