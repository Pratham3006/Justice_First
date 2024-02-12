import React, { useState } from "react";
import PropTypes from "prop-types";
import "./File.css";
import { convertDate } from "../utils";

export default function File(props) {
  const [isTimelineVisible, setTimelineVisibility] = useState(false);
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");
  const [timelines, setTimelines] = useState(props.timelines);
  const [isAddingEvent, setIsAddingEvent] = useState(false);

  const toggleTimeline = () => {
    setTimelineVisibility(!isTimelineVisible);
  };

  const toggleEdit = () => {
    setIsAddingEvent((prevState) => !prevState);
  };

  const handleSubmit = () => {
    const requestObj = {
      pil_id: props.id,
      date: newEventDate,
      event: newEventDescription,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestObj),
    };

    fetch(`http://localhost:5000/pils/add-timeline`, requestOptions);
    setIsAddingEvent(false);
  };

  const handleNewEventDateChange = (event) => {
    setNewEventDate(event.target.value);
  };

  const handleNewEventDescriptionChange = (event) => {
    setNewEventDescription(event.target.value);
  };

  const addNewEvent = () => {
    if (newEventDate.trim() !== "" && newEventDescription.trim() !== "") {
      const updatedTimeline = [
        ...timelines,
        { date: newEventDate, event: newEventDescription },
      ];
      setTimelines(updatedTimeline);
      setNewEventDate("");
      setNewEventDescription("");
    }

    handleSubmit();
  };

  return (
    <div>
      <div className="File-desc">
        <h1 className="File-Head">{props.head}</h1>
        <p>{props.description}</p>
        <div className="File-info">
          <div>Judge Assigned: {props.judge}</div>
          <div>Filed by: {props.filer}</div>
          <button onClick={toggleTimeline}>
            {isTimelineVisible ? "Hide Timeline" : "Show Timeline"}
          </button>

          {/* New timeline div with conditional rendering based on button click */}
          {isTimelineVisible && (
            <div className="File-timeline">
              <h2>Timeline</h2>
              <div className="timeline-line"></div>
              <ul>
                {timelines.map((timeline, index) => (
                  <li key={index}>
                    <div className="event-box">
                      <span className="event-date">
                        {convertDate(timeline.date)}{" "}
                      </span>
                      <span className="event-description">
                        {timeline.event}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              {isAddingEvent ? (
                <div>
                  <input
                    style={{ height: "30px", marginRight: "10px" }}
                    type="date"
                    value={newEventDate}
                    onChange={handleNewEventDateChange}
                    placeholder="YY-MM-DD"
                  />
                  <input
                    style={{
                      height: "30px",
                      marginRight: "10px",
                      width: "400px",
                    }}
                    type="text"
                    value={newEventDescription}
                    onChange={handleNewEventDescriptionChange}
                    placeholder="Description"
                  />
                  <button
                    style={{
                      background: "blue",
                      padding: "6px",
                      color: "white",
                      borderRadius: "6px",
                    }}
                    onClick={addNewEvent}
                  >
                    Done Adding
                  </button>
                </div>
              ) : (
                <button
                  style={{
                    background: "green",
                    padding: "6px",
                    color: "white",
                    borderRadius: "6px",
                  }}
                  onClick={toggleEdit}
                >
                  Add Event
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

File.propTypes = {
  id: PropTypes.number,
  head: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  judge: PropTypes.string.isRequired,
  filer: PropTypes.string.isRequired,
  timelines: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      event: PropTypes.string.isRequired,
    })
  ).isRequired,
};
