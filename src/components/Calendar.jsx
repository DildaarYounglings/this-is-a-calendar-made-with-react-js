import React, { useEffect, useState } from "react";

export const Calendar = () => {
  let date = new Date();
  let year = date.getFullYear();
  let monthState = date.getMonth();
  const [month,setMonth] = useState(monthState)
  const [currentDate, setCurrentDate] = useState("");
  const [day, setDay] = useState([]);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const manipulate = () => {
    // get the first day of the month
    let dayone = new Date(year,monthState, 1).getDay();

    // get the last date of the month
    let lastdate = new Date(year,monthState, 0).getDate();

    // get the day of the last date of the month
    let dayend = new Date(year, monthState, lastdate).getDay();

    // get the last date of the previous month
    let monthlastdate = new Date(year,monthState, 0).getDate();

    let lit = []; // variable to store the generated calendar HTML

    // loop to add the last dates of the previous month
    for (let i = dayone; i > 0; i--) {
      lit.push(<li class="inactive">{monthlastdate - i + 1}</li>);
    }

    // loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++) {
      // check if the current date is today
      let isToday =
        i === date.getDate() &&
        monthState === new Date().getMonth() &&
        year === new Date().getFullYear()
          ? "active"
          : "";
      lit.push(<li class={isToday}>{i}</li>);
    }

    // loop to add the first dates of the next month
    for (let i = dayend; i < 6; i++) {
      lit.push(<li class="inactive">{i - dayend + 1}</li>);
    }

    // update the text of the current date element with the formatted current month and year
    setCurrentDate(`${months[monthState]} ${year}`);

    // update the HTML of the dates element with the generated calendar
    setDay(lit);
  };
  const prevMonth = () => {
    setMonth(month - 1);
    monthState = month;
    if (month < 0 || month > 11) {
      date = new Date(year, month, new Date().getDate());
      year = date.getFullYear();
      monthState = date.getMonth();
    } else {
      /* Set the date to the current date */
      date = new Date();
    }
    manipulate();
  }
  const nextMonth = () => {
    setMonth(month + 1);
    monthState = month;
    if (monthState < 0 || monthState > 11) {
      date = new Date(year, monthState, new Date().getDate());
      year = date.getFullYear();
      monthState = date.getMonth();
    } else {
      /* Set the date to the current date */
      date = new Date();
    }
    manipulate();
  }
  useEffect(() => {
    manipulate();
  }, []);
  return (
    <>
      <style>
        {`
            .calendar-container {
                background: #fff;
                width: 450px;
                border-radius: 10px;
                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
            }
            
            .calendar-container .calendar-header {
                display: flex;
                align-items: center;
                padding: 25px 30px 10px;
                justify-content: space-between;
            }
            
            .calendar-header .calendar-navigation {
                display: flex;
            }
            
            .calendar-header .calendar-navigation span {
                height: 38px;
                width: 38px;
                margin: 0 1px;
                cursor: pointer;
                text-align: center;
                line-height: 38px;
                border-radius: 50%;
                user-select: none;
                color: #aeabab;
                font-size: 1.9rem;
            }
            
            .calendar-navigation span:last-child {
                margin-right: -10px;
            }
            
            .calendar-header .calendar-navigation span:hover {
                background: #f2f2f2;
            }
            
            .calendar-header .calendar-current-date {
                font-weight: 500;
                font-size: 1.45rem;
            }
            
            .calendar-body {
                padding: 20px;
            }
            
            .calendar-body ul {
                list-style: none;
                flex-wrap: wrap;
                display: flex;
                text-align: center;
            }
            
            .calendar-body .calendar-dates {
                margin-bottom: 20px;
            }
            
            .calendar-body li {
                width: calc(100% / 7);
                font-size: 1.07rem;
                color: #414141;
            }
            
            .calendar-body .calendar-weekdays li {
                cursor: default;
                font-weight: 500;
            }
            
            .calendar-body .calendar-dates li {
                margin-top: 30px;
                position: relative;
                z-index: 1;
                cursor: pointer;
            }
            
            .calendar-dates li.inactive {
                color: #aaa;
            }
            
            .calendar-dates li.active {
                color: #fff;
            }
            
            .calendar-dates li::before {
                position: absolute;
                content: "";
                z-index: -1;
                top: 50%;
                left: 50%;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                transform: translate(-50%, -50%);
            }
            
            .calendar-dates li.active::before {
                background: #6332c5;
            }
            
            .calendar-dates li:not(.active):hover::before {
                background: #e4e1e1;
            }
        `}
      </style>
      <div className="calendar-container">
        <header className="calendar-header">
          <p class="calendar-current-date">{currentDate}</p>
          <div class="calendar-navigation">
            <span
              onClick={() => prevMonth()}
              id="calendar-prev"
              class="material-symbols-rounded"
            >
              chevron_left
            </span>
            <span
              onClick={() => nextMonth()}
              id="calendar-next"
              class="material-symbols-rounded"
            >
              chevron_right
            </span>
          </div>
        </header>
        <div class="calendar-body">
          <ul class="calendar-weekdays">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul class="calendar-dates">{day.map((day) => day)}</ul>
        </div>
      </div>
    </>
  );
};
``;
