import React, { useState } from 'react'

export const CalendarEvent = () => {
    const [calendarEvents,setCalendarEvents] = useState();
  return (
    <dialog>
        <div>
            <button>+</button>
            <ul style={{listStyleType:"none", display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center"}}>
                {calendarEvents.map((calendarEvent,index) => <li>{calendarEvent}</li>)}
            </ul>
        </div>
    </dialog>
  )
}
