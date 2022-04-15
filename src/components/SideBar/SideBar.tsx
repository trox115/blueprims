import React from 'react';
import { format } from 'date-fns';

import './Sidebar.scss';

interface SideBarProps {
  list: { id: number,
    name: string,
    startDate: Date,
    startPoint: Date,
    endDate: Date,
    endPoint:Date,
    description: string
  }[]
}

function SideBar({ list }:SideBarProps) {
  return (
    <aside className="sidebar">
      {
        list.map((schedule) => (
          <div className="list-card" key={ schedule.id }>
            <h3>{ schedule.name }</h3>
            <span className="list-card__start-date">
              { `${ format(new Date(schedule.startDate), 'MMM-dd') } at ${ format(new Date(schedule.startPoint), 'HH:mm') }` }
              { ` to ${ format(new Date(schedule.endDate), 'MMM-dd') } at ${ format(new Date(schedule.endPoint), 'HH:mm') }` }
            </span>
            <p>{ schedule.description }</p>
          </div>
        ))
      }
    </aside>
  );
}

export default SideBar;
