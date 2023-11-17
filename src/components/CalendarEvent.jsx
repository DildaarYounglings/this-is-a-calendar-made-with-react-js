import React, { useState } from 'react'
import { todoListContextData } from '../context/TodoListContextWrapper';

export const CalendarEvent = () => {
    const {dialogElRef} = todoListContextData();
    const [calendarEvents,setCalendarEvents] = useState([]);
  return (
    <dialog ref={dialogElRef}>
        <div>
            <button>+</button>
            <ul style={{listStyleType:"none", display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center"}}>
                {calendarEvents.map((calendarEvent,index) => <li>{calendarEvent}</li>)}
            </ul>
        </div>
    </dialog>
  )
}
