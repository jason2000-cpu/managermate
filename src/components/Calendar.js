'use client'

import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function Cal({ events }){
  const [hoveredEvent, setHoveredEvent] = useState(null);

  return (
    <div className="relative h-[90vh] p-10">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%', marginTop: "1rem",marginBottom: "0", borderWidth: 1, border: 'red' }}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color,
            borderRadius: '0.5rem',
          },
        })}
        onMouseOver={(event) => setHoveredEvent(event)}
        onMouseOut={() => setHoveredEvent(null)}
      />
      {hoveredEvent && (
        <div
          className="absolute bg-white border border-gray-300 p-2 rounded shadow-lg"
          style={{
            top: `${hoveredEvent.y}px`,
            left: `${hoveredEvent.x}px`,
          }}
        >
          <h3 className="font-bold">{hoveredEvent.title}</h3>
          <p>Start: {moment(hoveredEvent.start).format('MMMM Do YYYY')}</p>
          <p>End: {moment(hoveredEvent.end).format('MMMM Do YYYY')}</p>
          <p>{hoveredEvent.description}</p>
        </div>
      )}
    </div>
  );
};

export default Cal;
