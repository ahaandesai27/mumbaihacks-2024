// Calendar.js
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function CompanyCalendar() {
  const [events, setEvents] = useState([]);

  // Fetch events from Flask backend
  useEffect(() => {
    fetch('/calendar/events')
      .then((response) => response.json())
      .then((data) => {
        setEvents(
          data.map((event) => ({
            ...event,
            start: new Date(event.start),
            end: new Date(event.end),
          }))
        );
      });
  }, []);

  // Handle adding a new event
  const handleSelect = ({ start, end }) => {
    const title = window.prompt("Enter Event Title:");
    if (title) {
      const newEvent = { title, start, end };
      fetch('/calendar/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      })
        .then((response) => response.json())
        .then((addedEvent) => {
          setEvents((prevEvents) => [
            ...prevEvents,
            {
              ...addedEvent,
              start: new Date(addedEvent.start),
              end: new Date(addedEvent.end),
            },
          ]);
        });
    }
  };

  return (
    <div className="calendar-container" style={{ height: '500px', margin: '50px' }}>
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        defaultView="month"
        views={['month', 'week', 'day']}
        step={30}
        showMultiDayTimes
        defaultDate={new Date()}
        onSelectSlot={handleSelect}
        onSelectEvent={(event) => alert(event.title)}
        style={{ height: '100vh' }}
      />
    </div>
  );
}

export default CompanyCalendar;